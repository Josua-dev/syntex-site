#!/bin/bash
# Move to the project directory
cd "C:/Users/joshu/Downloads/syntex-site" || exit 1

# Initialize repo if not already (git init won't fail if exists)
git init

# Configure user info (needed for commits)
git config --local user.name "Claude Code"
git config --local user.email "noreply@anthropic.com"

# Stage all tracked files
git add .

# Commit if there are changes
if ! git diff-index --quiet HEAD --; then
    git commit -m "Update site content"
else
    echo "No changes to commit"
fi

# Add remote if not already set
git remote add origin "https://github.com/Josua-dev/syntex-site.git"

# Push to main, set upstream
git push -u origin main