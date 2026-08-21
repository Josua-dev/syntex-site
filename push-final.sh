#!/bin/bash
set -e

# Directory
cd "/c/Users/joshu/Downloads/syntex-site" || exit 1

# Initialize git if we haven't already
if [ ! -d ".git" ]; then
  git init
  git config user.name "Claude Code"
  git config user.email "noreply@anthropic.com"
  git add .
  git commit -m "Initial commit: site files"
  git branch -M main
fi

# Add remote (will be a no-op if it already exists)
git remote add origin "https://github.com/Josua-dev/syntex-site.git"

# Fetch any remote changes and rebase onto them (safe no-op if none)
git pull --rebase origin main || true

# Push our local main branch to GitHub
git push -u origin main