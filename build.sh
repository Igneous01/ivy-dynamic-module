#!/bin/bash

set -e
PATH="$PATH:$(npm bin)"


echo "Prepare"
rm -rf build
rm -rf dist

echo "Compile"
ngc

echo "Bundle"
rollup -c rollup.config.js

echo "Deploy"
cp build/*.d.ts dist/

echo '{"version": "0.0.1", "name": "app", "main": "app.js"}' > dist/package.json

echo "Done"