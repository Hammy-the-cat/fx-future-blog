import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約",
  description: "FX Future Archivesの利用規約。FX・暗号資産取引の高リスク警告、投資免責事項、レバレッジ取引注意事項を含む包括的な利用条件を記載。",
  keywords: ["利用規約", "投資リスク", "FX取引", "暗号資産", "レバレッジ", "免責事項", "高リスク警告"],
  openGraph: {
    title: "利用規約 | FX Future Archives",
    description: "FX Future Archivesの利用規約。投資リスク警告、免責事項を含む利用条件。",
    url: "https://future-fx-blog.vercel.app/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}