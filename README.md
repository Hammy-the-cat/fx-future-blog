# FX Future Archives Blog 🚀

未来から届くFX投資ブログ - サイバーパンクデザインで構築された次世代ブログサイト

## 🌟 デプロイ済みサイト

- **本番環境**: https://fx-future-blog.vercel.app/
- **デバッグページ**: https://fx-future-blog.vercel.app/categories-debug
- **Sanity Studio**: http://localhost:3333 (ローカル開発時)

## ✨ 主な機能

### 🎨 デザイン
- **サイバーパンクテーマ**: ネオンカラーとアニメーション効果
- **動的背景**: パルスするサイバー背景とFXチャート風グリッド
- **グラデーションアニメーション**: タイトルとボーダーの美しいエフェクト
- **レスポンシブデザイン**: 全デバイス対応

### 🔧 技術機能
- **カテゴリー表示**: Sanity CMSからのリアルタイム取得
- **記事管理**: Sanity Studioでの完全な記事管理
- **高速デプロイ**: Vercel自動デプロイメント
- **TypeScript**: 型安全な開発環境

## 🛠️ 技術スタック

- **Frontend**: Next.js 15.4.6 + React 19.1.0
- **CMS**: Sanity (プロジェクトID: sfth73fb)
- **スタイリング**: CSS + Tailwind CSS
- **デプロイ**: Vercel
- **バージョン管理**: GitHub

## 🔧 開発・セットアップ

### 前提条件
- Node.js 18+
- npm または yarn

### ローカル開発
```bash
# フロントエンド起動
npm run dev
# http://localhost:3000

# Sanity Studio起動 (別ディレクトリ)
cd ../
npm run dev
# http://localhost:3333
```

### 環境変数
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=sfth73fb
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2021-10-21
```

## 📊 Sanityデータ構造

### カテゴリー
現在設定済み:
- Economic news
- Crypto  
- FX skills

### 記事フィールド
- タイトル
- スラッグ
- 著者
- カテゴリー
- 公開日
- 本文
- メイン画像

## 🎯 解決済み課題

### カテゴリー表示問題
- **原因**: CDNキャッシュとクライアント設定の問題
- **解決**: デバッグページベースの実装統一
- **対策**: リアルタイムクライアント使用

### デザイン復元
- **段階的復元**: フォント → CSS → アニメーション
- **安全な実装**: 機能確認後の段階的デプロイ
- **完全復元**: 全アニメーション効果の復活

## 🚀 デプロイメント

GitHub pushで自動的にVercelにデプロイされます:

```bash
git add .
git commit -m "更新内容"
git push origin main
```

## 📈 バージョン履歴

- **v1.0.0**: 完全版リリース - 全機能動作確認済み
- カテゴリー表示問題完全解決
- サイバーパンクデザイン完全復元

## 🤝 貢献

このプロジェクトは Claude Code を使用して開発されました。

---

**🎉 プロジェクト完成！未来のFXブログをお楽しみください！**
