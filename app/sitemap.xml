import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ninebot.vn';

  // Đọc data để lấy URL các bài viết động
  let articles = [];
  try {
    const filePath = path.join(process.cwd(), 'database.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    articles = JSON.parse(jsonData);
  } catch (error) {
    console.error("Lỗi đọc database khi tạo sitemap", error);
  }

  // 1. Khai báo các trang tĩnh cố định
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1, // Trang chủ quan trọng nhất
    },
    {
      url: `${baseUrl}/ky-thuat`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tin-tuc`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  // 2. Tự động sinh URL cho từng bài viết kỹ thuật
  const dynamicRoutes: MetadataRoute.Sitemap = articles.map((article: any) => ({
    url: `${baseUrl}/ky-thuat/${article.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Gộp tất cả lại đẩy ra cho Google
  return [...staticRoutes, ...dynamicRoutes];
}