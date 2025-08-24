import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals-simple.css"; // シンプル版CSSを使用

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FX Future Archives - 金融市場の未来を見据えた情報アーカイブ",
    template: "%s | FX Future Archives"
  },
  description: "FX取引、暗号資産、経済動向に関する質の高い情報を提供する金融教育メディア。投資家やトレーダーが適切な判断を下すために必要な知識とインサイトを未来的なデジタル体験で提供します。",
  keywords: [
    "FX", "外国為替", "暗号資産", "ビットコイン", "イーサリアム",
    "投資", "トレード", "経済ニュース", "金融市場", "テクニカル分析",
    "ファンダメンタル分析", "リスク管理", "DeFi", "NFT", "Web3.0",
    "中央銀行", "金融政策", "経済指標", "市場分析"
  ],
  authors: [{ name: "Elice-FX01" }],
  creator: "Elice-FX01",
  publisher: "FX Future Archives",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://future-fx-blog.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://future-fx-blog.vercel.app',
    siteName: 'FX Future Archives',
    title: 'FX Future Archives - 金融市場の未来を見据えた情報アーカイブ',
    description: 'FX取引、暗号資産、経済動向に関する質の高い情報を提供する金融教育メディア。投資家やトレーダーが適切な判断を下すために必要な知識とインサイトを提供します。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FX Future Archives',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FX Future Archives - 金融市場の未来を見据えた情報アーカイブ',
    description: 'FX取引、暗号資産、経済動向に関する質の高い情報を提供する金融教育メディア。',
    images: ['/og-image.png'],
    creator: '@FXFutureArchive',
    site: '@FXFutureArchive'
  },
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
  verification: {
    google: 'your-google-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'finance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
