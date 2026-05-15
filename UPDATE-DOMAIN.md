# Quick Domain Update Checklist

## Replace `https://www.qncsolutions.com` with your actual Hostinger domain in these files:

### 1. `/public/sitemap.xml`
- Update all `<loc>` tags with your domain

### 2. `/index.html`
- Line with `<link rel="canonical">`
- Lines with `property="og:url"`
- Lines with `property="twitter:url"`
- Inside the `<script type="application/ld+json">` section

### 3. `/src/components/SEO.jsx`
- Line 6: `const baseUrl = 'https://your-actual-domain.com'`

## After updating, rebuild and deploy:
```bash
npm run build
```

Then upload the `dist` folder to Hostinger.
