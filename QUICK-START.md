# Quick Start - Public Website Deployment

## ✅ Project is Ready!

Your public marketing website has been created and tested successfully.

## Current Status

- ✅ Project created at `/Users/jonoairey/privly-public`
- ✅ All marketing pages copied and working
- ✅ Build tested and passing
- ✅ UI components configured
- ✅ Contact form ready (forwards to main app)
- ✅ Redirects configured in main app (disabled until you deploy)

## Deploy in 5 Minutes

### 1. Create GitHub Repository

```bash
cd /Users/jonoairey/privly-public
git init
git add .
git commit -m "Initial commit - Privly public website"
```

Create repo on GitHub:
- Name: `privly-public`
- Visibility: Public or Private

```bash
git remote add origin https://github.com/YOUR_USERNAME/privly-public.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your `privly-public` repository
3. Click "Deploy"

That's it! Vercel will:
- Auto-detect Next.js
- Install dependencies
- Build the project
- Deploy it

### 3. Configure Domain (Optional but Recommended)

After deployment:

1. Go to Project Settings → Domains
2. Add your domain: `www.useprivly.com` or `useprivly.com`
3. Follow Vercel's DNS instructions

### 4. Add Environment Variables

In Vercel project settings → Environment Variables:

```
NEXT_PUBLIC_APP_URL=https://www.useprivly.com
NEXT_PUBLIC_SITE_URL=https://www.useprivly.com
```

Redeploy after adding env vars.

### 5. Enable Redirects in Main App (When Ready)

Once public site is working, go to your main app (`privly-me`) in Vercel:

1. Add environment variable:
   ```
   NEXT_PUBLIC_MARKETING_SITE_URL=https://www.useprivly.com
   ```

2. Redeploy main app

3. Now traffic flows correctly:
   - `/` → Public site
   - `/scam-watch` → Public site
   - `/dashboard` → Main app
   - `/auth/*` → Main app
   - `/api/*` → Main app

## What Pages Are Included?

**✅ Public Pages:**
- Homepage (`/`)
- Product pages (`/scam-watch`, `/personal`, `/professional`)
- Pricing (`/pricing`)
- About (`/about`)
- Blog (`/blog`)
- Legal (`/privacy`, `/terms`)
- Use cases (`/use-cases/*`)
- Business (`/for-business`, `/family`)

**🔒 Main App Pages (stay in privly-me):**
- Dashboard (`/dashboard/*`)
- Authentication (`/auth/*`)
- APIs (`/api/*`)
- Payments (`/payment/*`)

## Test Locally First (Optional)

```bash
cd /Users/jonoairey/privly-public
npm run dev
```

Visit: `http://localhost:3000`

Check:
- ✅ Homepage loads
- ✅ Product pages work
- ✅ Pricing page works
- ✅ All buttons link to signup/signin

## Rollback

If anything goes wrong, simply:
1. Remove `NEXT_PUBLIC_MARKETING_SITE_URL` from main app
2. Redeploy main app
3. Everything goes back to how it was

## Need Help?

Read the comprehensive guides:
- `SETUP-GUIDE.md` - Detailed step-by-step
- `DEPLOYMENT.md` - Deployment strategies
- `PROJECT-SUMMARY.md` - Complete overview

## Support

The public website will serve pages like:
- `https://www.useprivly.com/`
- `https://www.useprivly.com/scam-watch`
- `https://www.useprivly.com/pricing`

All "Get Started" buttons link to:
- `https://www.useprivly.com/auth/signup`

This means users seamlessly move from marketing to app!

## Benefits You'll See

✅ Marketing updates deploy in seconds
✅ App updates don't affect public pages
✅ Better SEO (static pages)
✅ Improved security (no API keys in public)
✅ Independent scaling
✅ Cleaner codebase

---

**Ready to deploy? Create that GitHub repo and let Vercel do the rest!** 🚀
