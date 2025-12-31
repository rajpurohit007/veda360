const fs = require('fs');

const baseUrl = 'https://www.veda360.org';
const pages = [
  '',
  '/services',
  '/product',
  '/vision',
  '/about',
  '/career',
  '/contact'
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

try {
  fs.writeFileSync('./public/sitemap.xml', sitemapContent);
  console.log('✅ sitemap.xml generated in /public');
} catch (err) {
  console.error('❌ Error writing sitemap.xml:', err);
}