#!/usr/bin/env bash
set -euo pipefail

echo "=== AfroSphere Setup ==="
echo ""

# --- Sanity ---
if ! npx sanity --version &>/dev/null; then
  echo "Installing Sanity CLI..."
  npm install -g sanity
fi

echo "--- Sanity CMS ---"
echo "Log in to Sanity to create your project:"
npx sanity login
echo "Creating Sanity project..."
OUTPUT=$(npx sanity init --project-name "AfroSphere" --dataset production --output-path ./studio --yes --bare 2>&1)
SANITY_PROJECT_ID=$(echo "$OUTPUT" | grep -oP 'projectId":\s*"\K[^"]+')
echo "Sanity project created: $SANITY_PROJECT_ID"

# --- Supabase ---
echo ""
echo "--- Supabase ---"
echo "Log in to Supabase:"
npx supabase login
echo "Creating Supabase project..."
npx supabase projects create AfroSphere --org-id "$(npx supabase orgs list --json | jq -r '.[0].id')" --db-password "$(openssl rand -base64 16)"
SUPABASE_REF=$(npx supabase projects list --json | jq -r '.[] | select(.name == "AfroSphere") | .id')
echo "Supabase project created: $SUPABASE_REF"

# Get Supabase URL and anon key
SUPABASE_URL="https://$SUPABASE_REF.supabase.co"
SUPABASE_ANON_KEY=$(npx supabase projects api-keys --ref "$SUPABASE_REF" --json | jq -r '.[] | select(.name == "anon public") | .api_key')

# Run migration
echo "Running migrations..."
npx supabase db push --project-ref "$SUPABASE_REF"

# --- .env.local ---
echo ""
echo "--- Environment Variables ---"
cat > .env.local << EOF
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=$SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET=production

# Supabase
NEXT_PUBLIC_SUPABASE_URL=$SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=$SUPABASE_ANON_KEY
EOF
echo ".env.local created with your project credentials"

# --- Vercel ---
if command -v vercel &>/dev/null; then
  echo ""
  echo "--- Vercel ---"
  vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID production <<< "$SANITY_PROJECT_ID"
  vercel env add NEXT_PUBLIC_SANITY_DATASET production <<< "production"
  vercel env add NEXT_PUBLIC_SUPABASE_URL production <<< "$SUPABASE_URL"
  vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production <<< "$SUPABASE_ANON_KEY"
  echo "Vercel env vars set. Redeploying..."
  vercel deploy --prod --yes
fi

echo ""
echo "=== Setup complete! ==="
echo "Deploy your Sanity Studio schemas: npx sanity deploy"
echo "Add content at: https://afmosphere.sanity.studio"
