# Deployment Guide

## Architecture Overview

**Two Separate Projects:**

1. **Public Website** (`privly-public`) - This project
   - Marketing pages, blog, product pages
   - Static or SSR pages with no user data
   - Domain: `useprivly.com` or `www.useprivly.com`

2. **Main Application** (`privly-me`) - Your existing project
   - Dashboard, auth, APIs, payments
   - Domain: `app.useprivly.com` or same domain with dynamic routes

## Option 1: Same Domain (Recommended)

Keep both on `www.useprivly.com` but as separate Vercel projects with different route priorities.

### Setup:

1. **Deploy Public Website**
   - Project: `privly-public`
   - Domain: `www.useprivly.com`
   - Routes: `/*` (catch-all for public pages)

2. **Deploy Main App**
   - Project: `privly-me`
   - Domain: `www.useprivly.com`
   - Routes: `/dashboard/*`, `/auth/*`, `/api/*`, `/payment/*`
   - Higher priority in routing

3. **Vercel Routing Config**

   In your main app (`privly-me`), create `vercel.json`:
   ```json
   {
     "routes": [
       {
         "src": "/(dashboard|auth|api|payment|settings)(/.*)?",
         "dest": "/",
         "headers": {
           "x-project": "main-app"
         }
       }
     ]
   }
   ```

## Option 2: Subdomain (Easier)

Separate domains for clarity.

### Setup:

1. **Public Website**
   - Domain: `www.useprivly.com`
   - All public marketing pages

2. **Main App**
   - Domain: `app.useprivly.com`
   - All dashboard, auth, APIs

3. **Update Links**
   - Public site links to `app.useprivly.com/auth/signup`
   - Main app already configured

## Deployment Steps

### 1. Deploy Public Website

```bash
cd /Users/jonoairey/privly-public
git init
git add .
git commit -m "Initial public website"
```

Then on Vercel:
- Import `privly-public` as new project
- Set domain to `www.useprivly.com` or `useprivly.com`
- Add environment variable:
  - `NEXT_PUBLIC_APP_URL=https://www.useprivly.com` (or `https://app.useprivly.com` if using subdomain)

### 2. Update Main App Links

In `privly-me`, public routes should redirect to public site:

Create redirects in `next.config.js`:
```js
async redirects() {
  return [
    {
      source: '/',
      destination: 'https://useprivly.com',
      permanent: false
    },
    {
      source: '/scam-watch',
      destination: 'https://useprivly.com/scam-watch',
      permanent: false
    },
    // ... other public pages
  ]
}
```

### 3. Verify Setup

**Test these URLs:**

Public Website:
- ✅ `https://www.useprivly.com/` - Homepage
- ✅ `https://www.useprivly.com/scam-watch`
- ✅ `https://www.useprivly.com/pricing`
- ✅ `https://www.useprivly.com/blog`

Main App:
- ✅ `https://www.useprivly.com/dashboard` (or `app.useprivly.com/dashboard`)
- ✅ `https://www.useprivly.com/auth/signin`
- ✅ `https://www.useprivly.com/api/health`

## Environment Variables

### Public Website (.env.local)
```
NEXT_PUBLIC_APP_URL=https://www.useprivly.com
NEXT_PUBLIC_SITE_URL=https://useprivly.com
```

### Main App (keep existing)
All existing environment variables stay the same.

## Benefits

✅ Marketing updates don't redeploy the app
✅ App updates don't affect SEO or marketing pages
✅ Better performance (static public pages)
✅ Improved security (no API keys in public site)
✅ Independent scaling and monitoring

## Rollback

If something goes wrong, just point the domain back to `privly-me` project temporarily.
