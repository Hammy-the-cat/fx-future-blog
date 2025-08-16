'use client'

import Link from 'next/link'

export default function AboutUs() {
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
              ABOUT FX FUTURE ARCHIVES
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

              {/* ミッション */}
              <section style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontFamily: 'Orbitron, monospace',
                  color: '#00ffff',
                  marginBottom: '25px',
                  textShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                  borderBottom: '2px solid #00ffff',
                  paddingBottom: '10px'
                }}>
                  🚀 OUR MISSION
                </h2>
                <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
                  FX Future Archivesは、金融市場の未来を見据えた情報アーカイブとして、FX取引、暗号資産、経済動向に関する質の高い情報を提供することを使命としています。
                </p>
                <p style={{ marginBottom: '20px' }}>
                  私たちは複雑で変化の激しい金融市場において、投資家やトレーダーが適切な判断を下すために必要な知識とインサイトを、サイバーパンクなデジタル体験を通じて届けています。
                </p>
              </section>

              {/* コンテンツカテゴリー */}
              <section style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontFamily: 'Orbitron, monospace',
                  color: '#ff00ff',
                  marginBottom: '25px',
                  textShadow: '0 0 10px rgba(255, 0, 255, 0.8)',
                  borderBottom: '2px solid #ff00ff',
                  paddingBottom: '10px'
                }}>
                  📊 CONTENT CATEGORIES
                </h2>
                
                <div style={{ display: 'grid', gap: '25px' }}>
                  {/* Crypto */}
                  <div style={{
                    background: 'rgba(255, 215, 0, 0.1)',
                    border: '1px solid #ffd700',
                    borderRadius: '12px',
                    padding: '25px',
                    boxShadow: '0 0 15px rgba(255, 215, 0, 0.3)'
                  }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontFamily: 'Orbitron, monospace',
                      color: '#ffd700',
                      marginBottom: '15px',
                      textShadow: '0 0 8px rgba(255, 215, 0, 0.8)'
                    }}>
                      💰 CRYPTO
                    </h3>
                    <p>
                      暗号資産市場の最新動向、テクノロジー分析、投資戦略について深掘りした記事を提供。ビットコイン、イーサリアム、アルトコインの市場分析から、DeFi、NFT、Web3.0の最新トレンドまで、デジタル資産の未来を探求します。
                    </p>
                  </div>

                  {/* FX Skills */}
                  <div style={{
                    background: 'rgba(0, 255, 136, 0.1)',
                    border: '1px solid #00ff88',
                    borderRadius: '12px',
                    padding: '25px',
                    boxShadow: '0 0 15px rgba(0, 255, 136, 0.3)'
                  }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontFamily: 'Orbitron, monospace',
                      color: '#00ff88',
                      marginBottom: '15px',
                      textShadow: '0 0 8px rgba(0, 255, 136, 0.8)'
                    }}>
                      📈 FX SKILLS
                    </h3>
                    <p>
                      外国為替取引の基礎から上級テクニックまで、実践的なスキル向上を支援。テクニカル分析、ファンダメンタル分析、リスク管理手法、心理的要因まで、FXトレーダーに必要なすべての知識を体系的に解説します。
                    </p>
                  </div>

                  {/* Economic News */}
                  <div style={{
                    background: 'rgba(255, 71, 87, 0.1)',
                    border: '1px solid #ff4757',
                    borderRadius: '12px',
                    padding: '25px',
                    boxShadow: '0 0 15px rgba(255, 71, 87, 0.3)'
                  }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontFamily: 'Orbitron, monospace',
                      color: '#ff4757',
                      marginBottom: '15px',
                      textShadow: '0 0 8px rgba(255, 71, 87, 0.8)'
                    }}>
                      📰 ECONOMIC NEWS
                    </h3>
                    <p>
                      世界経済の動向、中央銀行の政策決定、地政学的リスクが金融市場に与える影響を分析。経済指標の読み方から、マクロ経済トレンドの把握まで、市場を動かす要因を詳細に解説します。
                    </p>
                  </div>
                </div>
              </section>

              {/* サイトの特徴 */}
              <section style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontFamily: 'Orbitron, monospace',
                  color: '#ffff00',
                  marginBottom: '25px',
                  textShadow: '0 0 10px rgba(255, 255, 0, 0.8)',
                  borderBottom: '2px solid #ffff00',
                  paddingBottom: '10px'
                }}>
                  ⚡ SITE FEATURES
                </h2>
                <ul style={{ paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '15px', fontSize: '1.05rem' }}>
                    <strong style={{ color: '#00ffff' }}>リアルタイムアクセス解析</strong>: 人気記事ランキングで注目のトピックを把握
                  </li>
                  <li style={{ marginBottom: '15px', fontSize: '1.05rem' }}>
                    <strong style={{ color: '#ff00ff' }}>カテゴリーフィルタリング</strong>: 興味のある分野の記事に素早くアクセス
                  </li>
                  <li style={{ marginBottom: '15px', fontSize: '1.05rem' }}>
                    <strong style={{ color: '#ffd700' }}>サイバーパンクUI</strong>: 未来的なデザインで没入感のある学習体験
                  </li>
                  <li style={{ marginBottom: '15px', fontSize: '1.05rem' }}>
                    <strong style={{ color: '#00ff88' }}>モバイル最適化</strong>: あらゆるデバイスで快適な閲覧体験
                  </li>
                </ul>
              </section>

              {/* 運営方針 */}
              <section style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontFamily: 'Orbitron, monospace',
                  color: '#ff6b7a',
                  marginBottom: '25px',
                  textShadow: '0 0 10px rgba(255, 107, 122, 0.8)',
                  borderBottom: '2px solid #ff6b7a',
                  paddingBottom: '10px'
                }}>
                  🎯 EDITORIAL POLICY
                </h2>
                <div style={{
                  background: 'rgba(255, 107, 122, 0.1)',
                  border: '1px solid #ff6b7a',
                  borderRadius: '12px',
                  padding: '25px'
                }}>
                  <p style={{ marginBottom: '15px' }}>
                    <strong>教育的価値の重視</strong>: すべてのコンテンツは読者の金融リテラシー向上を目的とし、投資判断の参考情報として提供しています。
                  </p>
                  <p style={{ marginBottom: '15px' }}>
                    <strong>中立的な視点</strong>: 特定の金融商品や投資手法を推奨することなく、客観的な分析と情報提供に徹しています。
                  </p>
                  <p style={{ marginBottom: '15px' }}>
                    <strong>継続的な更新</strong>: 急速に変化する金融市場に対応するため、情報の鮮度と正確性を重視した継続的な更新を行っています。
                  </p>
                  <p style={{ 
                    color: '#ff6b7a', 
                    fontWeight: 'bold',
                    textShadow: '0 0 5px rgba(255, 107, 122, 0.8)'
                  }}>
                    ※当サイトは情報提供を目的としており、投資助言や勧誘を行うものではありません。
                  </p>
                </div>
              </section>

              {/* 運営者情報 */}
              <section style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontFamily: 'Orbitron, monospace',
                  color: '#00ffff',
                  marginBottom: '25px',
                  textShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                  borderBottom: '2px solid #00ffff',
                  paddingBottom: '10px'
                }}>
                  👨‍💻 OPERATOR INFORMATION
                </h2>
                <div style={{
                  background: 'rgba(0, 255, 255, 0.1)',
                  border: '1px solid #00ffff',
                  borderRadius: '12px',
                  padding: '25px'
                }}>
                  <p style={{ marginBottom: '15px' }}>
                    <strong>サイト名</strong>: FX Future Archives
                  </p>
                  <p style={{ marginBottom: '15px' }}>
                    <strong>運営開始</strong>: 2025年
                  </p>
                  <p style={{ marginBottom: '15px' }}>
                    <strong>技術スタック</strong>: Next.js 15, Sanity CMS, Vercel
                  </p>
                  <p style={{ marginBottom: '15px' }}>
                    <strong>更新頻度</strong>: 週2-3回の新着記事公開
                  </p>
                  <p style={{ marginBottom: '15px' }}>
                    <strong>お問い合わせ</strong>: <Link href="/contact" style={{ color: '#00ffff', textDecoration: 'underline' }}>コンタクトページ</Link>よりご連絡ください
                  </p>
                </div>
              </section>

              {/* 免責事項 */}
              <section>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontFamily: 'Orbitron, monospace',
                  color: '#ff4757',
                  marginBottom: '25px',
                  textShadow: '0 0 10px rgba(255, 71, 87, 0.8)',
                  borderBottom: '2px solid #ff4757',
                  paddingBottom: '10px'
                }}>
                  ⚠️ DISCLAIMER
                </h2>
                <div style={{
                  background: 'rgba(255, 71, 87, 0.1)',
                  border: '1px solid #ff4757',
                  borderRadius: '12px',
                  padding: '25px'
                }}>
                  <p style={{ marginBottom: '15px', fontSize: '0.95rem' }}>
                    当サイトに掲載されている情報は、投資判断の参考として情報提供を目的としており、投資勧誘や特定の金融商品の売買を推奨するものではありません。
                  </p>
                  <p style={{ marginBottom: '15px', fontSize: '0.95rem' }}>
                    投資に関する最終的な決定は、ご自身の判断でなされるようお願いいたします。当サイトの情報に基づいて被ったいかなる損害についても、当サイトは一切の責任を負いません。
                  </p>
                  <p style={{ fontSize: '0.95rem', color: '#ff4757', fontWeight: 'bold' }}>
                    投資はリスクを伴います。過去の実績は将来の成果を保証するものではありません。
                  </p>
                </div>
              </section>

            </div>
          </div>
        </article>
      </div>
    </>
  )
}