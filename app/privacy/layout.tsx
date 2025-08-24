import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "FX Future Archivesのプライバシーポリシー。Google AdSense対応、GDPR準拠の個人情報保護方針、Cookie使用、投資リスク警告を詳細に記載。",
  keywords: ["プライバシーポリシー", "個人情報保護", "GDPR", "Google AdSense", "Cookie", "投資リスク"],
  openGraph: {
    title: "プライバシーポリシー | FX Future Archives",
    description: "FX Future Archivesのプライバシーポリシー。個人情報保護、Cookie使用について。",
    url: "https://future-fx-blog.vercel.app/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}