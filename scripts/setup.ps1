# One-shot setup for a fresh Windows PC: checks tools, installs deps, verifies the build.
# Run from the repo root:  powershell -ExecutionPolicy Bypass -File scripts\setup.ps1 [-Install]
param([switch]$Install)
$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")

$tools = @(
  @{ Cmd = "git";  Id = "Git.Git" },
  @{ Cmd = "node"; Id = "OpenJS.NodeJS.LTS" }
)
foreach ($t in $tools) {
  if (Get-Command $t.Cmd -ErrorAction SilentlyContinue) { continue }
  if ($Install) {
    winget install --id $t.Id -e --accept-source-agreements --accept-package-agreements
    Write-Output "Installed $($t.Cmd). Open a new terminal and re-run this script."
    exit 0
  }
  throw "$($t.Cmd) not found. Re-run with -Install, or: winget install --id $($t.Id) -e"
}

$major = [int]((node -v).TrimStart("v").Split(".")[0])
if ($major -lt 20) { throw "Node $(node -v) is too old; install Node 22 LTS (see .nvmrc)." }

npm ci
npm run lint
npm run build
Write-Output ""
Write-Output "Ready. Start the dev server with: npm run dev  ->  http://127.0.0.1:43127"
