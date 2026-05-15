# Deployment Checklist for Hostinger

## ✅ Pre-Deployment (Complete These First)

### 1. Update Your Domain
Replace `https://www.qncsolutions.com` with your actual Hostinger domain in:
- [ ] `public/sitemap.xml` (all URLs)
- [ ] `index.html` (canonical, og:url, twitter:url, structured data)
- [ ] `src/components/SEO.jsx` (line 6: baseUrl)

### 2. Verify Environment Variables on Hostinger
In your Hostinger control panel, add:
```
VITE_API_URL=https://qncbe.vercel.app/api
```

### 3. Build the Project
```bash
cd QNCFE
npm run build
```

## 📤 Deployment Steps

### Option A: Using Hostinger File Manager
1. Log into Hostinger control panel
2. Go to File Manager
3. Navigate to `public_html` (or your domain's root folder)
4. Delete old files (if any)
5. Upload ALL contents from the `dist` folder
6. Verify these files are present:
   - index.html
   - robots.txt
   - sitemap.xml
   - _redirects
   - assets/ folder
   - images/ folder

### Option B: Using FTP
1. Connect via FTP (use FileZilla or similar)
2. Navigate to `public_html`
3. Upload all files from `dist` folder
4. Set permissions to 644 for files, 755 for folders

## ✅ Post-Deployment Verification

### 1. Test Your Site
Visit these URLs and verify they work:
- [ ] `https://your-domain.com/` (Home page)
- [ ] `https://your-domain.com/about` (About page)
- [ ] `https://your-domain.com/services` (Services page)
- [ ] `https://your-domain.com/careers` (Careers page)
- [ ] `https://your-domain.com/contact` (Contact page)
- [ ] `https://your-domain.com/book` (Book service page)

### 2. Verify SEO Files
- [ ] `https://your-domain.com/robots.txt` (should show robots.txt content)
- [ ] `https://your-domain.com/sitemap.xml` (should show XML sitemap)

### 3. Test Functionality
- [ ] Navigation works
- [ ] Forms submit correctly
- [ ] API calls to backend work
- [ ] Images load properly
- [ ] Login/Register works

### 4. Check Meta Tags
Right-click on your homepage → View Page Source
Verify you see:
- [ ] `<title>` tag with proper content
- [ ] `<meta name="description">` tag
- [ ] `<meta property="og:*">` tags
- [ ] `<link rel="canonical">` tag

## 🔍 Google Search Console Setup

### 1. Add Property
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter your domain
4. Choose verification method (HTML file upload recommended)

### 2. Verify Ownership
- Download verification file
- Upload to your site root
- Click "Verify" in Search Console

### 3. Submit Sitemap
1. In Search Console, go to "Sitemaps"
2. Enter: `sitemap.xml`
3. Click "Submit"

### 4. Request Indexing
1. Go to "URL Inspection"
2. Enter your homepage URL
3. Click "Request Indexing"
4. Repeat for key pages (about, services, contact)

## 📊 Monitoring

### Week 1
- [ ] Check Search Console for crawl errors
- [ ] Verify sitemap is being processed
- [ ] Monitor coverage report

### Week 2-4
- [ ] Check if pages are indexed (search: `site:your-domain.com`)
- [ ] Monitor search performance
- [ ] Fix any errors in Search Console

## 🚨 Troubleshooting

### Pages Return 404
- Check if `_redirects` file is in the root
- Verify Hostinger supports redirects (may need .htaccess instead)

### Robots.txt Not Found
- Ensure it's in the root directory
- Check file permissions (should be 644)

### API Calls Fail
- Verify VITE_API_URL environment variable
- Check CORS settings on backend
- Verify backend is running on Vercel

### Images Don't Load
- Check if images folder uploaded correctly
- Verify image paths in code
- Check file permissions

## 📞 Need Help?

If issues persist:
1. Check Hostinger documentation
2. Contact Hostinger support
3. Verify backend logs on Vercel
4. Check browser console for errors (F12)

## 🎉 Success Indicators

Your deployment is successful when:
- ✅ All pages load without errors
- ✅ robots.txt and sitemap.xml are accessible
- ✅ Forms and API calls work
- ✅ Google Search Console shows no errors
- ✅ Site appears in Google search within 1-2 weeks
