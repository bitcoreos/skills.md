#!/bin/bash
set -e
for skill in sources/**/*.js; do
  [ -e "$skill" ] || continue
  echo "Verifying $skill..."
  # Extract body (everything after second ---)
  BODY=$(awk '/^---$/{if(++c==2)exit} {if(c==1) print}' "$skill")
  CODE=$(awk '/^---$/&&++c==2{flag=1} flag' "$skill" | tail -n +2)
  
  # Calculate Hash
  CALC_HASH=$(echo "$CODE" | sha256sum | cut -d' ' -f1)
  
  # Extract Declared Hash
  DECLARED_HASH=$(grep "^hash:" "$skill" | head -n 1 | cut -d: -f2 | tr -d ' ' | sed 's/sha256://')
  
  if [ "$CALC_HASH" != "$DECLARED_HASH" ]; then
    echo "❌ Hash Mismatch for $skill"
    echo "Calculated: $CALC_HASH"
    echo "Declared:   $DECLARED_HASH"
    exit 1
  fi
  echo "✅ $skill verified."
done
