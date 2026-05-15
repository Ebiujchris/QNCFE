# 🚀 QUICK START - Deploy in 15 Minutes

## Before You Deploy

### 1️⃣ Update Domain (3 files)
Find and replace `https://www.qncsolutions.com` with your Hostinger domain:

```
📄 public/sitemap.xml
📄 index.html  
📄 src/components/SEO.jsx (line 6)
```

### 2️⃣ Build
```bash
npm run build
```

### 3️⃣ Upload to Hostinger
Upload ALL files from `dist/` folder to `public_html/`

Must include:
- ✅ index.html
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ .htaccess
- ✅ _redirects
- ✅ assets/ folder
- ✅ images/ folder

### 4️⃣ Add Environment Variable
In Hostinger control panel:
```
VITE_API_URL=https://qncbe.vercel.app/api
```

### 5️⃣ Test
Visit: `https://your-domain.com/robots.txt`
Should show robots.txt content ✅

### 6️⃣ Submit to Google
1. [Google Search Console](https://search.google.com/search-console)
2. Add property → Verify
3. Submit sitemap: `sitemap.xml`
4. Request indexing

## Done! 🎉

Your site will appear in Google within 1-2 weeks.

---

**Need detailed instructions?** See `DEPLOYMENT-CHECKLIST.md`
**Need help with SEO?** See `SEO-SETUP-GUIDE.md`
