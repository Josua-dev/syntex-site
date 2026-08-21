#!/bin/bash
set -e

# Directory
cd "/c/Users/joshu/Downloads/syntex-site" || exit 1

# Set git identity
git config --local user.name "Claude Code"
git config --local user.email "noreply@anthropic.com"

# Fetch any remote changes
git fetch origin

# Create local master branch tracking origin/master if not exists
git checkout -b master origin/master 2>/dev/null || echo "Branch master already checked out"

# Stage all changes
git add .

# Commit if there are changes
if ! git diff-index --quiet HEAD; then
    git commit -m "Update site content"
else
    echo "No changes to commit"
fi

# Push to remote master
git push -u origin master