Write-Host "=== Agency Frontend Repair Tool ===" -ForegroundColor Cyan

# 1. Check Node.js
Write-Host "1. Checking Node.js..."
if (Get-Command node -ErrorAction SilentlyContinue) {
    $version = node -v
    Write-Host "   Node.js found: $version" -ForegroundColor Green
} else {
    Write-Host "   [ERROR] Node.js is NOT installed or not in PATH." -ForegroundColor Red
    Write-Host "   Please install it from https://nodejs.org/"
    Read-Host "Press Enter to exit..."
    exit
}

# 2. Check NPM
Write-Host "2. Checking NPM..."
if (Get-Command npm -ErrorAction SilentlyContinue) {
    $npmVersion = npm -v
    Write-Host "   NPM found: $npmVersion" -ForegroundColor Green
} else {
    Write-Host "   [ERROR] NPM is NOT installed." -ForegroundColor Red
    Read-Host "Press Enter to exit..."
    exit
}

# 3. Clean Build
Write-Host "3. Cleaning previous build (.next)..."
if (Test-Path .next) {
    Remove-Item -Recurse -Force .next
    Write-Host "   Cleaned." -ForegroundColor Yellow
} else {
    Write-Host "   Already clean."
}

# 4. Install Dependencies
Write-Host "4. Ensuring dependencies are installed..."
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "   [ERROR] npm install failed." -ForegroundColor Red
    Read-Host "Press Enter to exit..."
    exit
}

# 5. Run Server
Write-Host "5. Starting Development Server..." -ForegroundColor Cyan
Write-Host "   Please wait for the server to start, then open http://localhost:3000" -ForegroundColor Gray
npm run dev

Read-Host "Press Enter to close..."
