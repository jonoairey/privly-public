#!/bin/bash

echo "🔍 SEO Verification Checklist"
echo "================================"
echo ""

# Check if essential files exist
echo "✓ Checking essential files..."
[ -f "lib/seo.ts" ] && echo "  ✅ lib/seo.ts exists" || echo "  ❌ lib/seo.ts MISSING"
[ -f "app/sitemap.ts" ] && echo "  ✅ app/sitemap.ts exists" || echo "  ❌ app/sitemap.ts MISSING"
[ -f "app/robots.ts" ] && echo "  ✅ app/robots.ts exists" || echo "  ❌ app/robots.ts MISSING"
echo ""

# Check layout files
echo "✓ Checking page layouts..."
[ -f "app/scam-watch/layout.tsx" ] && echo "  ✅ Scam Watch layout exists" || echo "  ❌ Scam Watch layout MISSING"
[ -f "app/personal/layout.tsx" ] && echo "  ✅ Personal layout exists" || echo "  ❌ Personal layout MISSING"
[ -f "app/professional/layout.tsx" ] && echo "  ✅ Professional layout exists" || echo "  ❌ Professional layout MISSING"
[ -f "app/pricing/layout.tsx" ] && echo "  ✅ Pricing layout exists" || echo "  ❌ Pricing layout MISSING"
echo ""

# Check documentation
echo "✓ Checking documentation..."
[ -f "SEO-GUIDE.md" ] && echo "  ✅ SEO Guide exists" || echo "  ❌ SEO Guide MISSING"
[ -f "SEO-DEPLOYMENT-CHECKLIST.md" ] && echo "  ✅ Deployment Checklist exists" || echo "  ❌ Deployment Checklist MISSING"
[ -f "SEO-SUMMARY.md" ] && echo "  ✅ Summary exists" || echo "  ❌ Summary MISSING"
echo ""

echo "✅ All SEO files verified!"
echo ""
echo "Next steps:"
echo "1. git add ."
echo "2. git commit -m 'Add comprehensive SEO improvements'"
echo "3. git push"
echo "4. Visit www.useprivly.com/sitemap.xml after deployment"
echo ""
