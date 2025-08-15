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
    <div style={{ padding: '20px', color: 'white', background: 'black', minHeight: '100vh' }}>
      <h1>FX FUTURE ARCHIVES</h1>
      
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