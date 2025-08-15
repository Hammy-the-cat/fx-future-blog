import { client, postQuery, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

// PortableTextの表示コンポーネント
const portableTextComponents = {
  types: {
    image: ({value}: {alt?: string; asset: {_ref: string}}) => (
      <div className="my-8">
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || '画像'}
          width={800}
          height={400}
          className="rounded-lg w-full h-auto"
        />
      </div>
    ),
  },
  marks: {
    link: ({children, value}: {children: React.ReactNode; href: string}) => (
      <a href={value.href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  block: {
    h1: ({children}: {children: React.ReactNode}) => <h1 className="text-3xl font-bold mb-4 mt-8">{children}</h1>,
    h2: ({children}: {children: React.ReactNode}) => <h2 className="text-2xl font-bold mb-3 mt-6">{children}</h2>,
    h3: ({children}: {children: React.ReactNode}) => <h3 className="text-xl font-bold mb-2 mt-4">{children}</h3>,
    normal: ({children}: {children: React.ReactNode}) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({children}: {children: React.ReactNode}) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600">
        {children}
      </blockquote>
    ),
  },
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(postQuery, { slug: params.slug })

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
            ← ブログ一覧に戻る
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* 記事のメタ情報 */}
          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-gray-600">
            {post.author && (
              <div className="flex items-center">
                {post.author.image && (
                  <Image
                    src={urlFor(post.author.image).width(40).height(40).url()}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                )}
                <span>作者: {post.author.name}</span>
              </div>
            )}
            
            {post.publishedAt && (
              <span>
                公開日: {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
              </span>
            )}
            
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {category.title}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* メイン画像 */}
          {post.mainImage && (
            <div className="mb-8">
              <Image
                src={urlFor(post.mainImage).width(800).height(400).url()}
                alt={post.title}
                width={800}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
          )}

          {/* 記事本文 */}
          <div className="prose prose-lg max-w-none">
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </div>

          {/* 作者情報 */}
          {post.author && post.author.bio && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start space-x-4">
                {post.author.image && (
                  <Image
                    src={urlFor(post.author.image).width(80).height(80).url()}
                    alt={post.author.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {post.author.name}
                  </h3>
                  <div className="text-gray-600 prose prose-sm">
                    <PortableText value={post.author.bio} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  )
}