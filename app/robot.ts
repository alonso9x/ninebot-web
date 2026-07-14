import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/', // Cho phép bot quét toàn bộ web
    },
    sitemap: 'https://ninebot.vn/sitemap.xml', // Chỉ đường thẳng đến file sitemap
  };
}