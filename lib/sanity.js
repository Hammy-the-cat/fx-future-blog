import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'sfth73fb',
  dataset: 'production',
  useCdn: true, // CDNを使用してパフォーマンス向上
  apiVersion: '2021-10-21', // 今日の日付またはお好みの日付
})

// 記事を取得するクエリ
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
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
}`

// 単一記事を取得するクエリ
export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  author->{
    name,
    image,
    bio
  },
  mainImage,
  categories[]->{
    title
  },
  publishedAt,
  body
}`

// 画像URLビルダーを初期化
const builder = imageUrlBuilder(client)

// 画像URLを生成するヘルパー関数
export function urlFor(source) {
  return builder.image(source)
}