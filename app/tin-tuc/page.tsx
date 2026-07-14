import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

// Hàm lấy dữ liệu tin tức
async function getNews() {
  const filePath = path.join(process.cwd(), 'news_database.json');
  if (!fs.existsSync(filePath)) return [];
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

export default async function NewsPage() {
  const newsList = await getNews();

  return (
    <main className="min-h-screen bg-[#050505] text-gray-100 font-sans pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="text-orange-500 hover:text-white uppercase tracking-widest text-sm font-bold mb-4 block">
            &larr; Quay lại trang chủ
          </Link>
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
            Tin tức <span className="text-orange-500">AI Toàn cầu</span>
          </h1>
          <div className="w-20 h-2 bg-orange-500"></div>
        </div>

        {/* List View */}
        <div className="space-y-4">
          {newsList.map((news: any) => (
            <Link 
              href={`/tin-tuc/${news.id}`} 
              key={news.id}
              className="group block bg-neutral-900/30 border border-neutral-800 hover:border-orange-500/50 hover:bg-neutral-800/50 p-6 rounded-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-orange-500 text-xs font-mono mb-2 block">{news.date}</span>
                  <h2 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {news.title}
                  </h2>
                </div>
                <div className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </main>
  );
}