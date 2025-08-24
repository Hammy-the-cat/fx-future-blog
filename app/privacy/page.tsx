import type { Metadata } from "next";
'use client'

import Link from 'next/link'

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

export default function PrivacyPolicy() {
  return (
    <>
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div className="min-h-screen" style={{ position: 'relative', zIndex: 1 }}>
        <header style={{
          background: 'rgba(0, 0, 0, 0.9)',
          border: '1px solid #00ffff',
          borderRadius: '15px',
          margin: '20px',
          padding: '30px'
        }}>
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/" 
              style={{
                color: '#00ffff',
                textDecoration: 'none',
                fontFamily: 'Orbitron, monospace',
                fontSize: '1rem',
                marginBottom: '20px',
                display: 'inline-block',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                transition: 'all 0.3s ease'
              }}
            >
              ← BACK TO ARCHIVES
            </Link>
            <h1 style={{
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              fontFamily: 'Orbitron, monospace',
              background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
              marginBottom: '0',
              fontWeight: '800',
              lineHeight: '1.2'
            }}>
              PRIVACY POLICY
            </h1>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 py-8">
          <div style={{
            background: 'rgba(0, 0, 0, 0.8)',
            border: '1px solid #ff00ff',
            borderRadius: '15px',
            padding: '40px',
            backdropFilter: 'blur(10px)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            
            <div style={{
              color: '#e0e0e0',
              lineHeight: '1.8',
              fontSize: '1rem',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              
              <div style={{ marginBottom: '20px', color: '#cccccc', fontSize: '0.9rem' }}>
                最終更新日: 2025年8月16日
              </div>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                1. 基本方針
              </h2>
              <p style={{ marginBottom: '20px' }}>
                FX Future Archives（以下、「当サイト」）は、ユーザーのプライバシーを重視し、個人情報の保護に努めます。本プライバシーポリシーは、当サイトがどのように情報を収集、使用、保護するかについて説明します。
              </p>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                2. 収集する情報
              </h2>
              <p style={{ marginBottom: '20px' }}>
                当サイトでは以下の情報を収集する場合があります：
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}>アクセスログ（IPアドレス、ユーザーエージェント、リファラー情報など）</li>
                <li style={{ marginBottom: '10px' }}>Cookieおよび類似技術による情報</li>
                <li style={{ marginBottom: '10px' }}>ブラウザのローカルストレージに保存される記事閲覧履歴</li>
                <li style={{ marginBottom: '10px' }}>お問い合わせフォームに入力された情報</li>
              </ul>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                3. 情報の利用目的
              </h2>
              <p style={{ marginBottom: '20px' }}>
                収集した情報は以下の目的で利用します：
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}>サイトの運営、維持、改善</li>
                <li style={{ marginBottom: '10px' }}>ユーザー体験の向上</li>
                <li style={{ marginBottom: '10px' }}>アクセス解析およびサイト利用状況の分析</li>
                <li style={{ marginBottom: '10px' }}>お問い合わせへの対応</li>
                <li style={{ marginBottom: '10px' }}>法的要求への対応</li>
              </ul>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                4. 広告配信について（Google AdSense）
              </h2>
              <p style={{ marginBottom: '20px' }}>
                当サイトでは、第三者配信の広告サービス「Google AdSense」を利用して広告を表示しています。
              </p>
              
              <h3 style={{
                fontSize: '1.2rem',
                fontFamily: 'Orbitron, monospace',
                color: '#ff00ff',
                marginBottom: '15px',
                marginTop: '25px',
                textShadow: '0 0 8px rgba(255, 0, 255, 0.8)'
              }}>
                4.1 Cookieの使用
              </h3>
              <p style={{ marginBottom: '20px' }}>
                Google AdSenseは、以下の目的でCookieや類似の技術を使用します：
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}>ユーザーの興味や関心に基づいた広告の表示</li>
                <li style={{ marginBottom: '10px' }}>広告の効果測定とレポート作成</li>
                <li style={{ marginBottom: '10px' }}>不正行為の防止とセキュリティの向上</li>
                <li style={{ marginBottom: '10px' }}>広告配信システムの最適化</li>
              </ul>

              <h3 style={{
                fontSize: '1.2rem',
                fontFamily: 'Orbitron, monospace',
                color: '#ff00ff',
                marginBottom: '15px',
                marginTop: '25px',
                textShadow: '0 0 8px rgba(255, 0, 255, 0.8)'
              }}>
                4.2 個人情報の取り扱い
              </h3>
              <p style={{ marginBottom: '20px' }}>
                Google AdSenseによる広告配信では、以下の情報が収集される可能性があります：
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}>IPアドレス（位置情報の推定に使用）</li>
                <li style={{ marginBottom: '10px' }}>ブラウザの種類とバージョン</li>
                <li style={{ marginBottom: '10px' }}>アクセスした日時</li>
                <li style={{ marginBottom: '10px' }}>サイト内での行動履歴</li>
                <li style={{ marginBottom: '10px' }}>デバイス情報（画面サイズ、OS等）</li>
              </ul>

              <h3 style={{
                fontSize: '1.2rem',
                fontFamily: 'Orbitron, monospace',
                color: '#ff00ff',
                marginBottom: '15px',
                marginTop: '25px',
                textShadow: '0 0 8px rgba(255, 0, 255, 0.8)'
              }}>
                4.3 広告のパーソナライゼーション
              </h3>
              <p style={{ marginBottom: '20px' }}>
                Googleは、ユーザーの興味・関心に基づいたパーソナライズ広告を表示します。この機能は以下の方法で管理できます：
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00ffff', textDecoration: 'underline' }}>
                    Google広告設定
                  </a>
                  でパーソナライズ広告の無効化
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="https://www.google.com/settings/ads/anonymous" target="_blank" rel="noopener noreferrer" style={{ color: '#00ffff', textDecoration: 'underline' }}>
                    Google Analytics オプトアウト アドオン
                  </a>
                  の使用
                </li>
                <li style={{ marginBottom: '10px' }}>ブラウザのCookie設定での無効化</li>
              </ul>

              <h3 style={{
                fontSize: '1.2rem',
                fontFamily: 'Orbitron, monospace',
                color: '#ff00ff',
                marginBottom: '15px',
                marginTop: '25px',
                textShadow: '0 0 8px rgba(255, 0, 255, 0.8)'
              }}>
                4.4 GDPR対応
              </h3>
              <p style={{ marginBottom: '20px' }}>
                EU一般データ保護規則（GDPR）に基づき、EUユーザーに対しては以下の権利を保障します：
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}>個人データの処理に関する同意の取得</li>
                <li style={{ marginBottom: '10px' }}>個人データへのアクセス権</li>
                <li style={{ marginBottom: '10px' }}>個人データの訂正・削除権</li>
                <li style={{ marginBottom: '10px' }}>データポータビリティの権利</li>
              </ul>

              <p style={{ marginBottom: '20px' }}>
                Google AdSenseおよびGoogleのプライバシーポリシーについては、以下をご参照ください：
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#00ffff', textDecoration: 'underline' }}>
                    Googleプライバシーポリシー
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#00ffff', textDecoration: 'underline' }}>
                    Google広告に関するポリシー
                  </a>
                </li>
              </ul>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                5. アクセス解析ツール
              </h2>
              <p style={{ marginBottom: '20px' }}>
                当サイトでは、サイトの分析と改善のためにアクセス解析ツールを使用しています。これらのツールはCookieを使用してトラフィックデータを収集しますが、個人を特定する情報は含まれません。
              </p>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                6. 第三者への情報提供
              </h2>
              <p style={{ marginBottom: '20px' }}>
                当サイトは、法的要求がある場合を除き、ユーザーの個人情報を第三者に販売、交換、または提供することはありません。
              </p>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                7. セキュリティ
              </h2>
              <p style={{ marginBottom: '20px' }}>
                当サイトは、収集した情報の安全性を確保するため、適切な技術的および管理的措置を講じています。ただし、インターネット上でのデータ送信の完全な安全性を保証することはできません。
              </p>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                8. プライバシーポリシーの変更
              </h2>
              <p style={{ marginBottom: '20px' }}>
                当サイトは、必要に応じてこのプライバシーポリシーを更新することがあります。重要な変更がある場合は、サイト上で通知します。
              </p>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                9. 金融取引に関する免責事項
              </h2>
              <p style={{ marginBottom: '20px' }}>
                当サイトで提供される情報は、教育および情報提供のみを目的としており、投資助言や金融アドバイスを構成するものではありません。
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}>FXや暗号通貨取引には高いリスクが伴います</li>
                <li style={{ marginBottom: '10px' }}>過去の実績は将来の結果を保証するものではありません</li>
                <li style={{ marginBottom: '10px' }}>投資判断は必ずご自身の責任で行ってください</li>
                <li style={{ marginBottom: '10px' }}>損失に対する責任は負いかねます</li>
              </ul>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                10. お問い合わせ
              </h2>
              <p style={{ marginBottom: '20px' }}>
                このプライバシーポリシーに関するご質問やご不明な点がございましたら、お問い合わせページよりご連絡ください。
              </p>

              <div style={{
                marginTop: '40px',
                padding: '20px',
                background: 'rgba(0, 255, 255, 0.1)',
                border: '1px solid #00ffff',
                borderRadius: '10px'
              }}>
                <p style={{ 
                  margin: '0',
                  fontFamily: 'Orbitron, monospace',
                  color: '#00ffff',
                  textAlign: 'center',
                  fontSize: '0.9rem'
                }}>
                  FX Future Archives<br />
                  運営者: [運営者名]<br />
                  最終更新日: 2025年8月16日
                </p>
              </div>

            </div>
          </div>
        </article>
      </div>
    </>
  )
}