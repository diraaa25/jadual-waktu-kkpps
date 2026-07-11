@echo off
title DEPLOY - Sistem Jadual Waktu KKPPS
color 0B
echo.
echo ============================================
echo  DEPLOY - Sistem Jadual Waktu KKPPS
echo ============================================
echo.

SET "PATH=%PATH%;C:\Program Files\nodejs;%APPDATA%\npm"
cd /d "C:\Users\User\Desktop\SISTEM JADUAL WAKTU KKPPS"

:: Tanya penerangan perubahan
echo Apakah perubahan yang anda buat? (tekan Enter untuk skip)
set /p COMMIT_MSG=">> "
IF "%COMMIT_MSG%"=="" SET COMMIT_MSG=kemaskini sistem

echo.

:: ---- STEP 1: GITHUB ----
echo [1/3] Menghantar perubahan ke GitHub...
git add -A
git commit -m "%COMMIT_MSG%"
git push origin main

IF %ERRORLEVEL% EQU 0 (
    echo [OK] GitHub: berjaya!
) ELSE (
    echo [INFO] Tiada perubahan baru atau sudah terkini.
)
echo.

:: ---- STEP 2: NETLIFY (auto via GitHub) ----
echo [2/3] Netlify sedang deploy automatik...
echo [OK] https://sijawap.netlify.app/ akan dikemaskini dalam 1-2 minit
echo.

:: ---- STEP 3: FIREBASE ----
echo [3/3] Menyemak Firebase...
firebase login:list 2>&1 | findstr /i "No authorized" >nul
IF %ERRORLEVEL% EQU 0 (
    echo Belum log masuk Firebase. Login dahulu...
    firebase login --no-localhost
)
firebase deploy --only hosting 2>nul

IF %ERRORLEVEL% EQU 0 (
    echo [OK] Firebase: https://sistem-jadual-waktu-kkpps.web.app
) ELSE (
    echo [INFO] Firebase skip - tiada login atau ralat.
)

echo.
color 0A
echo ============================================
echo  SELESAI! Sistem telah dikemaskini.
echo.
echo  Netlify : https://sijawap.netlify.app/
echo  GitHub  : https://github.com/diraaa25/jadual-waktu-kkpps
echo ============================================
echo.
start https://sijawap.netlify.app/
pause
