#!/bin/bash
# Copy 11 product images from ~/Downloads/1200-1600/ into public/products/
# Each subdirectory's first .jpg is copied to public/products/<slug>.jpg

PROJECT="/Users/yeep/spectryeep"
SRC_ROOT="/Users/yeep/Downloads/1200-1600"

mkdir -p "$PROJECT/public/products"

for slug_dir in "$SRC_ROOT"/*/; do
  slug=$(basename "$slug_dir")
  copied=0
  for jpg_file in "$slug_dir"*.jpg; do
    if [ -f "$jpg_file" ]; then
      cp "$jpg_file" "$PROJECT/public/products/$slug.jpg"
      echo "OK  $slug"
      copied=1
      break
    fi
  done
  if [ $copied -eq 0 ]; then
    echo "MISS $slug -- no .jpg found in $slug_dir"
  fi
done

echo "---"
echo "Files now in public/products/:"
ls -la "$PROJECT/public/products/"
echo "---"
echo "Building..."
cd "$PROJECT"
npm run build 2>&1 | tail -30
