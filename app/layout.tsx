import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'; 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Cấu hình Title thông minh: Tự động gắn đuôi NINEBOT.VN cho mọi trang con
  title: {
    default: "NINEBOT.VN | Kỹ thuật Lập trình Robot & AI",
    template: "%s | NINEBOT.VN", 
  },
  description: "Hệ sinh thái kỹ thuật lập trình, cơ khí đột phá và trí tuệ nhân tạo (AI). Nơi giao lưu học hỏi của cộng đồng kỹ sư.",
  keywords: ["Ninebot", "lập trình robot", "kỹ thuật robot", "AI", "Arduino", "ESP32", "ROS", "cơ khí"],
  authors: [{ name: "Ninebot Team" }],
  creator: "Ninebot",
  
  // SEO cho Mạng xã hội (Zalo, Facebook, Telegram...)
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://ninebot.vn",
    title: "NINEBOT.VN | Kỹ thuật Lập trình Robot & AI",
    description: "Hệ sinh thái kỹ thuật lập trình, cơ khí đột phá và trí tuệ nhân tạo (AI).",
    siteName: "NINEBOT.VN",
    images: [
      {
        url: "/images/banner1.jpg",
        width: 1200,
        height: 630,
        alt: "NINEBOT.VN Banner",
      },
    ],
  },
  
  // SEO cho Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "NINEBOT.VN | Kỹ thuật Lập trình Robot & AI",
    description: "Hệ sinh thái kỹ thuật lập trình và cơ khí đột phá.",
    images: ["/images/banner1.jpg"],
  },
  
  // Định hướng cho Google Bot (Cho phép index toàn bộ web)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Tích hợp Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-KHVPHRB7" />
      
      <body className="min-h-full flex flex-col bg-[#050505]">
        {/* Khai báo Schema Entity cho Google Bot */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Ninebot.vn",
              "url": "https://ninebot.vn",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ninebot.vn/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}