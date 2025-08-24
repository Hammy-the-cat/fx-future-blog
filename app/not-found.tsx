import type { Metadata } from "next";
import Link from 'next/link'

export const metadata: Metadata = {
  title: "ページが見つかりません - 404エラー",
  description: "お探しのページは見つかりませんでした。URLをご確認いただくか、ホームページから目的の記事をお探しください。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div className="min-h-screen flex items-center justify-center" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          background: 'rgba(0, 0, 0, 0.9)',
          border: '2px solid #ff0000',
          borderRadius: '20px',
          padding: '60px 40px',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '20px',
          boxShadow: '0 0 30px rgba(255, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          
          {/* 404エラーコード */}
          <div style={{
            fontSize: 'clamp(4rem, 15vw, 8rem)',
            fontFamily: 'Orbitron, monospace',
            fontWeight: '900',
            background: 'linear-gradient(45deg, #ff0000, #ff6b6b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 30px rgba(255, 0, 0, 0.8)',
            marginBottom: '20px',
            lineHeight: '1'
          }}>
            404
          </div>

          {/* エラーメッセージ */}
          <h1 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontFamily: 'Orbitron, monospace',
            color: '#ffffff',
            marginBottom: '30px',
            textShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
            fontWeight: '700'
          }}>
            🚫 PAGE NOT FOUND
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: '#e0e0e0',
            marginBottom: '40px',
            lineHeight: '1.6',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            お探しのページは見つかりませんでした。<br />
            URLをご確認いただくか、以下のリンクから目的の情報をお探しください。
          </p>

          {/* ナビゲーションボタン */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
            marginBottom: '40px'
          }}>
            <Link 
              href="/"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(45deg, #00ffff, #0080ff)',
                color: '#000',
                padding: '15px 40px',
                textDecoration: 'none',
                borderRadius: '30px',
                fontFamily: 'Orbitron, monospace',
                fontSize: '1.1rem',
                fontWeight: '600',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                minWidth: '200px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.7)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.4)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              🏠 ホームに戻る
            </Link>

            <Link 
              href="/about"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(45deg, #ff00ff, #ff6bff)',
                color: '#000',
                padding: '12px 30px',
                textDecoration: 'none',
                borderRadius: '25px',
                fontFamily: 'Orbitron, monospace',
                fontSize: '0.95rem',
                fontWeight: '600',
                boxShadow: '0 0 15px rgba(255, 0, 255, 0.3)',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                minWidth: '180px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 0, 255, 0.6)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 0, 255, 0.3)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              📋 サイト概要
            </Link>

            <Link 
              href="/contact"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(45deg, #ffff00, #ffed4e)',
                color: '#000',
                padding: '12px 30px',
                textDecoration: 'none',
                borderRadius: '25px',
                fontFamily: 'Orbitron, monospace',
                fontSize: '0.95rem',
                fontWeight: '600',
                boxShadow: '0 0 15px rgba(255, 255, 0, 0.3)',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                minWidth: '180px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 255, 0, 0.6)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 255, 0, 0.3)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              📞 お問い合わせ
            </Link>
          </div>

          {/* 人気カテゴリー */}
          <div style={{
            marginTop: '30px',
            padding: '25px',
            background: 'rgba(0, 255, 255, 0.1)',
            border: '1px solid #00ffff',
            borderRadius: '15px'
          }}>
            <h3 style={{
              fontSize: '1.2rem',
              fontFamily: 'Orbitron, monospace',
              color: '#00ffff',
              marginBottom: '20px',
              textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
            }}>
              📂 人気のカテゴリー
            </h3>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
              justifyContent: 'center'
            }}>
              {[
                { name: 'FX Skills', color: '#00ff00' },
                { name: 'Crypto', color: '#ffa500' },
                { name: 'Economic News', color: '#ff6b6b' }
              ].map((category, index) => (
                <span
                  key={index}
                  style={{
                    background: `linear-gradient(45deg, ${category.color}20, ${category.color}40)`,
                    border: `1px solid ${category.color}`,
                    borderRadius: '20px',
                    padding: '8px 16px',
                    color: '#ffffff',
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textShadow: `0 0 5px ${category.color}80`,
                    boxShadow: `0 0 10px ${category.color}30`
                  }}
                >
                  {category.name}
                </span>
              ))}
            </div>
          </div>

          {/* エラーコード情報 */}
          <div style={{
            marginTop: '30px',
            fontSize: '0.85rem',
            color: '#888888',
            fontFamily: 'Orbitron, monospace'
          }}>
            ERROR CODE: HTTP_404 | FX_FUTURE_ARCHIVES_SYSTEM
          </div>
        </div>
      </div>
    </>
  )
}