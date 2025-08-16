'use client'

import { client } from '@/lib/sanity'
import { useEffect, useState } from 'react'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [visitCount, setVisitCount] = useState('000001')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [accessRanking, setAccessRanking] = useState([])

  useEffect(() => {
    // アクセスカウンターの処理
    const currentCount = parseInt(localStorage.getItem('fx-blog-visits') || '0')
    const newCount = currentCount + 1
    localStorage.setItem('fx-blog-visits', newCount.toString())
    setVisitCount(newCount.toString().padStart(6, '0'))

    // データ取得
    const fetchData = async () => {
      try {
        // 記事を取得
        const postsData = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          author->{
            name,
            image
          },
          mainImage,
          categories[]->{
            title
          },
          publishedAt,
          body[0...2]{
            ...,
            children[]{
              text
            }
          }
        }`)
        setPosts(postsData.filter(post => post.slug?.current))

        // カテゴリーを取得
        const categoriesData = await client.fetch(`*[_type == "category"] | order(_createdAt desc) {
          _id,
          title,
          description,
          _createdAt,
          _updatedAt
        }`)
        setCategories(categoriesData)
        
        // 実際のアクセス数を取得してランキング生成
        const getPostAccessCount = (slug) => {
          return parseInt(localStorage.getItem(`post-access-${slug}`) || '0');
        };

        const rankingData = postsData
          .filter(post => post.slug?.current)
          .map(post => ({
            ...post,
            accessCount: getPostAccessCount(post.slug.current)
          }))
          .filter(post => post.accessCount > 0) // アクセス数0の記事は除外
          .sort((a, b) => b.accessCount - a.accessCount)
          .slice(0, 5); // トップ5のみ
        
        setAccessRanking(rankingData)
        
        // デバッグ用ログ
        console.log('Posts data:', postsData)
        console.log('Categories data:', categoriesData)
        console.log('Access ranking:', rankingData)
      } catch (error) {
        console.error('Data fetch error:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', position: 'relative', zIndex: 1 }}>
        <header className="futuristic-header">
        <h1 className="futuristic-title">FX FUTURE ARCHIVES</h1>
        
        {/* アクセスカウンター */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.6)',
          border: '1px solid #00ffff',
          borderRadius: '10px',
          padding: '15px 20px',
          marginTop: '20px',
          display: 'inline-block',
          fontFamily: 'Orbitron, monospace',
          color: '#00ffff',
          textShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
        }}>
          <div style={{ 
            fontSize: '0.8rem', 
            marginBottom: '5px',
            opacity: 0.8
          }}>
            TOTAL ACCESS COUNT
          </div>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}>
            {visitCount}
          </div>
        </div>
      </header>
      
      
      {/* カテゴリー表示 */}
      {categories && categories.length > 0 ? (
        <nav style={{
          background: 'rgba(0, 0, 0, 0.8)',
          border: '1px solid #ff00ff',
          borderRadius: '15px',
          padding: '20px',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontFamily: 'Orbitron, monospace',
            color: '#ff00ff',
            marginBottom: '15px',
            fontSize: '1.2rem',
            textShadow: '0 0 10px rgba(255, 0, 255, 0.8)'
          }}>
            📂 CATEGORIES
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center'
          }}>
            {categories.map((category) => {
              const isSelected = selectedCategory === category.title;
              
              // カテゴリー別カラーパレット（記事カードと同じ）
              const getCategoryColors = (categoryTitle) => {
                const title = categoryTitle.toLowerCase();
                
                switch (title) {
                  case 'crypto':
                    return {
                      border: '#ffd700',
                      glow: 'rgba(255, 215, 0, 0.3)',
                      selectedGlow: 'rgba(255, 215, 0, 0.6)',
                      gradient: 'linear-gradient(45deg, rgba(255, 215, 0, 0.2), rgba(255, 215, 0, 0.4))',
                      selectedGradient: 'linear-gradient(45deg, rgba(255, 215, 0, 0.6), rgba(255, 215, 0, 0.8))'
                    };
                  case 'fx skills':
                    return {
                      border: '#00ff88',
                      glow: 'rgba(0, 255, 136, 0.3)',
                      selectedGlow: 'rgba(0, 255, 136, 0.6)',
                      gradient: 'linear-gradient(45deg, rgba(0, 255, 136, 0.2), rgba(0, 255, 136, 0.4))',
                      selectedGradient: 'linear-gradient(45deg, rgba(0, 255, 136, 0.6), rgba(0, 255, 136, 0.8))'
                    };
                  case 'economic news':
                    return {
                      border: '#ff4757',
                      glow: 'rgba(255, 71, 87, 0.3)',
                      selectedGlow: 'rgba(255, 71, 87, 0.6)',
                      gradient: 'linear-gradient(45deg, rgba(255, 71, 87, 0.2), rgba(255, 71, 87, 0.4))',
                      selectedGradient: 'linear-gradient(45deg, rgba(255, 71, 87, 0.6), rgba(255, 71, 87, 0.8))'
                    };
                  default:
                    return {
                      border: '#ff00ff',
                      glow: 'rgba(255, 0, 255, 0.3)',
                      selectedGlow: 'rgba(255, 0, 255, 0.6)',
                      gradient: 'linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(255, 0, 255, 0.4))',
                      selectedGradient: 'linear-gradient(45deg, rgba(255, 0, 255, 0.6), rgba(255, 0, 255, 0.8))'
                    };
                }
              };

              const colors = getCategoryColors(category.title);

              return (
                <span
                  key={category._id}
                  onClick={() => {
                    console.log('Selected category:', category.title)
                    setSelectedCategory(category.title)
                  }}
                  style={{
                    background: isSelected ? colors.selectedGradient : colors.gradient,
                    border: isSelected ? `3px solid ${colors.border}` : `2px solid ${colors.border}`,
                    borderRadius: '25px',
                    padding: '12px 24px',
                    color: '#ffffff',
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '1.1rem',
                    fontWeight: isSelected ? '700' : '600',
                    textShadow: isSelected 
                      ? `0 0 12px ${colors.border}`
                      : `0 0 8px ${colors.glow.replace('0.3', '0.8')}`,
                    boxShadow: isSelected 
                      ? `0 0 25px ${colors.selectedGlow}`
                      : `0 0 15px ${colors.glow}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                    minWidth: '120px',
                    textAlign: 'center'
                  }}
                >
                  {category.title}
                </span>
              );
            })}
            
            {/* リセットボタン */}
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                style={{
                  background: 'linear-gradient(45deg, #ff4757, #ff6b7a)',
                  border: '1px solid #ff4757',
                  borderRadius: '20px',
                  padding: '8px 16px',
                  color: '#ffffff',
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  textShadow: '0 0 5px rgba(255, 71, 87, 0.8)',
                  boxShadow: '0 0 15px rgba(255, 71, 87, 0.4)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: '10px'
                }}
              >
                🔄 SHOW ALL
              </button>
            )}
          </div>
        </nav>
      ) : (
        <nav style={{
          background: 'rgba(0, 0, 0, 0.8)',
          border: '1px solid #ffff00',
          borderRadius: '15px',
          padding: '20px',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontFamily: 'Orbitron, monospace',
            color: '#ffff00',
            marginBottom: '10px',
            fontSize: '1rem',
            textShadow: '0 0 10px rgba(255, 255, 0, 0.8)'
          }}>
            📂 カテゴリーが見つかりません
          </h3>
          <p style={{ color: '#e0e0e0', fontSize: '0.9rem' }}>
            Sanity Studioでカテゴリーを作成してください
          </p>
        </nav>
      )}

      {/* アクセスランキング */}
      {accessRanking.length > 0 && (
        <section style={{
          background: 'rgba(0, 0, 0, 0.8)',
          border: '1px solid #ffff00',
          borderRadius: '15px',
          padding: '25px',
          marginBottom: '30px',
          textAlign: 'left'
        }}>
          <h3 style={{
            fontFamily: 'Orbitron, monospace',
            color: '#ffff00',
            marginBottom: '20px',
            fontSize: '1.2rem',
            textShadow: '0 0 10px rgba(255, 255, 0, 0.8)',
            textAlign: 'center'
          }}>
            🏆 ACCESS RANKING
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {accessRanking.map((post, index) => (
              <a
                key={post._id}
                href={`/posts/${post.slug.current}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '15px',
                  background: `linear-gradient(90deg, rgba(255, 255, 0, ${0.1 + index * 0.02}), rgba(0, 0, 0, 0.3))`,
                  border: '1px solid rgba(255, 255, 0, 0.3)',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 10px rgba(255, 255, 0, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(90deg, rgba(255, 255, 0, 0.3), rgba(0, 0, 0, 0.1))';
                  e.target.style.boxShadow = '0 0 20px rgba(255, 255, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = `linear-gradient(90deg, rgba(255, 255, 0, ${0.1 + index * 0.02}), rgba(0, 0, 0, 0.3))`;
                  e.target.style.boxShadow = '0 0 10px rgba(255, 255, 0, 0.2)';
                }}
              >
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: index < 3 ? 
                    `linear-gradient(45deg, ${['#ffd700', '#c0c0c0', '#cd7f32'][index]}, ${['#ffed4e', '#e8e8e8', '#daa520'][index]})` :
                    'linear-gradient(45deg, #666666, #888888)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  marginRight: '15px',
                  fontFamily: 'Orbitron, monospace',
                  boxShadow: '0 0 10px rgba(255, 255, 0, 0.3)'
                }}>
                  {index + 1}
                </div>
                
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    textShadow: '0 0 5px rgba(255, 255, 0, 0.6)',
                    flex: 1,
                    marginRight: '15px'
                  }}>
                    {post.title.length > 40 ? post.title.substring(0, 40) + '...' : post.title}
                  </span>
                  
                  <span style={{
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '0.8rem',
                    color: '#ffff00',
                    textShadow: '0 0 8px rgba(255, 255, 0, 0.8)',
                    fontWeight: '600',
                    minWidth: '80px',
                    textAlign: 'right'
                  }}>
                    {post.accessCount.toLocaleString()} HITS
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* フィルター結果表示 */}
      {selectedCategory && (
        <div style={{
          background: 'rgba(0, 0, 0, 0.8)',
          border: '1px solid #00ff88',
          borderRadius: '10px',
          padding: '15px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <span style={{
            fontFamily: 'Orbitron, monospace',
            color: '#00ff88',
            fontSize: '0.9rem',
            textShadow: '0 0 8px rgba(0, 255, 136, 0.8)'
          }}>
            📊 FILTERED BY: {selectedCategory || 'Unknown'}
          </span>
        </div>
      )}

      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(500px, 100%), 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {posts
          .filter(post => {
            if (!selectedCategory) return true;
            console.log('Filtering post:', post.title, 'Categories:', post.categories?.map(cat => cat.title))
            const hasCategory = post.categories?.some(cat => cat.title === selectedCategory);
            console.log('Has category match:', hasCategory)
            return hasCategory;
          })
          .map((post) => {
          // 記事の抜粋を生成
          const excerpt = post.body && post.body.length > 0 ? 
            post.body.map(block => 
              block.children ? 
              block.children.map(child => child.text || '').join('') : 
              ''
            ).join(' ').substring(0, 200) + '...' : 
            '本文なし';

          // カテゴリー別カラーパレット
          const getCategoryColors = (categories) => {
            if (!categories || categories.length === 0) {
              return {
                border: '#00ffff',
                glow: 'rgba(0, 255, 255, 0.3)',
                accent: '#00ffff',
                accentGlow: 'rgba(0, 255, 255, 0.4)'
              };
            }
            
            const category = categories[0].title.toLowerCase();
            
            switch (category) {
              case 'crypto':
                return {
                  border: '#ffd700',
                  glow: 'rgba(255, 215, 0, 0.3)',
                  accent: '#ffd700',
                  accentGlow: 'rgba(255, 215, 0, 0.4)'
                };
              case 'fx skills':
                return {
                  border: '#00ff88',
                  glow: 'rgba(0, 255, 136, 0.3)',
                  accent: '#00ff88',
                  accentGlow: 'rgba(0, 255, 136, 0.4)'
                };
              case 'economic news':
                return {
                  border: '#ff4757',
                  glow: 'rgba(255, 71, 87, 0.3)',
                  accent: '#ff4757',
                  accentGlow: 'rgba(255, 71, 87, 0.4)'
                };
              default:
                return {
                  border: '#ff00ff',
                  glow: 'rgba(255, 0, 255, 0.3)',
                  accent: '#ff00ff',
                  accentGlow: 'rgba(255, 0, 255, 0.4)'
                };
            }
          };

          const colors = getCategoryColors(post.categories);

          return (
          <article key={post._id} style={{
            background: 'rgba(0, 0, 0, 0.8)',
            border: `1px solid ${colors.border}`,
            borderRadius: '15px',
            padding: '25px',
            backdropFilter: 'blur(10px)',
            boxShadow: `0 0 20px ${colors.glow}`,
            transition: 'all 0.3s ease',
            height: 'fit-content'
          }}>
            <div className="post-content">
              <h2 className="post-title">{post.title}</h2>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: `linear-gradient(45deg, ${colors.accent}, #ff00ff)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  boxShadow: `0 0 20px ${colors.accentGlow}`
                }}>
                  E
                </div>
                <div>
                  <div style={{ 
                    fontFamily: 'Orbitron, monospace', 
                    color: '#ffffff', 
                    fontWeight: '600', 
                    fontSize: '1.1rem',
                    textShadow: '0 0 8px rgba(0, 255, 0, 0.8)'
                  }}>
                    {post.author?.name || 'Unknown Author'}
                  </div>
                  <div style={{ 
                    color: '#cccccc', 
                    fontSize: '0.9rem', 
                    fontFamily: 'Orbitron, monospace' 
                  }}>
                    TRANSMITTED: {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('ja-JP') : '日付未設定'}
                  </div>
                </div>
              </div>
              
              <div style={{ 
                color: '#e0e0e0', 
                marginBottom: '25px', 
                lineHeight: '1.7',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)'
              }}>
                {excerpt}
              </div>
              
              <a 
                href={`/posts/${post.slug.current}`}
                style={{
                  background: `linear-gradient(45deg, ${colors.accent}, ${colors.border})`,
                  color: '#000',
                  padding: '12px 25px',
                  textDecoration: 'none',
                  borderRadius: '25px',
                  fontFamily: 'Orbitron, monospace',
                  fontWeight: '600',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  boxShadow: `0 0 15px ${colors.glow}`
                }}
              >
                ⚡ ACCESS DATA
              </a>
            </div>
          </article>
          )
        })}
      </main>

      {/* フッター */}
      <footer style={{
        background: 'rgba(0, 0, 0, 0.9)',
        border: '1px solid #00ffff',
        borderRadius: '15px',
        margin: '20px',
        padding: '30px',
        textAlign: 'center',
        marginTop: '50px'
      }}>
        {/* 開発環境のみでADMIN ACCESSを表示 */}
        {process.env.NODE_ENV === 'development' && (
          <>
            <div style={{
              fontFamily: 'Orbitron, monospace',
              color: '#00ffff',
              fontSize: '1.2rem',
              marginBottom: '20px',
              textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
            }}>
              ADMIN ACCESS
            </div>
            <a 
              href="http://localhost:3333" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-block', 
                background: 'linear-gradient(45deg, #00ffff, #0080ff)',
                color: '#000', 
                padding: '12px 25px', 
                textDecoration: 'none', 
                borderRadius: '25px',
                fontFamily: 'Orbitron, monospace',
                fontWeight: '600',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
                marginBottom: '20px'
              }}
            >
              🚀 Sanity Studio ACCESS
            </a>
          </>
        )}
        <div style={{
          color: '#666',
          fontSize: '0.8rem',
          fontFamily: 'Orbitron, monospace',
          marginTop: process.env.NODE_ENV === 'development' ? '20px' : '0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}>
          <div>
            © 2025 FX FUTURE ARCHIVES | Powered by Next.js & Sanity
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="/privacy"
              style={{
                color: '#00ffff',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontFamily: 'Orbitron, monospace',
                textShadow: '0 0 5px rgba(0, 255, 255, 0.6)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.textShadow = '0 0 10px rgba(0, 255, 255, 1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.textShadow = '0 0 5px rgba(0, 255, 255, 0.6)';
              }}
            >
              PRIVACY POLICY
            </a>
            <span style={{ color: '#444' }}>|</span>
            <a
              href="/terms"
              style={{
                color: '#00ffff',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontFamily: 'Orbitron, monospace',
                textShadow: '0 0 5px rgba(0, 255, 255, 0.6)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.textShadow = '0 0 10px rgba(0, 255, 255, 1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.textShadow = '0 0 5px rgba(0, 255, 255, 0.6)';
              }}
            >
              TERMS
            </a>
            <span style={{ color: '#444' }}>|</span>
            <a
              href="/contact"
              style={{
                color: '#00ffff',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontFamily: 'Orbitron, monospace',
                textShadow: '0 0 5px rgba(0, 255, 255, 0.6)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.textShadow = '0 0 10px rgba(0, 255, 255, 1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.textShadow = '0 0 5px rgba(0, 255, 255, 0.6)';
              }}
            >
              CONTACT
            </a>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}