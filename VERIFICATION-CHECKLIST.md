# ✅ Verification Checklist

## Before Contacting Support

Run through this checklist to diagnose the issue:

### 1. Check if .htaccess is Uploaded
- [ ] Log into Hostinger File Manager
- [ ] Navigate to public_html (or your site root)
- [ ] Look for `.htaccess` file (note the dot at the beginning)
- [ ] If you don't see it, enable "Show Hidden Files" in File Manager

### 2. Check .htaccess Permissions
- [ ] Right-click `.htaccess`
- [ ] Check permissions
- [ ] Should be: **644** (rw-r--r--)

### 3. Check .htaccess Content
Open `.htaccess` and verify it contains:
```apache
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ /index.html [L,QSA]
```

### 4. Test Each Page Manually
Visit in your browser:

- [ ] https://qncsolutions.org/ → Should load homepage
- [ ] https://qncsolutions.org/about → Should load About page (NOT 404)
- [ ] https://qncsolutions.org/services → Should load Services page (NOT 404)
- [ ] https://qncsolutions.org/contact → Should load Contact page (NOT 404)
- [ ] https://qncsolutions.org/careers → Should load Careers page (NOT 404)

### 5. Check HTTP Status Codes
Use: https://httpstatus.io/

Test each URL and verify:
- [ ] https://qncsolutions.org/about → **200 OK** (not 404)
- [ ] https://qncsolutions.org/services → **200 OK** (not 404)
- [ ] https://qncsolutions.org/contact → **200 OK** (not 404)

### 6. Check Browser Console
1. Visit https://qncsolutions.org/about
2. Press F12 to open Developer Tools
3. Go to "Console" tab
4. Look for errors

Common errors:
- ❌ "Failed to load resource: 404" → .htaccess not working
- ❌ "Cannot GET /about" → Server not serving index.html
- ✅ No errors → Everything is working!

### 7. Check Network Tab
1. Visit https://qncsolutions.org/about
2. Press F12 → "Network" tab
3. Refresh the page
4. Look at the first request (usually "about")
5. Check "Status Code"

Should be: **200** (not 404)

### 8. Verify Files Are Uploaded
Check these files exist in public_html:
- [ ] index.html
- [ ] .htaccess
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] assets/ folder
- [ ] images/ folder

### 9. Check Hostinger Plan
Some basic Hostinger plans don't support .htaccess:
- [ ] Check your hosting plan
- [ ] Verify it supports Apache and mod_rewrite
- [ ] If not, you may need to upgrade

### 10. Test robots.txt and sitemap.xml
These should work regardless:
- [ ] https://qncsolutions.org/robots.txt → Should show robots.txt content
- [ ] https://qncsolutions.org/sitemap.xml → Should show XML sitemap

## Results

### ✅ All Checks Pass
If all pages return 200 and load correctly:
1. Go to Google Search Console
2. Request re-indexing for each page
3. Wait 1-2 days for Google to re-crawl

### ❌ Pages Still Return 404

**Option 1: Contact Hostinger Support**
Message:
> "My React SPA needs URL rewriting. Pages like /about return 404. I've uploaded .htaccess with RewriteRule but it's not working. Please enable mod_rewrite and verify my configuration."

**Option 2: Try Alternative Hosting**
If Hostinger doesn't support proper SPA routing:
- Vercel (free, perfect for React)
- Netlify (free, perfect for React)
- GitHub Pages (free, with some limitations)

**Option 3: Use Hash Router**
Last resort - changes URLs to:
- https://qncsolutions.org/#/about
- https://qncsolutions.org/#/services

Less SEO-friendly but works without server config.

## Common Issues

### Issue: .htaccess is ignored
**Cause:** mod_rewrite is disabled
**Fix:** Contact Hostinger to enable mod_rewrite

### Issue: .htaccess causes 500 error
**Cause:** Syntax error or unsupported directive
**Fix:** Use simplified .htaccess (see HOSTINGER-FIX.md)

### Issue: Pages work but return 301/302
**Cause:** Redirect instead of rewrite
**Fix:** Update .htaccess to use RewriteRule with [L] flag

### Issue: Homepage works, other pages don't
**Cause:** .htaccess not working
**Fix:** Verify .htaccess is in correct location and has correct permissions

## Need Help?

If you've gone through this checklist and still have issues:
1. Take screenshots of:
   - File Manager showing .htaccess
   - Browser console errors
   - HTTP status check results
2. Contact Hostinger support with screenshots
3. Or consider alternative hosting (Vercel/Netlify)
