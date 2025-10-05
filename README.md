# Privly Public Website

This is the public marketing website for Privly Me. It contains all public-facing pages and marketing content.

## What's in this project?

**Public Pages:**
- Homepage (`/`)
- Product pages (`/scam-watch`, `/personal`, `/professional`)
- Pricing (`/pricing`)
- About (`/about`)
- Blog (`/blog`)
- Legal pages (`/privacy`, `/terms`)
- Use cases (`/use-cases/*`)
- Business pages (`/for-business`, `/family`)

## What's NOT in this project?

- Dashboard (`/dashboard/*`) - in main app
- User authentication (`/auth/*`) - in main app
- API endpoints (`/api/*`) - in main app
- Payment processing - in main app
- User settings - in main app

## Key Benefits of Separation

1. **Deployment Safety** - Marketing site updates don't affect the app
2. **Performance** - Static generation for fast public pages
3. **Security** - No access to user data or sensitive APIs
4. **Independent Scaling** - Different traffic patterns
5. **SEO Stability** - Search engines don't get confused by frequent app updates

## Development

```bash
npm run dev
```

Runs on `http://localhost:3000`

## Deployment

Deploy to Vercel as a separate project:
- Domain: `useprivly.com` or subdomain like `marketing.useprivly.com`
- Environment: `NEXT_PUBLIC_APP_URL=https://www.useprivly.com`

## Links to Main App

All "Get Started", "Sign In", "Sign Up" buttons link to:
- `https://www.useprivly.com/auth/signup`
- `https://www.useprivly.com/auth/signin`
- `https://www.useprivly.com/dashboard`

## Contact Form

Contact form forwards to main app API at `/api/contact`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
