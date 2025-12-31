const fs = require('fs');

const robotsContent = `User-agent: *
# General access
Allow: /
# Explicit path declarations
Allow: /services
Allow: /product
Allow: /vision
Allow: /about
Allow: /career
Allow: /contact

# Block private or internal files
Disallow: /private/
Disallow: /_next/static/

# Explicitly allow Google's image bot for the logo
User-agent: Googlebot-Image
Allow: /favicon.ico
Allow: /icon.png

Sitemap: https://www.veda360.org/sitemap.xml`;

try {
  fs.writeFileSync('./public/robots.txt', robotsContent);
  console.log('✅ robots.txt updated with separate paths');
} catch (err) {
  console.error('❌ Error:', err);
}