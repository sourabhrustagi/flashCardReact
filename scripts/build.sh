#!/usr/bin/env bash
# Type-check and build the app into dist/. Installs dependencies if they are missing.
set -e

cd "$(dirname "$0")/.."

if [ ! -d node_modules ]; then
  npm install
fi

# Start from a clean dist/ so old build files never ship.
rm -rf dist

npm run build
