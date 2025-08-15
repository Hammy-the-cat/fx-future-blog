import { client } from '@/lib/sanity'

export default async function Home() {
  let categories = []
  let error = null

  try {
    categories = await client.fetch(`*[_type == "category"] | order(_createdAt desc) {
      _id,
      title,
      description,
      _createdAt,
      _updatedAt
    }`)
    
    console.log('Categories:', categories)
    
  } catch (err) {
    error = err
    console.error('Categories fetch error:', err)
    categories = []
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', minHeight: '100vh' }}>
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
            boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
          }}
        >
          🚀 Sanity Studio ACCESS
        </a>
      </header>
      
      {error ? (
        <div style={{ background: 'red', padding: '10px', margin: '20px 0' }}>
          <h2>エラーが発生しました</h2>
          <pre>{error instanceof Error ? error.message : String(error)}</pre>
        </div>
      ) : (
        <div style={{ background: 'green', padding: '10px', margin: '20px 0' }}>
          <h2>カテゴリー取得結果</h2>
          <p><strong>カテゴリー数:</strong> {categories.length}</p>
          <pre>{JSON.stringify(categories, null, 2)}</pre>
        </div>
      )}
      
      {categories && categories.length > 0 ? (
        <nav style={{ background: '#333', padding: '20px', margin: '20px 0' }}>
          <h3>📂 CATEGORIES</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <span
                key={category._id}
                style={{
                  background: '#555',
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  padding: '5px 10px',
                  color: 'white'
                }}
              >
                {category.title}
              </span>
            ))}
          </div>
        </nav>
      ) : (
        <div style={{ background: '#333', padding: '20px', margin: '20px 0' }}>
          <h3>📂 カテゴリーが見つかりません</h3>
          <p>カテゴリーを作成してください</p>
        </div>
      )}
      
      <p>テスト完了 - ページが表示されました</p>
    </div>
  )
}