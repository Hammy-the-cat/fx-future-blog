import { client } from '@/lib/sanity'

export default async function CategoriesDebugPage() {
  try {
    // カテゴリーを取得
    const categories = await client.fetch(`*[_type == "category"] | order(_createdAt desc) {
      _id,
      title,
      description,
      _createdAt
    }`)
    
    console.log('Categories:', categories)
    
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">カテゴリーデバッグページ</h1>
        <p className="mb-2">カテゴリー数: {categories.length}</p>
        
        <h2 className="text-xl font-bold mb-2">全カテゴリーデータ:</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto mb-4">
          {JSON.stringify(categories, null, 2)}
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