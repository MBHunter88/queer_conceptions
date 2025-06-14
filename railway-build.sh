#!/bin/bash

# Install and build the frontend
cd client
npm install
npm run build
cd ..

# Copy dist to server so it can be served
rm -rf server/client-dist
cp -r client/dist server/client-dist

# Install backend dependencies
cd server
npm install