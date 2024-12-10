#!/bin/bash

# Updates the glicol lib files

# Variables
REPO_URL="https://github.com/chaosprint/glicol.git"
TARGET_DIR="./lib/glicol"
CLONE_DIR="./lib/tmp"
FILES_TO_COPY=("LICENSE" "js/src/glicol-api.json" "js/assets")

# Remove existing files
rm -rf "$CLONE_DIR"
rm -rf "$TARGET_DIR"

# Create the target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Clone the repository into a temporary directory
echo "Cloning glicol repository..."
git clone "$REPO_URL" "$CLONE_DIR"

if [ $? -ne 0 ]; then
  echo "Error: Failed to clone repository."
  exit 1
fi

# Copy specified files to the target directory
echo "Copying files..."
for item in "${FILES_TO_COPY[@]}"; do
  if [ -e "$CLONE_DIR/$item" ]; then
    cp -r "$CLONE_DIR/$item" "$TARGET_DIR"
  else
    echo "Warning: $item does not exist in the repository."
  fi
done

# Remove the temporary repository directory
echo "Cleaning up..."
rm -rf "$CLONE_DIR"

echo "Done! Files copied to $TARGET_DIR"
