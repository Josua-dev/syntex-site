#!/bin/bash
# Clone the existing remote repo, overwrite its contents with the current site files, then push

# Define paths
REPO_CLONE="C:/Users/joshu/Downloads/syntex-site-clone"
SOURCE_DIR="C:/Users/joshu/Downloads/syntex-site/syntex-site"
REMOTE_URL="https://github.com/Josua-dev/syntex-site.git"

# Remove any existing clone
rm -rf "$REPO_CLONE"

# Clone the remote repository
git clone "$REMOTE_URL" "$REPO_CLONE"
if [ $? -ne 0 ]; then
  echo "Failed to clone the repository"
  exit 1
fi

# Enter the cloned directory
cd "$REPO_CLONE" || exit 1

# Remove all tracked files (keeps .git intact)
git rm -r . || exit 1

# Copy the new site files into the clone
cp -r "$SOURCE_DIR/." . || exit 1

# Stage all changes
git add .

# Check if there are any changes to commit
if git diff-index --quiet HEAD --; then
  echo "No changes to commit"
  # Nothing to commit, but we can still ensure we're up to date
  git reset --hard
  exit 0
fi

# Commit the changes
git commit -m "Update site content"

# Push to the remote (default branch will be used)
git push