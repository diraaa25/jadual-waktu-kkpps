# =============================================================
# DEPLOY SCRIPT — Sistem Jadual Waktu KKPPS
# Jalankan skrip ini dengan klik kanan > "Run with PowerShell"
# =============================================================

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  DEPLOY - Sistem Jadual Waktu KKPPS" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# -----------------------------------------------
# Langkah 1: Semak Node.js
# -----------------------------------------------
Write-Host "[1/5] Menyemak Node.js..." -ForegroundColor Yellow
$nodeInstalled = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeInstalled) {
    Write-Host "Node.js tidak dijumpai. Memuat turun dan memasang..." -ForegroundColor Red
    
    # Muat turun Node.js installer (LTS)
    $nodeUrl = "https://nodejs.org/dist/v20.17.0/node-v20.17.0-x64.msi"
    $nodeInstaller = "$env:TEMP\node-installer.msi"
    
    Write-Host "Memuat turun Node.js LTS..." -ForegroundColor Yellow
    Invoke-WebRequest -Uri $nodeUrl -OutFile $nodeInstaller -UseBasicParsing
    
    Write-Host "Memasang Node.js..." -ForegroundColor Yellow
    Start-Process msiexec.exe -ArgumentList "/i `"$nodeInstaller`" /quiet /norestart" -Wait
    
    # Refresh PATH
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
    
    Write-Host "Node.js berjaya dipasang!" -ForegroundColor Green
} else {
    $nodeVersion = node --version
    Write-Host "Node.js sudah dipasang: $nodeVersion" -ForegroundColor Green
}

Write-Host ""

# -----------------------------------------------
# Langkah 2: Semak Firebase CLI
# -----------------------------------------------
Write-Host "[2/5] Menyemak Firebase CLI..." -ForegroundColor Yellow
$firebaseInstalled = Get-Command firebase -ErrorAction SilentlyContinue
if (-not $firebaseInstalled) {
    Write-Host "Firebase CLI tidak dijumpai. Memasang..." -ForegroundColor Red
    npm install -g firebase-tools
    
    # Refresh PATH
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
    
    Write-Host "Firebase CLI berjaya dipasang!" -ForegroundColor Green
} else {
    $fbVersion = firebase --version
    Write-Host "Firebase CLI sudah dipasang: $fbVersion" -ForegroundColor Green
}

Write-Host ""

# -----------------------------------------------
# Langkah 3: Login Firebase
# -----------------------------------------------
Write-Host "[3/5] Log masuk ke Firebase..." -ForegroundColor Yellow
Write-Host "Sila log masuk dengan akaun Google anda di tetingkap pelayar..." -ForegroundColor White
firebase login --reauth

Write-Host ""

# -----------------------------------------------
# Langkah 4: Pilih Projek
# -----------------------------------------------
Write-Host "[4/5] Menetapkan projek Firebase..." -ForegroundColor Yellow
firebase use sistem-jadual-waktu-kkpps
if ($LASTEXITCODE -ne 0) {
    Write-Host "Projek tidak dijumpai. Cuba senaraikan projek anda..." -ForegroundColor Red
    firebase projects:list
    $projectId = Read-Host "Masukkan Project ID Firebase anda"
    firebase use $projectId
}

Write-Host ""

# -----------------------------------------------
# Langkah 5: Deploy
# -----------------------------------------------
Write-Host "[5/5] Memulakan deployment..." -ForegroundColor Yellow
Write-Host ""
firebase deploy --only hosting

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "============================================" -ForegroundColor Green
    Write-Host "  DEPLOYMENT BERJAYA!" -ForegroundColor Green
    Write-Host "  URL: https://sistem-jadual-waktu-kkpps.web.app" -ForegroundColor Green
    Write-Host "============================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "============================================" -ForegroundColor Red
    Write-Host "  DEPLOYMENT GAGAL. Sila semak ralat di atas." -ForegroundColor Red
    Write-Host "============================================" -ForegroundColor Red
}

Write-Host ""
Read-Host "Tekan Enter untuk keluar"
