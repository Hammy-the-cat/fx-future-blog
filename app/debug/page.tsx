import { client } from '@/lib/sanity'

export default async function DebugPage() {
  try {
    // メインページと同じクエリでテスト
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
      body
    }`)
    
    // フィルタリング後の記事
    const validPosts = posts.filter(post => post.slug?.current)
    
    console.log('Posts:', posts)
    
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">デバッグページ</h1>
        <p className="mb-2">全記事数: {posts.length}</p>
        <p className="mb-4">有効な記事数（slug有り）: {validPosts.length}</p>
        
        <h2 className="text-xl font-bold mb-2">全記事データ:</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto mb-4">
          {JSON.stringify(posts, null, 2)}
        </pre>
        
        <h2 className="text-xl font-bold mb-2">有効な記事データ:</h2>
        <pre className="bg-green-100 p-4 rounded text-sm overflow-auto">
          {JSON.stringify(validPosts, null, 2)}
        </pre>
        
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← ホームに戻る
          </a>
        </div>
      </div>
    )
  } catch (error) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">エラーが発生しました</h1>
        <pre className="bg-red-100 p-4 rounded text-sm">
          {error instanceof Error ? error.message : String(error)}
        </pre>
      </div>
    )
  }
}