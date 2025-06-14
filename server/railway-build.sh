#!/bin/bash
set -e
set -x

# Install and build the frontend
cd ../client
npm install
npm run build

# Copy dist to server folder
rm -rf ../server/client-dist
cp -r dist ../server/client-dist

# Go back to server and install backend dependencies
cd ../server
npm install