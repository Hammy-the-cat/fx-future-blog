import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "FX Future Archivesに関するご質問、ご意見、ご要望はこちらから。運営者情報も掲載しています。通常2-3営業日以内にご返信いたします。",
  keywords: ["お問い合わせ", "コンタクト", "運営者情報", "質問", "要望", "FX Future Archives"],
  openGraph: {
    title: "お問い合わせ | FX Future Archives",
    description: "FX Future Archivesに関するご質問、ご意見、ご要望はこちらから。",
    url: "https://future-fx-blog.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}