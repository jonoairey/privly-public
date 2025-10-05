# Complete Setup Guide

This guide will walk you through deploying the separated public website and main application.

## Current State

- ✅ Public website project created at `/Users/jonoairey/privly-public`
- ✅ All marketing pages copied over
- ✅ UI components set up
- ✅ Contact form configured to forward to main app
- ✅ Main app redirects configured (disabled until public site is live)

## Step-by-Step Deployment

### Step 1: Test Public Website Locally

```bash
cd /Users/jonoairey/privly-public
npm run dev
```

Open `http://localhost:3000` and verify:
- ✅ Homepage loads correctly
- ✅ All product pages work (`/scam-watch`, `/personal`, `/professional`)
- ✅ Pricing page works
- ✅ Blog page works
- ✅ Contact form appears (won't work until deployed)

### Step 2: Create Git Repository for Public Site

```bash
cd /Users/jonoairey/privly-public
git init
git add .
git commit -m "Initial commit - Privly public website"
```

Then push to GitHub:
```bash
# Create a new repo on GitHub called "privly-public"
git remote add origin https://github.com/YOUR_USERNAME/privly-public.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

#### Option A: Same Domain (www.useprivly.com)

1. Go to Vercel Dashboard
2. Click "Add New Project"
3. Import `privly-public` repository
4. Configure:
   - **Project Name**: `privly-public`
   - **Framework**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

5. Add Environment Variables:
   ```
   NEXT_PUBLIC_APP_URL=https://www.useprivly.com
   NEXT_PUBLIC_SITE_URL=https://www.useprivly.com
   ```

6. Deploy the project

7. After deployment, add custom domain:
   - Go to Project Settings → Domains
   - Add `useprivly.com` (will redirect to www)
   - Add `www.useprivly.com`

#### Option B: Subdomain (app.useprivly.com for main app)

1. Deploy public site to `www.useprivly.com` (follow Option A)

2. Update main app (`privly-me`) domain:
   - Go to `privly-me` project in Vercel
   - Settings → Domains
   - Add `app.useprivly.com`

3. Update environment variables:
   - In `privly-public`: `NEXT_PUBLIC_APP_URL=https://app.useprivly.com`
   - In `privly-me`: Keep as is

### Step 4: Enable Redirects in Main App

Once the public website is deployed and working:

1. Add environment variable to `privly-me` in Vercel:
   ```
   NEXT_PUBLIC_MARKETING_SITE_URL=https://www.useprivly.com
   ```

2. Redeploy `privly-me`

3. Now when users visit:
   - `www.useprivly.com/` → Public site homepage
   - `www.useprivly.com/scam-watch` → Public site
   - `www.useprivly.com/dashboard` → Main app (stays)
   - `www.useprivly.com/auth/signin` → Main app (stays)

### Step 5: Update Links

All auth and signup links in the public site point to the main app:
- Already configured in all button links
- Example: `/auth/signup` → `https://www.useprivly.com/auth/signup`

No changes needed if using same domain!

### Step 6: Verify Everything Works

**Test Public Site:**
- ✅ Homepage displays correctly
- ✅ All CTAs link to signup/signin
- ✅ Product pages load
- ✅ Contact form submits successfully

**Test Main App:**
- ✅ Dashboard still works
- ✅ Auth flows work
- ✅ API endpoints work
- ✅ Payment processing works

**Test Redirects:**
- ✅ Visiting `/` redirects to public site
- ✅ Visiting `/scam-watch` redirects to public site
- ✅ Visiting `/dashboard` stays on main app
- ✅ Visiting `/auth/signin` stays on main app

## Domain Configuration

### If Using Same Domain (www.useprivly.com)

**Public Website (`privly-public`):**
- Primary: `www.useprivly.com`
- Alias: `useprivly.com` (redirects to www)

**Main App (`privly-me`):**
- Same domain: `www.useprivly.com`
- Routes: `/dashboard/*`, `/auth/*`, `/api/*`, `/payment/*`
- When user visits `/`, redirect to public site
- When user visits `/dashboard`, serve from main app

This works because:
1. Public site handles `/`, `/scam-watch`, `/pricing`, etc.
2. Main app handles `/dashboard`, `/auth`, `/api`
3. Redirects in main app send public pages to public site

### If Using Subdomains

**Public Website:**
- `www.useprivly.com`
- `useprivly.com`

**Main App:**
- `app.useprivly.com`

This is simpler but users need to go to `app.useprivly.com/dashboard`

## Rollback Plan

If anything goes wrong:

1. Remove `NEXT_PUBLIC_MARKETING_SITE_URL` from main app
2. Redeploy main app
3. All traffic goes back to `privly-me` project
4. Public pages work as before

## Maintenance

**Updating Marketing Pages:**
- Edit files in `/Users/jonoairey/privly-public`
- Commit and push to GitHub
- Vercel auto-deploys
- Main app is NOT affected ✅

**Updating Dashboard/Features:**
- Edit files in `/Users/jonoairey/privly-me`
- Commit and push to GitHub
- Vercel auto-deploys
- Public marketing site is NOT affected ✅

## Next Steps

1. Test public site locally ✅
2. Create GitHub repository
3. Deploy to Vercel
4. Configure domains
5. Enable redirects
6. Verify everything works
7. Celebrate! 🎉

You now have a properly separated architecture where marketing and app updates are independent!
