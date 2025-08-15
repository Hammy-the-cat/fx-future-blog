import { client } from '@/lib/sanity'
import Link from 'next/link'

export default async function CategoriesDebugPage() {
  let categories = []
  let allDocuments = []
  let error = null

  try {
    // 複数のクエリで確認
    categories = await client.fetch(`*[_type == "category"] | order(_createdAt desc) {
      _id,
      title,
      description,
      _createdAt,
      _updatedAt
    }`)

    // すべてのドキュメント取得
    allDocuments = await client.fetch(`*[_type == "category"] {
      _id,
      _type,
      title,
      _createdAt,
      _updatedAt
    }`)
    
    console.log('Categories:', categories)
    console.log('All category documents:', allDocuments)
    
  } catch (err) {
    error = err
    console.error('Categories fetch error:', err)
  }

  return (
    <div className="max-w-4xl mx-auto p-8" style={{ color: '#333', background: '#fff', minHeight: '100vh' }}>
      <h1 className="text-2xl font-bold mb-4">カテゴリーデバッグページ</h1>
      
      {error ? (
        <div className="bg-red-100 p-4 rounded mb-4">
          <h2 className="text-xl font-bold mb-2 text-red-700">エラーが発生しました</h2>
          <pre className="text-sm text-red-600">
            {error instanceof Error ? error.message : String(error)}
          </pre>
        </div>
      ) : (
        <>
          <div className="bg-blue-100 p-4 rounded mb-4">
            <h2 className="text-xl font-bold mb-2">カテゴリー取得結果</h2>
            <p className="mb-2"><strong>カテゴリー数:</strong> {categories.length}</p>
            <p className="mb-2"><strong>全ドキュメント数:</strong> {allDocuments.length}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded mb-4">
            <h2 className="text-xl font-bold mb-2">詳細なカテゴリーデータ:</h2>
            <pre className="text-sm overflow-auto" style={{ maxHeight: '300px' }}>
              {JSON.stringify(categories, null, 2)}
            </pre>
          </div>

          <div className="bg-yellow-100 p-4 rounded mb-4">
            <h2 className="text-xl font-bold mb-2">全カテゴリードキュメント:</h2>
            <pre className="text-sm overflow-auto" style={{ maxHeight: '300px' }}>
              {JSON.stringify(allDocuments, null, 2)}
            </pre>
          </div>
        </>
      )}
      
      <div className="mt-4">
        <Link href="/" className="text-blue-600 hover:underline">
          ← ホームに戻る
        </Link>
      </div>
    </div>
  )
}