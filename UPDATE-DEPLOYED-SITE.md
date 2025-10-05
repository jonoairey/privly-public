# Update Your Deployed Public Site

## What Changed

All auth, dashboard, and payment links now point to `app.useprivly.com` instead of relative URLs.

## Steps to Update

### 1. Update Environment Variables in Vercel

Go to your `privly-public` project in Vercel:

1. Settings → Environment Variables
2. Update or add:
   ```
   NEXT_PUBLIC_APP_URL=https://app.useprivly.com
   NEXT_PUBLIC_SITE_URL=https://www.useprivly.com
   ```
3. Save changes

### 2. Push Updated Code

```bash
cd /Users/jonoairey/privly-public
git add .
git commit -m "Update auth links to point to app.useprivly.com"
git push
```

Vercel will automatically redeploy with the new links.

### 3. Verify Your Main App Domain

Make sure your `privly-me` project is accessible at `app.useprivly.com`:

1. Go to `privly-me` project in Vercel
2. Settings → Domains
3. Ensure `app.useprivly.com` is added
4. If not, add it and configure DNS

### 4. Test the Flow

After redeployment, test:

1. Visit `www.useprivly.com`
2. Click "Sign In" or "Get Started"
3. Should redirect to `app.useprivly.com/auth/signin` or `/auth/signup`
4. Auth pages should load correctly

## What Links Were Updated

All these now point to `app.useprivly.com`:

- `/auth/signin` → `https://app.useprivly.com/auth/signin`
- `/auth/signup` → `https://app.useprivly.com/auth/signup`
- `/dashboard` → `https://app.useprivly.com/dashboard`
- `/payment?...` → `https://app.useprivly.com/payment?...`

## Architecture

```
www.useprivly.com (Public Site)
├── Homepage, product pages, pricing, blog
└── All CTA buttons link to app.useprivly.com

app.useprivly.com (Main App)
├── /auth/* - Authentication
├── /dashboard/* - User dashboard
├── /api/* - All APIs
└── /payment/* - Payment processing
```

## Troubleshooting

**If Sign In/Sign Up still show 404:**
- Check that `app.useprivly.com` domain is configured in Vercel for `privly-me`
- Verify DNS is pointing correctly
- Check that main app deployed successfully

**If links don't update:**
- Make sure you pushed code changes
- Check environment variables are set in Vercel
- Trigger a manual redeploy in Vercel

## Result

✅ Users can browse marketing site at `www.useprivly.com`
✅ When they click auth buttons, they go to `app.useprivly.com`
✅ After signup, they stay on `app.useprivly.com/dashboard`
✅ Clean separation of marketing and app
