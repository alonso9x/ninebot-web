import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

async function getNewsItem(id: string) {
  const filePath = path.join(process.cwd(), 'news_database.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const news = JSON.parse(jsonData);
  return news.find((n: any) => String(n.id) === String(id));
}

export default async function NewsDetail({ params }: { params: { id: string } }) {
  const { id } = await params;
  const newsItem = await getNewsItem(id);

  if (!newsItem) return <div className="text-center text-white pt-20">Không tìm thấy tin tức!</div>;

  return (
    <main className="min-h-screen bg-[#050505] text-gray-300 pt-24 pb-20 px-4">
      <article className="max-w-3xl mx-auto">
        <Link href="/tin-tuc" className="text-orange-500 hover:text-white uppercase tracking-widest text-sm font-bold mb-8 block">
          &larr; Danh sách tin tức
        </Link>
        <h1 className="text-4xl font-black text-white mb-6">{newsItem.title}</h1>
        <p className="text-orange-500 mb-10 font-mono">{newsItem.date}</p>
        
        <div 
          className="prose prose-invert prose-lg"
          dangerouslySetInnerHTML={{ __html: newsItem.content || 'Đang chờ AI cập nhật...' }}
        />
      </article>
    </main>
  );
}