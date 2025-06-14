#!/bin/bash
set -e

# Install dependencies
npm install --prefix server
npm install --prefix client

# Copy environment files if they don't exist
if [ ! -f server/.env ]; then
  cp server/.env.example server/.env
  echo "Created server/.env from server/.env.example"
fi

if [ ! -f client/.env ]; then
  cp client/.env.example client/.env
  echo "Created client/.env from client/.env.example"
fi

# Run database migrations
if [ -n "$DATABASE_URI" ]; then
  echo "Running database migrations..."
  psql "$DATABASE_URI" < server/db.sql
else
  echo "DATABASE_URI not set. Skipping database setup."
fi

# Print instructions
cat <<EOM
\nSetup complete!\nTo start the backend, run:\n  npm start --prefix server\nTo start the frontend, run:\n  npm run dev --prefix client\nEOM
