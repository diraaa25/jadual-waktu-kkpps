@echo off
title Firebase Login & Deploy
color 0A
cd /d "%~dp0"

echo ========================================================
echo   LOG MASUK & DEPLOY FIREBASE HOSTING
echo ========================================================
echo.

echo [1/2] Log masuk ke akaun Firebase anda...
firebase login

echo.
echo [2/2] Memulakan deployment ke Firebase Hosting...
firebase deploy --only hosting

echo.
echo ========================================================
echo   SELESAI!
echo   URL: https://sistem-jadual-waktu-kkpps.web.app
echo ========================================================
echo.
pause

