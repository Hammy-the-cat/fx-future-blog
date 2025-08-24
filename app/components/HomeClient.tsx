'use client'

import { client, postsQuery } from '@/lib/sanity'
import { useEffect, useState } from 'react'
import InteractiveButton from './InteractiveButton'

interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: any;
  categories: { title: string }[];
  author: { name: string };
  _id: string;
  summary?: string;
}

interface Category {
  title: string;
  _id: string;
}

export default function HomeClient() {
  const [posts, setPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [visitCount, setVisitCount] = useState('000001')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        // Sanity CMSからカテゴリー情報を取得
        const categoryQuery = `*[_type == "category"]{
          _id,
          title,
          description
        }`
        
        console.log('Fetching categories from Sanity...')
        const sanityCategories = await client.fetch(categoryQuery)
        console.log('Categories:', sanityCategories)
        
        if (sanityCategories && sanityCategories.length > 0) {
          setCategories(sanityCategories)
        } else {
          // フォールバック用デフォルトカテゴリー
          setCategories([
            { title: 'FX Skills', _id: 'fx-skills' },
            { title: 'Crypto', _id: 'crypto' },
            { title: 'Economic News', _id: 'economic-news' }
          ])
        }

        // 投稿を取得
        const sanityPosts = await client.fetch(postsQuery)
        console.log('Posts from Sanity:', sanityPosts)
        
        if (sanityPosts && sanityPosts.length > 0) {
          setPosts(sanityPosts)
        } else {
          // フォールバック用デモデータ
          setPosts([
            {
              title: "FX市場における時間思考の重要性",
              slug: { current: "time-thinking" },
              publishedAt: "2025-08-15T10:00:00Z",
              categories: [{ title: "FX Skills" }],
              author: { name: "FX Analyst" },
              _id: "demo-1",
              body: [{ children: [{ text: "時間軸を意識したFX取引戦略について詳しく解説..." }] }],
              summary: "FX取引において時間軸の概念がいかに重要かを、実践的な観点から詳細に解説します。"
            }
          ])
        }

        // アクセス数を更新（Sanityからの取得も可能）
        try {
          const statsQuery = `*[_type == "siteStats"][0]`
          const siteStats = await client.fetch(statsQuery)
          if (siteStats && siteStats.totalVisits) {
            const formattedCount = String(siteStats.totalVisits).padStart(6, '0')
            setVisitCount(formattedCount)
          }
        } catch (error) {
          console.log('Site stats not available, using default')
        }

      } catch (error) {
        console.error('Error loading data:', error)
        // エラー時はデフォルトデータを使用
        setCategories([
          { title: 'FX Skills', _id: 'fx-skills' },
          { title: 'Crypto', _id: 'crypto' },
          { title: 'Economic News', _id: 'economic-news' }
        ])
      }
    }

    loadData()
  }, [])

  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.categories?.some(cat => cat.title === selectedCategory))
    : posts

  return (
    <>
      {/* バックグラウンドエフェクト */}
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div className="min-h-screen" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* ヘッダー */}
        <header style={{
          background: 'rgba(0, 0, 0, 0.9)',
          border: '1px solid #00ffff',
          borderRadius: '15px',
          margin: '20px',
          padding: '30px'
        }}>
          <div className="max-w-6xl mx-auto">
            <h1 style={{
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              fontFamily: 'Orbitron, monospace',
              background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
              marginBottom: '10px',
              fontWeight: '800',
              lineHeight: '1.2'
            }}>
              FX FUTURE ARCHIVES
            </h1>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              color: '#e0e0e0',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              marginBottom: '0',
              opacity: '0.9'
            }}>
              金融市場の未来を見据えた情報アーカイブ | 累計アクセス: <span style={{
                color: '#00ffff',
                fontFamily: 'Orbitron, monospace',
                fontSize: '1.2em',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}>{visitCount}</span>
            </p>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* メインコンテンツ */}
            <div className="lg:col-span-2">
              <div style={{
                background: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid #ff00ff',
                borderRadius: '15px',
                padding: '30px',
                backdropFilter: 'blur(10px)'
              }}>
                <h2 style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  fontFamily: 'Orbitron, monospace',
                  color: '#ff00ff',
                  marginBottom: '25px',
                  textShadow: '0 0 15px rgba(255, 0, 255, 0.8)'
                }}>
                  📊 LATEST MARKET INTELLIGENCE
                </h2>
                
                {filteredPosts.length > 0 ? (
                  <div className="space-y-6">
                    {filteredPosts.map((post) => (
                      <article 
                        key={post._id} 
                        style={{
                          background: 'rgba(0, 255, 255, 0.05)',
                          border: '1px solid #00ffff',
                          borderRadius: '12px',
                          padding: '25px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {post.categories?.map((category, index) => (
                            <span
                              key={index}
                              style={{
                                background: 'linear-gradient(45deg, #00ff0030, #00ff0060)',
                                border: '1px solid #00ff00',
                                borderRadius: '15px',
                                padding: '4px 12px',
                                color: '#00ff00',
                                fontFamily: 'Orbitron, monospace',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                textShadow: '0 0 5px rgba(0, 255, 0, 0.8)'
                              }}
                            >
                              {category.title}
                            </span>
                          ))}
                        </div>

                        <InteractiveButton
                          href={`/posts/${post.slug.current}`}
                          style={{
                            display: 'block',
                            textDecoration: 'none',
                            color: 'inherit'
                          }}
                          hoverStyle={{
                            transform: 'translateX(10px)'
                          }}
                        >
                          <h3 style={{
                            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                            fontFamily: 'Orbitron, monospace',
                            color: '#ffffff',
                            marginBottom: '15px',
                            fontWeight: '700',
                            lineHeight: '1.4',
                            textShadow: '0 0 8px rgba(255, 255, 255, 0.6)'
                          }}>
                            {post.title}
                          </h3>
                        </InteractiveButton>

                        <p style={{
                          color: '#cccccc',
                          lineHeight: '1.6',
                          fontSize: '0.95rem',
                          marginBottom: '15px',
                          fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}>
                          {post.summary || (post.body && post.body[0]?.children?.[0]?.text?.substring(0, 150) + '...' || '詳細な分析記事をご覧ください。')}
                        </p>

                        <div className="flex justify-between items-center text-sm">
                          <span style={{
                            color: '#888',
                            fontFamily: 'Orbitron, monospace',
                            fontSize: '0.8rem'
                          }}>
                            {post.author?.name || 'FX Analyst'} | {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
                          </span>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div style={{
                    textAlign: 'center',
                    padding: '40px',
                    color: '#888'
                  }}>
                    <p>記事を読み込み中...</p>
                  </div>
                )}
              </div>
            </div>

            {/* サイドバー */}
            <div className="space-y-8">
              
              {/* カテゴリーフィルター */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid #ffff00',
                borderRadius: '15px',
                padding: '25px',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontFamily: 'Orbitron, monospace',
                  color: '#ffff00',
                  marginBottom: '20px',
                  textShadow: '0 0 10px rgba(255, 255, 0, 0.8)'
                }}>
                  📂 CATEGORIES
                </h3>
                
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      background: selectedCategory === null ? 'rgba(255, 255, 0, 0.2)' : 'transparent',
                      border: '1px solid ' + (selectedCategory === null ? '#ffff00' : 'transparent'),
                      borderRadius: '8px',
                      padding: '10px 15px',
                      color: selectedCategory === null ? '#ffff00' : '#cccccc',
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    すべての記事
                  </button>
                  
                  {categories.map((category) => (
                    <button
                      key={category._id}
                      onClick={() => setSelectedCategory(category.title)}
                      style={{
                        display: 'block',
                        width: '100%',
                        textAlign: 'left',
                        background: selectedCategory === category.title ? 'rgba(255, 255, 0, 0.2)' : 'transparent',
                        border: '1px solid ' + (selectedCategory === category.title ? '#ffff00' : 'transparent'),
                        borderRadius: '8px',
                        padding: '10px 15px',
                        color: selectedCategory === category.title ? '#ffff00' : '#cccccc',
                        fontFamily: 'Orbitron, monospace',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {category.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* 投資リスク警告 */}
              <div style={{
                background: 'rgba(255, 0, 0, 0.1)',
                border: '2px solid #ff0000',
                borderRadius: '15px',
                padding: '20px',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{
                  fontSize: '1rem',
                  fontFamily: 'Orbitron, monospace',
                  color: '#ff0000',
                  marginBottom: '15px',
                  textShadow: '0 0 8px rgba(255, 0, 0, 0.8)'
                }}>
                  ⚠️ 投資リスク警告
                </h3>
                <p style={{
                  color: '#ffcccc',
                  fontSize: '0.85rem',
                  lineHeight: '1.5',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                  FX・暗号資産取引は高いリスクを伴います。投資は自己責任で行い、失っても問題のない資金のみをご使用ください。
                </p>
              </div>

              {/* クイックリンク */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid #ff6b6b',
                borderRadius: '15px',
                padding: '25px',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontFamily: 'Orbitron, monospace',
                  color: '#ff6b6b',
                  marginBottom: '20px',
                  textShadow: '0 0 10px rgba(255, 107, 107, 0.8)'
                }}>
                  🔗 QUICK ACCESS
                </h3>
                
                <div className="space-y-3">
                  <InteractiveButton
                    href="/about"
                    style={{
                      display: 'block',
                      background: 'linear-gradient(45deg, #ff6b6b20, #ff6b6b40)',
                      border: '1px solid #ff6b6b',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: '#ff6b6b',
                      textDecoration: 'none',
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      textAlign: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    hoverStyle={{
                      background: 'linear-gradient(45deg, #ff6b6b40, #ff6b6b60)',
                      boxShadow: '0 0 15px rgba(255, 107, 107, 0.4)'
                    }}
                  >
                    📋 サイト概要
                  </InteractiveButton>

                  <InteractiveButton
                    href="/contact"
                    style={{
                      display: 'block',
                      background: 'linear-gradient(45deg, #ff6b6b20, #ff6b6b40)',
                      border: '1px solid #ff6b6b',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: '#ff6b6b',
                      textDecoration: 'none',
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      textAlign: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    hoverStyle={{
                      background: 'linear-gradient(45deg, #ff6b6b40, #ff6b6b60)',
                      boxShadow: '0 0 15px rgba(255, 107, 107, 0.4)'
                    }}
                  >
                    📞 お問い合わせ
                  </InteractiveButton>

                  <InteractiveButton
                    href="/privacy"
                    style={{
                      display: 'block',
                      background: 'linear-gradient(45deg, #ff6b6b20, #ff6b6b40)',
                      border: '1px solid #ff6b6b',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: '#ff6b6b',
                      textDecoration: 'none',
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      textAlign: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    hoverStyle={{
                      background: 'linear-gradient(45deg, #ff6b6b40, #ff6b6b60)',
                      boxShadow: '0 0 15px rgba(255, 107, 107, 0.4)'
                    }}
                  >
                    🛡️ プライバシーポリシー
                  </InteractiveButton>

                  <InteractiveButton
                    href="/terms"
                    style={{
                      display: 'block',
                      background: 'linear-gradient(45deg, #ff6b6b20, #ff6b6b40)',
                      border: '1px solid #ff6b6b',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: '#ff6b6b',
                      textDecoration: 'none',
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      textAlign: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    hoverStyle={{
                      background: 'linear-gradient(45deg, #ff6b6b40, #ff6b6b60)',
                      boxShadow: '0 0 15px rgba(255, 107, 107, 0.4)'
                    }}
                  >
                    📄 利用規約
                  </InteractiveButton>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}