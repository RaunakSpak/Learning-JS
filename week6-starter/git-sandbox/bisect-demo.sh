#!/usr/bin/env bash
set -euo pipefail
cat > test.sh <<'EOF'
#!/usr/bin/env bash
if [ -f bug.txt ]; then exit 1; else exit 0; fi
EOF
chmod +x test.sh

git bisect start
git bisect bad
GOOD_SHA=$(git rev-list --max-parents=0 HEAD | tail -n 1)
git bisect good "$GOOD_SHA"
git bisect run ./test.sh
git bisect reset
