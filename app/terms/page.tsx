'use client'

import Link from 'next/link'

export default function TermsOfService() {
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
              TERMS OF SERVICE
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
                1. はじめに
              </h2>
              <p style={{ marginBottom: '20px' }}>
                本利用規約（以下、「本規約」）は、FX Future Archives（以下、「当サイト」）のご利用について定めるものです。当サイトをご利用いただく全てのユーザー（以下、「利用者」）は、本規約に同意したものとみなします。
              </p>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                2. サービス内容
              </h2>
              <p style={{ marginBottom: '20px' }}>
                当サイトは、FX取引、暗号資産、経済ニュースに関する情報提供を目的としたブログサイトです。提供する情報は教育・情報提供目的であり、投資助言や勧誘を意図するものではありません。
              </p>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                3. 利用者の責任
              </h2>
              <p style={{ marginBottom: '20px' }}>
                利用者は以下の事項について責任を負うものとします：
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}>当サイトの情報を利用した投資判断および取引結果</li>
                <li style={{ marginBottom: '10px' }}>法令および本規約の遵守</li>
                <li style={{ marginBottom: '10px' }}>第三者の権利を侵害しない適切な利用</li>
                <li style={{ marginBottom: '10px' }}>当サイトのセキュリティを脅かす行為の禁止</li>
              </ul>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                4. 禁止事項
              </h2>
              <p style={{ marginBottom: '20px' }}>
                利用者は以下の行為を行ってはならないものとします：
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}>法律、法令に違反する行為</li>
                <li style={{ marginBottom: '10px' }}>当サイトのコンテンツの無断複製、転載、配布</li>
                <li style={{ marginBottom: '10px' }}>当サイトのシステムに過度な負荷をかける行為</li>
                <li style={{ marginBottom: '10px' }}>他の利用者や第三者に迷惑をかける行為</li>
                <li style={{ marginBottom: '10px' }}>虚偽の情報を投稿または送信する行為</li>
              </ul>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                5. 免責事項
              </h2>
              <p style={{ marginBottom: '20px' }}>
                当サイトは以下について一切の責任を負いません：
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}>当サイトの情報に基づく投資判断による損失</li>
                <li style={{ marginBottom: '10px' }}>当サイトの情報の正確性、完全性、有用性</li>
                <li style={{ marginBottom: '10px' }}>当サイトのサービス中断または停止による損害</li>
                <li style={{ marginBottom: '10px' }}>第三者によるコンテンツの内容</li>
                <li style={{ marginBottom: '10px' }}>技術的障害による損害</li>
              </ul>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                6. 知的財産権
              </h2>
              <p style={{ marginBottom: '20px' }}>
                当サイトのコンテンツ（文章、画像、動画、音声、ソフトウェアなど）の著作権その他の知的財産権は、当サイト運営者または正当な権利者に帰属します。利用者は、私的使用の範囲を超えて、これらを使用することはできません。
              </p>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                7. 広告について
              </h2>
              <p style={{ marginBottom: '20px' }}>
                当サイトでは、Google AdSenseなどの第三者配信広告サービスを利用しています。これらの広告配信事業者は、利用者の興味に応じた広告を表示するためにCookieを使用することがあります。
              </p>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                8. 規約の変更
              </h2>
              <p style={{ marginBottom: '20px' }}>
                当サイトは、必要に応じて本規約を変更することがあります。規約の変更は、当サイト上への掲載をもって利用者に通知されたものとします。変更後の規約は、掲載と同時に効力を生じるものとします。
              </p>

              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                color: '#00ffff',
                marginBottom: '20px',
                marginTop: '30px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>
                9. 準拠法・管轄裁判所
              </h2>
              <p style={{ marginBottom: '20px' }}>
                本規約は日本法に準拠し、解釈されるものとします。当サイトに関して生じた紛争については、当サイト運営者の所在地を管轄する裁判所を専属的合意管轄とします。
              </p>

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
                本規約に関するご質問やご不明な点がございましたら、お問い合わせページよりご連絡ください。
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