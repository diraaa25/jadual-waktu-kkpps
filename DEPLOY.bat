@echo off
title DEPLOY - Sistem Jadual Waktu KKPPS
color 0B
echo.
echo ============================================
echo   DEPLOY - Sistem Jadual Waktu KKPPS
echo ============================================
echo.

:: Tetapkan PATH untuk Node.js dan Firebase
SET "PATH=%PATH%;C:\Program Files\nodejs;%APPDATA%\npm"

:: Tukar ke folder projek
cd /d "C:\Users\User\Desktop\SISTEM JADUAL WAKTU KKPPS"

:: Semak firebase CLI ada
firebase --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo [RALAT] Firebase CLI tidak dijumpai!
    echo Sila jalankan: npm install -g firebase-tools
    pause
    exit /b 1
)

:: Semak status login
echo [1/2] Menyemak status login Firebase...
firebase login:list 2>&1 | findstr /i "No authorized" >nul
IF %ERRORLEVEL% EQU 0 (
    echo.
    echo Belum log masuk. Memulakan proses login...
    echo Sila ikut arahan dalam pelayar yang akan terbuka.
    echo.
    firebase login --no-localhost
    IF %ERRORLEVEL% NEQ 0 (
        echo [RALAT] Login gagal. Cuba semula.
        pause
        exit /b 1
    )
) ELSE (
    echo Login Firebase: OK
)

echo.
echo [2/2] Memulakan deployment ke Firebase Hosting...
echo.

firebase deploy --only hosting

IF %ERRORLEVEL% EQU 0 (
    echo.
    color 0A
    echo ============================================
    echo   BERJAYA! Sistem telah berjaya dipublish!
    echo.
    echo   URL: https://sistem-jadual-waktu-kkpps.web.app
    echo ============================================
    echo.
    start https://sistem-jadual-waktu-kkpps.web.app
) ELSE (
    echo.
    color 0C
    echo ============================================
    echo   GAGAL. Sila semak mesej ralat di atas.
    echo ============================================
)

echo.
pause
