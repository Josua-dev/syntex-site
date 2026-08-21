#!/bin/bash
# Initialize git repo (if not already), add all files, commit, set remote, push to GitHub

# Initialize git repository
git init

# Stage all files
git add .

# Commit changes
git commit -m "Initial commit: add syntex-site files"

# Add GitHub remote (replace if remote already exists)
git remote add origin "https://github.com/Josua-dev/syntex-site.git"

# Push to main branch (creates upstream tracking)
git push -u origin main