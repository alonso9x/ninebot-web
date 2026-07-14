import React from 'react';
import Link from 'next/link';

const articles = [
  { id: 1, title: "Nhập môn Lập trình Robot: Hiểu về Vi điều khiển (Arduino & ESP32)", excerpt: "Bước đầu tiên để bước vào thế giới robot. Tìm hiểu cấu trúc cơ bản, cách thiết lập môi trường và viết chương trình nhấp nháy LED đầu tiên.", level: "Dễ", category: "Cơ bản", date: "15/06/2026" },
  { id: 2, title: "Đọc dữ liệu Môi trường: Giao tiếp với Cảm biến Siêu âm và Hồng ngoại", excerpt: "Làm thế nào để robot 'nhìn' thấy vật cản? Hướng dẫn chi tiết cách nối dây và lập trình thuật toán đo khoảng cách chính xác.", level: "Dễ", category: "Cảm biến", date: "20/06/2026" },
  { id: 3, title: "Mạch điện tử Cơ bản: Định luật Ohm, Resistor và Tụ điện trong Robot", excerpt: "Nắm vững nền tảng điện tử trước khi cắm dây. Cách tính toán điện trở hạn dòng và chống nhiễu tín hiệu cho vi điều khiển.", level: "Dễ", category: "Điện tử", date: "25/06/2026" },
  { id: 4, title: "In 3D cho Robot: Thiết kế Khung gầm (Chassis) bằng Fusion 360", excerpt: "Tự tay thiết kế lớp vỏ vật lý cho robot. Hướng dẫn sử dụng phần mềm CAD để dựng hình và xuất file in 3D tối ưu.", level: "Trung bình", category: "Thiết kế 3D", date: "30/06/2026" },
  { id: 5, title: "Điều khiển Chuyển động: Động cơ DC, Servo và Cầu H (L298N)", excerpt: "Biến những dòng code thành chuyển động vật lý. Cấu hình băm xung PWM để kiểm soát tốc độ và góc quay của robot.", level: "Trung bình", category: "Động lực học", date: "05/07/2026" },
  { id: 6, title: "Giao tiếp Không dây: Điều khiển Robot từ xa qua Wi-Fi và Bluetooth", excerpt: "Giải pháp kết nối IoT cho robot. Viết ứng dụng web cục bộ trên ESP32 để điều khiển xe robot bằng điện thoại di động.", level: "Trung bình", category: "IoT & Mạng", date: "10/07/2026" },
  { id: 7, title: "Lập trình C++ Nâng cao: Con trỏ và Cấp phát Bộ nhớ động trong Arduino", excerpt: "Tối ưu hóa RAM hạn hẹp của vi điều khiển. Kỹ thuật viết code C++ chuẩn xác để tránh tràn bộ nhớ khi chạy dự án lớn.", level: "Trung bình", category: "Lập trình C++", date: "15/07/2026" },
  { id: 8, title: "Giao thức Giao tiếp Bậc thấp: I2C, SPI và UART", excerpt: "Hiểu sâu về cách các module nói chuyện với nhau. Phân tích xung nhịp và lập trình đọc dữ liệu từ cảm biến gia tốc MPU6050.", level: "Trung bình", category: "Giao thức", date: "20/07/2026" },
  { id: 9, title: "Thuật toán PID thực chiến: Robot Dò line và Tự cân bằng", excerpt: "Đi sâu vào lý thuyết điều khiển tự động. Cách tinh chỉnh thông số Kp, Ki, Kd để robot hoạt động mượt mà, không bị giật cục.", level: "Khó", category: "Thuật toán", date: "25/07/2026" },
  { id: 10, title: "ROS (Robot Operating System): Kiến trúc Hệ thống Robot Công nghiệp", excerpt: "Nâng tầm dự án với hệ điều hành tiêu chuẩn toàn cầu. Cấu trúc Node, Topic, Publisher và Subscriber trong ROS 2.", level: "Khó", category: "Hệ thống", date: "30/07/2026" },
  { id: 11, title: "Xử lý Tín hiệu Số (DSP): Lọc Nhiễu Cảm biến bằng Bộ lọc Kalman", excerpt: "Dữ liệu cảm biến luôn bị nhiễu. Triển khai thuật toán Kalman Filter bằng C++ để có số liệu đo đạc mượt mà và chính xác nhất.", level: "Khó", category: "Thuật toán", date: "04/08/2026" },
  { id: 12, title: "Định vị và Lập bản đồ Đồng thời (SLAM) với LiDAR", excerpt: "Cho phép robot tự động vẽ bản đồ căn phòng. Cấu hình cảm biến LiDAR RPLidar và chạy thuật toán Hector SLAM trên Raspberry Pi.", level: "Khó", category: "Điều hướng", date: "09/08/2026" },
  { id: 13, title: "Mạng Nơ-ron Nhúng (TinyML): Đưa AI vào Vi điều khiển", excerpt: "Chạy mô hình học máy trực tiếp trên bo mạch nhỏ gọn. Hướng dẫn train model nhận diện giọng nói bằng TensorFlow Lite for Microcontrollers.", level: "Khó", category: "TinyML", date: "14/08/2026" },
  { id: 14, title: "Thị giác Máy tính (Computer Vision): Nhận diện Vật thể với OpenCV", excerpt: "Tích hợp camera cho Raspberry Pi. Xử lý ảnh thời gian thực, lọc màu và nhận diện khuôn mặt cơ bản để robot tự động bám mục tiêu.", level: "Chuyên gia", category: "AI & Vision", date: "19/08/2026" },
  { id: 15, title: "Động học Ngược (Inverse Kinematics) cho Cánh tay Robot 6 Trục", excerpt: "Giải quyết các ma trận toán học phức tạp để tính toán góc xoay chính xác cho từng khớp tọa độ trong không gian 3D.", level: "Chuyên gia", category: "Cơ điện tử", date: "24/08/2026" },
  { id: 16, title: "Hoạch định Quỹ đạo (Trajectory Planning) trong Không gian Khớp", excerpt: "Làm thế nào để cánh tay robot di chuyển mượt mà mà không bị giật? Áp dụng nội suy đa thức bậc 5 để tạo quỹ đạo chuyển động.", level: "Chuyên gia", category: "Thuật toán", date: "29/08/2026" },
  { id: 17, title: "Kiến trúc Điều khiển Phân tán: CAN Bus trong Robot Đa chân", excerpt: "Thiết kế hệ thống giao tiếp công nghiệp. Cách sử dụng mạng CAN Bus để đồng bộ hóa hàng chục động cơ servo trên robot nhện (Hexapod).", level: "Chuyên gia", category: "Mạng công nghiệp", date: "03/09/2026" },
  { id: 18, title: "Deep Reinforcement Learning: Dạy Robot đi bộ trong Môi trường Mô phỏng", excerpt: "Kết hợp AI và Cơ khí. Sử dụng thư viện PyBullet và thuật toán PPO để huấn luyện mô hình học tăng cường cho robot chó (Quadruped).", level: "Chuyên gia", category: "AI & Robotics", date: "08/09/2026" }
];

// Cấu hình Lộ trình học tập (Roadmap)
const roadmapLevels = [
  { 
    id: 'Dễ', 
    title: 'LEVEL 1: TÂN BINH (ROOKIE)', 
    subtitle: 'Nền tảng Vi điều khiển & Mạch điện cơ bản',
    color: 'text-green-400', 
    borderColor: 'border-green-500', 
    bgGlow: 'bg-green-500/10' 
  },
  { 
    id: 'Trung bình', 
    title: 'LEVEL 2: KỸ SƯ (ENGINEER)', 
    subtitle: 'Giao thức, Động lực học & Tối ưu hóa Code',
    color: 'text-cyan-400', 
    borderColor: 'border-cyan-500', 
    bgGlow: 'bg-cyan-500/10' 
  },
  { 
    id: 'Khó', 
    title: 'LEVEL 3: CHUYÊN VIÊN (SPECIALIST)', 
    subtitle: 'Thuật toán Điều khiển & Kiến trúc Hệ thống',
    color: 'text-orange-500', 
    borderColor: 'border-orange-500', 
    bgGlow: 'bg-orange-500/10' 
  },
  { 
    id: 'Chuyên gia', 
    title: 'LEVEL 4: KIẾN TRÚC SƯ (ARCHITECT)', 
    subtitle: 'Trí tuệ nhân tạo, Động học & Mạng phân tán',
    color: 'text-red-600', 
    borderColor: 'border-red-600', 
    bgGlow: 'bg-red-600/10' 
  }
];

export default function KyThuatPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-gray-100 font-sans pt-24 pb-20 px-4 sm:px-6 relative overflow-hidden selection:bg-red-600 selection:text-white">
      
      {/* Nền lưới kỹ thuật Radar */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%),linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[100%_100%,40px_40px,40px_40px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Khu vực */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b border-white/10 pb-8">
          <div>
            <Link href="/" className="group flex items-center text-red-500 hover:text-red-400 mb-6 uppercase tracking-widest text-sm font-bold transition-colors w-fit">
              <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span> Trạm điều khiển trung tâm
            </Link>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-2 uppercase tracking-tighter drop-shadow-lg">
              Lộ trình <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-orange-500">Kỹ thuật</span>
            </h1>
            <p className="text-xl text-gray-400 font-light tracking-wide max-w-3xl mt-4">
              Hệ thống hóa kiến thức lập trình robot theo chuẩn công nghiệp. Đi từ những dòng lệnh C++ sơ khai đến kiến trúc mạng nơ-ron phân tán.
            </p>
          </div>

          <a href="tel:0917747777" className="group relative flex flex-col items-center justify-center p-6 bg-black/50 border border-red-600/30 rounded-2xl hover:border-red-500 transition-all duration-300 min-w-70 overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-linear-to-r from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="text-red-500/80 group-hover:text-red-400 text-xs uppercase tracking-[0.3em] mb-2 font-bold z-10">Hotline Kỹ Thuật Tốc Độ Cao</span>
            <span className="text-3xl font-black text-white tracking-widest z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">091.774.7777</span>
          </a>
        </div>

        {/* Lộ trình học tập (Roadmap Container) */}
        <div className="relative border-l-2 border-neutral-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-24">
          
          {roadmapLevels.map((level, index) => {
            // Lọc bài viết theo cấp độ
            const filteredArticles = articles.filter(article => article.level === level.id);
            
            return (
              <div key={level.id} className="relative">
                
                {/* Dấu chấm Node trên Timeline */}
                <div className={`absolute -left-10.25 md:-left-14.25 top-2 w-6 h-6 rounded-full border-4 border-[#050505] ${level.bgGlow} shadow-[0_0_20px_currentColor] ${level.color} flex items-center justify-center`}>
                  <div className={`w-2 h-2 rounded-full bg-current`}></div>
                </div>

                {/* Tiêu đề Cấp độ (Sticky để trượt theo khi scroll) */}
                <div className="sticky top-20 z-30 bg-[#050505]/90 backdrop-blur-md py-4 mb-8 -mt-4 border-b border-white/5">
                  <h2 className={`text-3xl md:text-4xl font-black ${level.color} uppercase tracking-tighter mb-1 drop-shadow-md`}>
                    {level.title}
                  </h2>
                  <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
                    &gt;_ {level.subtitle}
                  </p>
                </div>

                {/* Grid Bài viết của cấp độ đó */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article) => (
                    <div 
                      key={article.id} 
                      className={`group relative bg-black/40 border border-neutral-800 rounded-xl p-6 hover:${level.borderColor} hover:bg-neutral-900/80 transition-all duration-300 flex flex-col h-full shadow-lg overflow-hidden`}
                    >
                      {/* Ánh sáng nền khi Hover */}
                      <div className={`absolute top-0 right-0 w-32 h-32 ${level.bgGlow} blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                      
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <span className={`text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest bg-black border ${level.borderColor}/30 ${level.color}`}>
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-600 font-mono">{article.date}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-200 mb-3 leading-snug group-hover:text-white transition-colors relative z-10">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-500 text-sm mb-8 grow relative z-10 leading-relaxed group-hover:text-gray-400 transition-colors">
                        {article.excerpt}
                      </p>

                      <div className="relative z-10 mt-auto pt-4 border-t border-neutral-800/50 flex justify-between items-center">
                        <span className="text-neutral-600 font-mono text-xs hidden sm:inline-block">ID: {String(article.id).padStart(4, '0')}</span>
                        <Link href={`/ky-thuat/${article.id}`} className={`inline-flex items-center font-bold uppercase tracking-widest text-xs ${level.color} hover:brightness-150 transition-all`}>
                          Truy cập dữ liệu
                          <span className="ml-2 group-hover:translate-x-2 transition-transform">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </main>
  );
}