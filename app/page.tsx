import HomeClient from './components/HomeClient'

// JSON-LD 構造化データ
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FX Future Archives',
  description: 'FX取引、暗号資産、経済動向に関する質の高い情報を提供する金融教育メディア',
  url: 'https://future-fx-blog.vercel.app',
  publisher: {
    '@type': 'Organization',
    name: 'FX Future Archives',
    logo: {
      '@type': 'ImageObject',
      url: 'https://future-fx-blog.vercel.app/logo.png'
    }
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://future-fx-blog.vercel.app/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
}

export default function Home() {
  return (
    <>
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* クライアントサイドコンポーネント */}
      <HomeClient />
    </>
  )
}