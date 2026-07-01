# Simple PowerShell Static HTTP Server
# Serves the current directory or specified directory on port 8080.
# Automatically detects and binds to local IPv4 addresses to prevent "Bad Request - Invalid Hostname".

# Clean up any existing listeners in this session to prevent port conflicts
if ($null -ne $global:HttpListener) {
    try {
        $global:HttpListener.Stop()
        $global:HttpListener.Close()
        Write-Output "Stopped existing HTTP listener from this session."
    } catch {}
}

$port = 8080

# Serve files from the target directory
$targetDir = $args[0]
if (-not $targetDir) {
    $targetDir = Get-Location
}
$targetDir = Resolve-Path $targetDir

Write-Output "=========================================================="
Write-Output "Starting Local HTTP Server on Port $port..."
Write-Output "Serving directory: $targetDir"
Write-Output "=========================================================="

# Get local IPv4 addresses to listen on (prevents "Bad Request - Invalid Hostname")
$localIPs = @()
try {
    $ips = [System.Net.Dns]::GetHostAddresses([System.Net.Dns]::GetHostName()) | 
        Where-Object { $_.AddressFamily -eq 'InterNetwork' } | 
        ForEach-Object { $_.ToString() }
    if ($null -ne $ips) {
        $localIPs = @($ips)
    }
} catch {
    Write-Warning "Could not retrieve local IP addresses: $_"
}

$listener = $null
$boundType = ""

# 1. Try wildcard first (requires Admin, but enables everything)
try {
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://*:$($port)/")
    $listener.Start()
    $boundType = "wildcard"
    Write-Output "Status: Listening on http://*:$($port)/ (Wildcard binding successful)"
} catch {
    if ($null -ne $listener) {
        try { $listener.Close() } catch {}
    }
    # 2. Try loopbacks + specific local IPs
    try {
        $listener = New-Object System.Net.HttpListener
        $listener.Prefixes.Add("http://localhost:$($port)/")
        $listener.Prefixes.Add("http://127.0.0.1:$($port)/")
        $listener.Prefixes.Add("http://[::1]:$($port)/")
        foreach ($ip in $localIPs) {
            $listener.Prefixes.Add("http://$($ip):$($port)/")
        }
        $listener.Start()
        $boundType = "specific"
        Write-Output "Status: Listening on localhost and specific local IPs"
    } catch {
        if ($null -ne $listener) {
            try { $listener.Close() } catch {}
        }
        # 3. Fallback to just loopback
        try {
            $listener = New-Object System.Net.HttpListener
            $listener.Prefixes.Add("http://localhost:$($port)/")
            $listener.Prefixes.Add("http://127.0.0.1:$($port)/")
            $listener.Prefixes.Add("http://[::1]:$($port)/")
            $listener.Start()
            $boundType = "loopback"
            Write-Output "Status: Listening on loopback (localhost/127.0.0.1) only"
        } catch {
            Write-Error "Failed to start HTTP listener on port $($port). Exception: $_"
            Write-Error "Stack Trace: $($_.ScriptStackTrace)"
            exit 1
        }
    }
}

# Save new listener in global scope to allow session cleanup on next run
$global:HttpListener = $listener

# Print active server URLs
Write-Output "`nYou can access the server at the following URLs:"
Write-Output "  - http://localhost:$($port)/index.html"
Write-Output "  - http://127.0.0.1:$($port)/index.html"
foreach ($ip in $localIPs) {
    Write-Output "  - http://$($ip):$($port)/index.html"
}

if ($boundType -eq "loopback" -and $localIPs.Count -gt 0) {
    Write-Output "`n[WARNING] Server is bound to loopback only because specific IP or wildcard binding failed."
    Write-Output "To enable access from other devices on your local network (e.g., http://$($localIPs[0]):$($port)/):"
    Write-Output "  1. Run this PowerShell window as Administrator, OR"
    Write-Output "  2. Run the following command in an Administrator Command Prompt once to register the URL:"
    foreach ($ip in $localIPs) {
        Write-Output "     netsh http add urlacl url=http://$($ip):$($port)/ user=Everyone"
    }
}

Write-Output "`nPress Ctrl+C to stop the server."
Write-Output "----------------------------------------------------------"

try {
    # Request loop
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            # Parse and sanitize local path
            $urlPath = $request.Url.LocalPath.TrimStart('/')
            if ([string]::IsNullOrEmpty($urlPath)) { 
                $urlPath = "index.html" 
            }
            
            $filePath = Join-Path $targetDir $urlPath
            
            # Log incoming request
            Write-Output "$(Get-Date -Format 'HH:mm:ss') - $($request.HttpMethod) $($request.Url.LocalPath)"
            
            if (Test-Path $filePath -PathType Leaf) {
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                
                # Determine correct content type
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".htm"  { "text/html; charset=utf-8" }
                    ".css"  { "text/css; charset=utf-8" }
                    ".js"   { "application/javascript; charset=utf-8" }
                    ".png"  { "image/png" }
                    ".jpg"  { "image/jpeg" }
                    ".jpeg" { "image/jpeg" }
                    ".gif"  { "image/gif" }
                    ".svg"  { "image/svg+xml" }
                    ".json" { "application/json; charset=utf-8" }
                    ".xlsx" { "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }
                    ".xls"  { "application/vnd.ms-excel" }
                    ".ico"  { "image/x-icon" }
                    ".txt"  { "text/plain; charset=utf-8" }
                    default { "application/octet-stream" }
                }
                
                $response.ContentType = $contentType
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $response.StatusCode = 404
                $bytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found - File '$urlPath' not found on local server.")
                $response.ContentType = "text/plain; charset=utf-8"
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
        } catch {
            Write-Warning "Error processing request: $_"
        } finally {
            if ($null -ne $response) {
                try {
                    $response.Close()
                } catch {}
            }
        }
    }
} finally {
    if ($null -ne $listener) {
        try {
            $listener.Stop()
            $listener.Close()
            Write-Output "HTTP server stopped and listener closed."
        } catch {}
    }
}
