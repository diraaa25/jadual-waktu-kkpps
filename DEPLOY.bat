@echo off
title DEPLOY - GitHub + Firebase + Netlify
color 0B
echo.
echo ============================================
echo  DEPLOY PENUH - Sistem Jadual Waktu KKPPS
echo  GitHub + Firebase + Netlify
echo ============================================
echo.

SET "PATH=%PATH%;C:\Program Files\nodejs;%APPDATA%\npm"
cd /d "C:\Users\User\Desktop\SISTEM JADUAL WAKTU KKPPS"

:: ---- STEP 1: GITHUB ----
echo [GITHUB] Menolak perubahan terkini ke GitHub...
git add -A
git commit -m "deploy: kemaskini sistem %DATE% %TIME%" 2>nul
git push origin main
IF %ERRORLEVEL% EQU 0 (
    echo [OK] GitHub: berjaya push ke https://github.com/diraaa25/jadual-waktu-kkpps
) ELSE (
    echo [INFO] Tiada perubahan baru atau push telah selesai.
)
echo.

:: ---- STEP 2: NETLIFY (auto via GitHub) ----
echo [NETLIFY] Netlify akan deploy automatik dari GitHub...
echo [OK] Netlify: https://sijawap.netlify.app/ akan dikemaskini dalam 1-2 minit
echo.

:: ---- STEP 3: FIREBASE ----
echo [FIREBASE] Menyemak status login Firebase...
firebase login:list 2>&1 | findstr /i "No authorized" >nul
IF %ERRORLEVEL% EQU 0 (
    echo Belum log masuk ke Firebase. Memulakan login...
    echo.
    firebase login --no-localhost
    IF %ERRORLEVEL% NEQ 0 (
        echo [RALAT] Login Firebase gagal.
        pause
        exit /b 1
    )
) ELSE (
    echo [OK] Sudah log masuk ke Firebase.
)

echo.
echo [FIREBASE] Memulakan deployment ke Firebase Hosting...
firebase deploy --only hosting

IF %ERRORLEVEL% EQU 0 (
    echo [OK] Firebase: https://sistem-jadual-waktu-kkpps.web.app
) ELSE (
    echo [RALAT] Firebase deploy gagal. Sila semak mesej di atas.
)

echo.
color 0A
echo ============================================
echo  RINGKASAN DEPLOYMENT:
echo.
echo  GitHub  : https://github.com/diraaa25/jadual-waktu-kkpps
echo  Netlify : https://sijawap.netlify.app/
echo  Firebase: https://sistem-jadual-waktu-kkpps.web.app
echo ============================================
echo.
start https://sijawap.netlify.app/
pause
