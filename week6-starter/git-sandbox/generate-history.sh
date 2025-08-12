#!/usr/bin/env bash
set -euo pipefail
rm -rf .git
git init
git config user.name "Week6 Bot"
git config user.email "week6@example.com"

echo "v1" > app.txt
git add . && git commit -m "init: v1"

git checkout -b feature/a
echo "A change" >> app.txt
git add app.txt && git commit -m "feat(a): add A change"

git checkout -b feature/b main
echo "B change" >> app.txt
git add app.txt && git commit -m "feat(b): add B change"

git checkout main
git merge --no-ff feature/a -m "merge: feature/a"

CHERRY_SHA=$(git rev-list -1 feature/b)
git cherry-pick "${CHERRY_SHA}"

git checkout feature/b
git rebase main
git checkout main
git merge feature/b -m "merge: feature/b after rebase"

echo "bug present" > bug.txt
git add bug.txt && git commit -m "bug: introduce bug for bisect demo"
