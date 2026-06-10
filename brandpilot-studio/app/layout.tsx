import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand}｜${site.brandCn}`,
    template: `%s｜${site.brand}`,
  },
  description: site.subTagline,
  keywords: [
    "个人品牌",
    "小红书主页优化",
    "留学生作品集",
    "个人主页搭建",
    "personal branding",
    "求职作品集",
    "小商家获客",
  ],
  openGraph: {
    title: `${site.brand}｜${site.brandCn}`,
    description: site.subTagline,
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body>
        <Navbar />
        {/* 移动端底部留出空间，避免内容被常驻 CTA 条遮住 */}
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
