#!/bin/bash
set -e

# Directory
cd "/c/Users/joshu/Downloads/syntex-site" || exit 1

# Configure git identity
git config --local user.name "Claude Code"
git config --local user.email "noreply@anthropic.com"

# Initialize repository if it's empty
if [ ! -d ".git" ]; then
  git init
  git branch -M main
fi

# Add remote if not already added
git remote add origin "https://github.com/Josua-dev/syntex-site.git" || true

# Fetch any remote changes (quietly)
git fetch origin

# Merge remote/main into local main if there are any remote changes
if git rev-parse --verify origin/main >/dev/null 2>&1; then
  if ! git merge --quiet --no-edit origin/main; then
    echo "Merge conflict; please resolve manually."
    exit 1
  fi
fi

# Ensure we are on the main branch
git checkout main

# Add all changes
git add .

# Commit if there are changes
if git diff --cached --quiet; then
  echo "No changes to commit."
else
  git commit -m "Update site content"
fi

# Push to remote main
git push -u origin main