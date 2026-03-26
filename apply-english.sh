#!/bin/bash
# Run from snapstudio repo root
cd "$(git rev-parse --show-toplevel)" || exit 1
echo "Applying English translation patch..."
cat patches/part1.b64 patches/part2.b64 | base64 -d | git apply -
if [ $? -eq 0 ]; then
  rm -rf patches/ apply-english.sh
  git add -A
  git commit -m "Translate entire codebase to English + add admin setup script"
  echo "Success! Now run: git push origin main"
else
  echo "Patch failed. Try: cat patches/part1.b64 patches/part2.b64 | base64 -d | git apply --check"
fi
