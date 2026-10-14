#!/usr/bin/env bash
# One-shot setup for macOS/Linux/WSL: checks tools, installs deps, verifies the build.
set -euo pipefail
cd "$(dirname "$0")/.."

for cmd in git node npm; do
  command -v "$cmd" >/dev/null || { echo "$cmd not found; install Node 22 LTS and Git first." >&2; exit 1; }
done
major=$(node -v | sed 's/^v//; s/\..*//')
[ "$major" -ge 20 ] || { echo "Node $(node -v) is too old; install Node 22 LTS (see .nvmrc)." >&2; exit 1; }

npm ci
npm run lint
npm run build
echo
echo "Ready. Start the dev server with: npm run dev  ->  http://127.0.0.1:43127"
