#!/usr/bin/env bash
# Start the flash card app. Installs dependencies on first run.
set -e

cd "$(dirname "$0")"

if [ ! -d node_modules ]; then
  npm install
fi

npm run dev
