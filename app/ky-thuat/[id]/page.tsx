import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

// Hàm đọc và tìm bài viết từ file database.json
async function getArticle(id: string) {
  try {
    const filePath = path.join(process.cwd(), 'database.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const articles = JSON.parse(jsonData);
    // Tìm bài viết có id khớp với param trên URL
    return articles.find((a: any) => String(a.id) === String(id));
  } catch (error) {
    console.error("Lỗi đọc database:", error);
    return null;
  }
}

export default async function ArticleDetail({ params }: { params: { id: string } }) {
  // Lấy id từ URL
  const { id } = await params;
  const article = await getArticle(id);

  // Nếu không tìm thấy bài viết
  if (!article) {
    return (
      <main className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">404 - Bài viết không tìm thấy</h1>
          <Link href="/ky-thuat" className="text-red-500 underline">Quay lại danh sách</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-gray-300 font-sans pt-24 pb-20 relative overflow-hidden selection:bg-red-600 selection:text-white">
      
      {/* Nền lưới kỹ thuật */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%),linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:100%_100%,40px_40px,40px_40px]"></div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Nút Back */}
        <Link href="/ky-thuat" className="group inline-flex items-center text-red-500 hover:text-red-400 mb-10 uppercase tracking-widest text-sm font-bold transition-colors">
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span> Quay lại Trạm điều khiển
        </Link>

        {/* Header Bài viết */}
        <header className="mb-16 border-b border-white/10 pb-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-green-500/10 text-green-400 border border-green-500/30 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest">
              Level: {article.level}
            </span>
            <span className="text-gray-500 text-sm font-mono tracking-wider">ID: {String(article.id).padStart(4, '0')}</span>
            <span className="text-gray-500 text-sm font-mono tracking-wider">| {article.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-6 tracking-tighter">
            {article.title}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            {article.excerpt}
          </p>
        </header>

        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-red-500 hover:prose-a:text-red-400"
          dangerouslySetInnerHTML={{ __html: article.content || '<p>Đang cập nhật nội dung...</p>' }}
        />

        {/* Call to Action */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Gặp khó khăn khi nạp code?</h3>
          <p className="text-gray-400 mb-8">Đội ngũ kỹ thuật Ninebot luôn sẵn sàng hỗ trợ bạn debug và giải quyết các vấn đề phần cứng trực tiếp.</p>
          <a href="tel:0917747777" className="inline-block bg-red-600 text-white font-black text-xl px-10 py-4 rounded-xl uppercase tracking-widest hover:bg-red-500 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]">
            Gọi ngay: 091.774.7777
          </a>
        </div>

      </article>
    </main>
  );
}