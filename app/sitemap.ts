import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://future-fx-blog.vercel.app'

  // 静的ページ
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms'
  ]

  // 記事ページ（デモデータのslug一覧）
  const postSlugs = [
    'fx-market-analysis-2025',
    'bitcoin-trading-strategy',
    'risk-management-fx',
    'boj-policy-analysis',
    'eur-usd-trend-analysis',
    'ethereum-2-market-impact',
    'technical-analysis-macd-rsi',
    'us-employment-data-strategy',
    'defi-market-trends-risks',
    'scalping-strategy-guide',
    'time-thinking' // Sanityからの実記事
  ]

  const staticSitemapEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'daily' as const : 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const postSitemapEntries = postSlugs.map((slug) => ({
    url: `${baseUrl}/posts/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [
    ...staticSitemapEntries,
    ...postSitemapEntries,
  ]
}