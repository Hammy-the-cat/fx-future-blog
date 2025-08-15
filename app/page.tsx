import { client } from '@/lib/sanity'

export default async function Home() {
  // Sanityから記事を取得
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
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

  // 有効な記事のみをフィルタリング
  const validPosts = posts.filter(post => post.slug?.current)

  return (
    <>
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', position: 'relative', zIndex: 1 }}>
        <header className="futuristic-header">
          <h1 className="futuristic-title">FX FUTURE ARCHIVES</h1>
          <p style={{ fontFamily: 'Orbitron, monospace', fontSize: '1.2rem', color: '#00ffff', marginTop: '15px', opacity: 0.9, position: 'relative', zIndex: 1 }}>
            未来から届くFX投資レポート
          </p>
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
              marginTop: '20px',
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
              position: 'relative',
              zIndex: 1,
              transition: 'all 0.3s ease'
            }}
          >
            🚀 Sanity Studio ACCESS
          </a>
        </header>

        <main>
          <div style={{ 
            background: 'rgba(0, 0, 0, 0.8)', 
            border: '1px solid #00ff00', 
            borderRadius: '10px', 
            padding: '20px', 
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            <h3 style={{ fontFamily: 'Orbitron, monospace', color: '#00ff00', marginBottom: '15px' }}>
              ✅ NEXT.JS QUANTUM SYSTEM ONLINE
            </h3>
            <p style={{ color: '#e0e0e0' }}>近未来デザインシステム稼働中 - Sanity CMS連携準備完了</p>
          </div>
          
          {validPosts.map((post) => {
            // 記事の抜粋を生成
            const excerpt = post.body && post.body.length > 0 ? 
              post.body.map(block => 
                block.children ? 
                block.children.map(child => child.text || '').join('') : 
                ''
              ).join(' ').substring(0, 200) + '...' : 
              '本文なし';

            return (
            <article key={post._id} className="post-card">
              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)'
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
                  href="#" 
                  style={{
                    background: 'linear-gradient(45deg, #00ffff, #0080ff)',
                    color: '#000',
                    padding: '12px 25px',
                    textDecoration: 'none',
                    borderRadius: '25px',
                    fontFamily: 'Orbitron, monospace',
                    fontWeight: '600',
                    display: 'inline-block',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
                  }}
                >
                  ⚡ ACCESS DATA
                </a>
              </div>
            </article>
            )
          })}
        </main>
      </div>
    </>
  )
}