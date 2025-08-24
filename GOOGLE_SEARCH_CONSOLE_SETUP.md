# Google Search Console 設定ガイド
## FX Future Archives向け設定手順

### 📋 事前準備

1. **Googleアカウント**が必要です
2. **サイトのURL**: `https://future-fx-blog.vercel.app`
3. **管理者権限**を持っていることを確認

---

## 🚀 Step 1: Google Search Consoleアクセス

1. **Google Search Console**にアクセス
   ```
   https://search.google.com/search-console/
   ```

2. **「今すぐ開始」**をクリック

3. Googleアカウントでログイン

---

## 🔧 Step 2: プロパティの追加

### 方法A: URLプレフィックス（推奨）

1. **「プロパティを追加」**をクリック

2. **「URLプレフィックス」**を選択

3. **サイトのURL**を入力:
   ```
   https://future-fx-blog.vercel.app
   ```

4. **「続行」**をクリック

### 方法B: ドメインプロパティ（上級者向け）

1. **「ドメイン」**を選択

2. **ドメイン名**を入力:
   ```
   future-fx-blog.vercel.app
   ```

---

## ✅ Step 3: 所有権の確認

### 方法1: HTMLファイルアップロード（推奨）

1. **HTMLファイルをダウンロード**
   - 例: `google1234567890abcdef.html`

2. **Vercelにファイルをアップロード**
   ```bash
   # ファイルをpublic/フォルダに配置
   cp google1234567890abcdef.html public/
   git add public/google1234567890abcdef.html
   git commit -m "Add Google Search Console verification file"
   git push
   ```

3. **「確認」**をクリック

### 方法2: HTMLタグ（メタタグ）

1. **HTMLタグをコピー**
   ```html
   <meta name="google-site-verification" content="your-verification-code" />
   ```

2. **layout.tsx**に追加（既に準備済み）
   ```typescript
   // app/layout.tsx の metadata に追加
   verification: {
     google: 'your-verification-code',
   },
   ```

### 方法3: Google Analytics（既存アカウントがある場合）

1. **Google Analytics**を選択
2. 既存のAnalyticsアカウントを使用

---

## 📊 Step 4: サイトマップ送信

1. **左サイドバー**から**「サイトマップ」**をクリック

2. **「新しいサイトマップの追加」**をクリック

3. **サイトマップURL**を入力:
   ```
   https://future-fx-blog.vercel.app/sitemap.xml
   ```

4. **「送信」**をクリック

---

## 🎯 Step 5: 初期設定とモニタリング

### A. インデックス登録要求

1. **「URL検査」**ツールを使用
2. **ホームページURL**を入力:
   ```
   https://future-fx-blog.vercel.app
   ```
3. **「インデックス登録をリクエスト」**をクリック

### B. 重要ページの登録

以下のページも個別に登録要求:
- `https://future-fx-blog.vercel.app/about`
- `https://future-fx-blog.vercel.app/contact`
- `https://future-fx-blog.vercel.app/privacy`
- `https://future-fox-blog.vercel.app/posts/time-thinking`

### C. パフォーマンス監視設定

1. **「検索パフォーマンス」**を確認
2. **「カバレッジ」**レポートをモニタリング
3. **「モバイルユーザビリティ」**をチェック

---

## 🔍 Step 6: 重要な設定項目

### A. ターゲット国設定

1. **「レガシーツールとレポート」** → **「国際ターゲティング」**
2. **「国」**タブで**日本**を選択

### B. 優先URL設定

1. **「設定」** → **「アドレス変更」**
2. 必要に応じてwwwの有無を統一

### C. クローリングの調整

1. **「クロール」** → **「クロール統計情報」**
2. 異常な値がないかチェック

---

## 📈 Step 7: アドセンス連携準備

### A. Search Consoleとアドセンスの連携

1. **Google AdSense**アカウント作成
2. Search Consoleデータを**アドセンスと共有**
3. **「プライバシーとメッセージ」**設定を確認

### B. 検索トラフィック監視

1. **検索パフォーマンス**レポートで以下をモニタリング:
   - **表示回数**
   - **クリック数**  
   - **CTR（クリック率）**
   - **掲載順位**

---

## 🚨 トラブルシューティング

### よくある問題と解決方法

#### 1. 所有権確認エラー
```
エラー: 確認できませんでした
```
**解決方法:**
- HTMLファイルが正しい場所にあるか確認
- ファイル名が正確か確認
- キャッシュクリア後に再試行

#### 2. サイトマップ送信エラー
```
エラー: 取得できませんでした
```
**解決方法:**
- サイトマップURLが正確か確認
- robots.txtでサイトマップが許可されているか確認
- サイトマップの形式が正しいか確認

#### 3. インデックス登録されない
```
検出 - インデックス未登録
```
**解決方法:**
- robots.txtで許可されているか確認
- 重複コンテンツがないか確認
- meta robotsでnoindexになっていないか確認

---

## 📚 継続的な最適化

### 週次チェック項目

- [ ] **検索パフォーマンス**データの確認
- [ ] **カバレッジエラー**の対応
- [ ] **新規記事**のインデックス状況確認
- [ ] **クロールエラー**の修正

### 月次レポート項目

- [ ] **オーガニック検索流入**の分析
- [ ] **人気キーワード**の特定
- [ ] **ページ速度**の改善点確認
- [ ] **モバイルフレンドリー**スコア確認

---

## 🎯 成功指標（KPI）

### アドセンス申請前の目標数値

- **インデックス登録率**: 90%以上
- **クロールエラー**: 0件
- **モバイルユーザビリティエラー**: 0件
- **ページ速度スコア**: 70点以上
- **検索での表示回数**: 月100回以上

---

## 📞 サポート

### 追加支援が必要な場合

1. **Google Search Consoleヘルプ**
   - https://support.google.com/webmasters/

2. **Vercel固有の設定**
   - https://vercel.com/docs/

3. **Next.js SEO最適化**
   - https://nextjs.org/docs/app/building-your-application/optimizing

---

## ✅ チェックリスト

設定完了後、以下の項目を確認:

- [ ] Search Consoleプロパティ追加完了
- [ ] 所有権確認完了
- [ ] sitemap.xml送信完了
- [ ] 主要ページのインデックス登録要求完了
- [ ] 国際ターゲティング設定完了（日本）
- [ ] 検索パフォーマンス監視設定完了
- [ ] エラー0件を維持

**設定完了予想時間**: 約30-60分
**反映までの期間**: 1-7日

---

*このガイドに関するご質問は、コンタクトページからお問い合わせください。*