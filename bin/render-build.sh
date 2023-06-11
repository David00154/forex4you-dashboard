#!/usr/bin/env bash

# exit on error
set -o errexit

npm i
node ace build --ignore-ts-errors --production --no-assets
cd build
echo "RUNNING CI..."
npm ci --production
echo "RUNNING MIGRATION"
node ace migration:run
echo "GOING OUT OF BUILD"
cd ..