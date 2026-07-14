import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-red-600 selection:text-white relative overflow-hidden">
      
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <header className="bg-black/60 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-4 group cursor-pointer">
            <div className="relative w-14 h-14 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Image 
                src="/images/logo.png" 
                alt="Ninebot Logo" 
                fill
                sizes="56px"
                className="object-contain drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]"
              />
            </div>
            <h1 className="text-3xl font-black text-white tracking-widest uppercase relative">
              Nine<span className="text-red-600 transition-colors duration-300 group-hover:text-orange-500">bot</span>
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-10 font-medium text-gray-300">
            <Link href="/ky-thuat" className="hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm relative group">
              Kỹ thuật lập trình
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
            </Link>
            <Link href="/tin-tuc" className="hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm relative group">
              Tin tức AI Toàn cầu
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"></span>
            </Link>
          </nav>

          <a href="tel:0917747777" className="hidden lg:flex items-center gap-2 font-bold text-red-500 hover:text-white transition-all duration-300 text-lg tracking-wider px-6 py-2 rounded-full border border-red-600/30 hover:bg-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
            <span className="animate-pulse w-2 h-2 bg-red-500 rounded-full inline-block"></span>
            091.774.7777
          </a>

        </div>
      </header>

      <section className="relative w-full h-[85vh] mt-[80px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/banner1.jpg" 
            alt="Cửu Long Robot Banner" 
            fill
            sizes="100vw"
            className="object-cover opacity-40 scale-110 animate-[pulse_10s_ease-in-out_infinite_alternate]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mt-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl uppercase tracking-tighter leading-[1.1]">
            Kiến tạo tương lai <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-red-600 animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
              Từ những dòng code
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto mt-6 animate-fade-in-up delay-100">
            Hệ sinh thái kỹ thuật lập trình và cơ khí đột phá
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-red-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto pt-10 pb-20 px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="bg-white/[0.03] p-10 md:p-14 rounded-[2rem] border border-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.8)] animate-fade-in-up delay-200 hover:border-red-600/30 transition-colors duration-500">
            <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-gradient-to-r from-red-600 to-transparent"></span>
              Tinh hoa công nghệ
            </h3>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              <p>
                Trong văn hóa truyền thống, <strong className="text-white font-bold">"Cửu Long" (Nine Dragons)</strong> là biểu trưng cho sức mạnh tột đỉnh, sự vươn lên mạnh mẽ và trường tồn. 
              </p>
              <p>
                Tại <span className="font-bold text-red-500">Ninebot.vn</span>, "Nine" mang tinh thần oai phong đó, còn "Bot" đại diện cho kỷ nguyên máy móc, kỹ thuật lập trình và trí tuệ nhân tạo. Chúng tôi biến những dòng code khô khan trở nên uyển chuyển, linh hoạt và mạnh mẽ như rồng cuốn.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900/40 to-black p-10 md:p-14 rounded-[2rem] border border-red-600/20 shadow-[0_0_30px_rgba(220,38,38,0.15)] relative overflow-hidden animate-fade-in-up delay-300 group">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full transition-transform duration-700 group-hover:scale-150"></div>
            
            <h4 className="text-3xl font-bold text-white mb-4 relative z-10">Sẵn sàng khởi động dự án?</h4>
            <p className="text-gray-400 text-lg mb-10 relative z-10">Kết nối trực tiếp để thảo luận kỹ thuật chuyên sâu và kiến trúc hệ thống.</p>
            
            <a 
              href="tel:0917747777" 
              className="relative z-10 inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 font-black text-white bg-red-600 rounded-xl hover:bg-red-500 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] hover:-translate-y-2"
            >
              <span className="text-2xl tracking-[0.2em]">091.774.7777</span>
            </a>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="group bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/80 transition-all duration-500 hover:-translate-y-3 shadow-lg animate-fade-in-up delay-200">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider flex items-center gap-3">
              <span className="w-3 h-3 bg-red-600 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-300"></span> 
              Mục đích nhân văn
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              Dự án Ninebot.vn là một website phi lợi nhuận, được phát triển với khát vọng lan tỏa kiến thức công nghệ, cơ khí và AI đến cộng đồng. Chúng tôi hướng tới việc xây dựng một hệ sinh thái kỹ thuật lành mạnh, truyền cảm hứng sáng tạo cho thế hệ kỹ sư tương lai.
            </p>
          </div>

          <div className="group bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/80 transition-all duration-500 hover:-translate-y-3 shadow-lg animate-fade-in-up delay-300">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider flex items-center gap-3">
              <span className="w-3 h-3 bg-orange-500 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-300"></span> 
              Miễn trừ trách nhiệm
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              Toàn bộ tài liệu, mã nguồn và hướng dẫn mang tính chất tham khảo. Người dùng tự chịu trách nhiệm khi áp dụng vào thực tế. Chúng tôi từ chối mọi trách nhiệm pháp lý đối với rủi ro phát sinh từ việc sử dụng thông tin trên trang web này.
            </p>
          </div>

          <div className="group bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/80 transition-all duration-500 hover:-translate-y-3 shadow-lg animate-fade-in-up delay-400">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider flex items-center gap-3">
              <span className="w-3 h-3 bg-blue-500 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-300"></span> 
              Pháp lý & Bản quyền
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              Tên miền <strong className="text-gray-300">Ninebot.vn</strong> tuân thủ tuyệt đối luật Internet Việt Nam theo nguyên tắc <strong className="text-red-400">"First come, first served"</strong> (Đến trước, phục vụ trước). Mọi hành vi sao chép thương hiệu trái phép đều không được chấp nhận.
            </p>
          </div>

        </div>
      </section>

      <footer className="bg-black py-8 text-center border-t border-white/5 relative z-10">
        <p className="text-gray-600 text-sm font-light tracking-widest">
          © {new Date().getFullYear()} NINEBOT.VN. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}