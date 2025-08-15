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

  // カテゴリーを取得（デバッグページと全く同じ方法）
  let categories = []
  let allDocuments = []
  let error = null

  try {
    // 複数のクエリで確認（デバッグページと同じ）
    categories = await client.fetch(`*[_type == "category"] | order(_createdAt desc) {
      _id,
      title,
      description,
      _createdAt,
      _updatedAt
    }`)

    // すべてのドキュメント取得（デバッグページと同じ）
    allDocuments = await client.fetch(`*[_type == "category"] {
      _id,
      _type,
      title,
      _createdAt,
      _updatedAt
    }`)
    
    console.log('Main page - Categories:', categories)
    console.log('Main page - All category documents:', allDocuments)
    
  } catch (err) {
    error = err
    console.error('Main page - Categories fetch error:', err)
    categories = []
  }

  return (
    <>
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', position: 'relative', zIndex: 1 }}>
        <header className="futuristic-header">
          <h1 className="futuristic-title">FX FUTURE ARCHIVES</h1>
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
              gap: '15px',
              justifyContent: 'center'
            }}>
              {categories.map((category) => (
                <span
                  key={category._id}
                  style={{
                    background: 'linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2))',
                    border: '1px solid #ff00ff',
                    borderRadius: '20px',
                    padding: '8px 16px',
                    color: '#ffffff',
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    textShadow: '0 0 5px rgba(255, 0, 255, 0.5)',
                    boxShadow: '0 0 10px rgba(255, 0, 255, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'linear-gradient(45deg, rgba(255, 0, 255, 0.4), rgba(0, 255, 255, 0.4))';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2))';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {category.title}
                </span>
              ))}
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
            <p style={{ color: '#888', fontSize: '0.8rem', marginTop: '10px' }}>
              Debug: categories = {JSON.stringify(categories)}
            </p>
          </nav>
        )}

        {/* 強化されたデバッグ情報を表示 */}
        <div style={{
          background: 'rgba(255, 0, 0, 0.1)',
          border: '1px solid #ff0000',
          borderRadius: '10px',
          padding: '15px',
          marginBottom: '20px',
          fontSize: '0.8rem',
          color: '#ff6666'
        }}>
          <strong>ENHANCED DEBUG INFO:</strong><br/>
          {error ? (
            <>
              <span style={{color: '#ff0000'}}>❌ Error occurred: {error instanceof Error ? error.message : String(error)}</span><br/>
            </>
          ) : (
            <>
              <span style={{color: '#00ff00'}}>✅ No errors</span><br/>
            </>
          )}
          Categories type: {typeof categories}<br/>
          Categories length: {categories ? categories.length : 'undefined'}<br/>
          Categories array: {Array.isArray(categories) ? 'Yes' : 'No'}<br/>
          All documents length: {allDocuments ? allDocuments.length : 'undefined'}<br/>
          Raw categories: {JSON.stringify(categories)}<br/>
          Raw allDocuments: {JSON.stringify(allDocuments)}
        </div>

        <main>
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