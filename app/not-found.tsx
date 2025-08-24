import type { Metadata } from "next";
import NotFoundClient from './components/NotFoundClient'

export const metadata: Metadata = {
  title: "ページが見つかりません - 404エラー",
  description: "お探しのページは見つかりませんでした。URLをご確認いただくか、ホームページから目的の記事をお探しください。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundClient />
}