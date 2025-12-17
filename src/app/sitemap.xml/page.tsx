import { districts } from '@/data/districts';

const URL = 'https://www.hizlakapindakurye.com';

function generateSitemapXml(urls: string[]): string {
  const urlset = urls.map(url => `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${url === URL ? '1.0' : '0.8'}</priority>
    </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlset}
    </urlset>`;
}

export async function GET() {
  const staticPages = [
    '/',
    '/hakkimizda',
    '/hizmetlerimiz',
    '/iletisim',
    '/hizmet-bolgeleri',
    '/hizmet-bolgeleri/anadolu',
    '/hizmet-bolgeleri/avrupa',
  ];

  const staticUrls = staticPages.map(page => `${URL}${page}`);

  const dynamicDistrictUrls = districts.anadolu.map(district => 
    `${URL}/hizmet-bolgeleri/anadolu/${district.slug}`
  ).concat(districts.avrupa.map(district => 
    `${URL}/hizmet-bolgeleri/avrupa/${district.slug}`
  ));
  
  const allUrls = [...staticUrls, ...dynamicDistrictUrls];
  
  const sitemapXml = generateSitemapXml(allUrls);

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
