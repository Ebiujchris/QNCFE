#!/bin/bash

echo "🚀 Starting Vite build with shell script..."

# Navigate to the project directory
cd "$(dirname "$0")"

# Run vite build directly with node
node ./node_modules/vite/bin/vite.js build

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
else
    echo "❌ Build failed!"
    exit 1
fi