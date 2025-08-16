'use client'

import { client, postQuery, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'

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

export default function PostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await client.fetch(postQuery, { slug: params.slug })
        
        if (!postData) {
          notFound()
          return
        }

        setPost(postData)
        
        // アクセス数をカウント（LocalStorageに保存）
        const storageKey = `post-access-${params.slug}`
        const currentCount = parseInt(localStorage.getItem(storageKey) || '0')
        const newCount = currentCount + 1
        localStorage.setItem(storageKey, newCount.toString())
        
        console.log(`Article accessed: ${postData.title}, Total views: ${newCount}`)
        
      } catch (error) {
        console.error('Error fetching post:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.slug])

  if (loading) {
    return (
      <>
        <div className="cyber-bg"></div>
        <div className="grid-overlay"></div>
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            color: '#00ffff',
            fontFamily: 'Orbitron, monospace',
            fontSize: '1.5rem',
            textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
          }}>
            LOADING DATA...
          </div>
        </div>
      </>
    )
  }

  if (!post) {
    notFound()
  }

  return (
    <>
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div className="min-h-screen" style={{ position: 'relative', zIndex: 1 }}>
        <header style={{
          background: 'rgba(0, 0, 0, 0.9)',
          border: '1px solid #00ffff',
          borderRadius: '15px',
          margin: '20px',
          padding: '30px'
        }}>
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/" 
              style={{
                color: '#00ffff',
                textDecoration: 'none',
                fontFamily: 'Orbitron, monospace',
                fontSize: '1rem',
                marginBottom: '20px',
                display: 'inline-block',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                transition: 'all 0.3s ease'
              }}
            >
              ← BACK TO ARCHIVES
            </Link>
            <h1 style={{
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              fontFamily: 'Orbitron, monospace',
              background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
              marginBottom: '0',
              fontWeight: '800',
              lineHeight: '1.2'
            }}>
              {post.title}
            </h1>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-4 py-8">
          <div style={{
            background: 'rgba(0, 0, 0, 0.8)',
            border: '1px solid #ff00ff',
            borderRadius: '15px',
            padding: '40px',
            backdropFilter: 'blur(10px)'
          }}>
          {/* 記事のメタ情報 */}
          <div style={{ 
            marginBottom: '30px', 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            gap: '20px', 
            fontSize: '0.9rem'
          }}>
            {post.author && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000',
                  fontWeight: 'bold',
                  marginRight: '12px',
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
                }}>
                  {post.author.name.charAt(0)}
                </div>
                <span style={{ 
                  color: '#ffffff', 
                  fontFamily: 'Orbitron, monospace',
                  textShadow: '0 0 5px rgba(0, 255, 0, 0.8)'
                }}>
                  AUTHOR: {post.author.name}
                </span>
              </div>
            )}
            
            {post.publishedAt && (
              <span style={{
                color: '#cccccc',
                fontFamily: 'Orbitron, monospace'
              }}>
                TRANSMITTED: {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
              </span>
            )}
            
            {post.categories && post.categories.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {post.categories.map((category, index) => (
                  <span 
                    key={index} 
                    style={{
                      background: 'linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2))',
                      border: '1px solid #ff00ff',
                      borderRadius: '15px',
                      padding: '4px 12px',
                      color: '#ffffff',
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '0.8rem',
                      textShadow: '0 0 5px rgba(255, 0, 255, 0.5)',
                      boxShadow: '0 0 8px rgba(255, 0, 255, 0.3)'
                    }}
                  >
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
          <div style={{
            color: '#e0e0e0',
            lineHeight: '1.8',
            fontSize: '1.1rem',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            <PortableText
              value={post.body}
              components={{
                ...portableTextComponents,
                block: {
                  h1: ({children}: {children: React.ReactNode}) => 
                    <h1 style={{
                      fontSize: '2rem',
                      fontFamily: 'Orbitron, monospace',
                      color: '#00ffff',
                      marginBottom: '20px',
                      marginTop: '40px',
                      textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
                    }}>{children}</h1>,
                  h2: ({children}: {children: React.ReactNode}) => 
                    <h2 style={{
                      fontSize: '1.5rem',
                      fontFamily: 'Orbitron, monospace',
                      color: '#ff00ff',
                      marginBottom: '15px',
                      marginTop: '30px',
                      textShadow: '0 0 8px rgba(255, 0, 255, 0.8)'
                    }}>{children}</h2>,
                  h3: ({children}: {children: React.ReactNode}) => 
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontFamily: 'Orbitron, monospace',
                      color: '#ffff00',
                      marginBottom: '10px',
                      marginTop: '20px',
                      textShadow: '0 0 6px rgba(255, 255, 0, 0.8)'
                    }}>{children}</h3>,
                  normal: ({children}: {children: React.ReactNode}) => 
                    <p style={{
                      marginBottom: '20px',
                      color: '#e0e0e0',
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)'
                    }}>{children}</p>,
                  blockquote: ({children}: {children: React.ReactNode}) => (
                    <blockquote style={{
                      borderLeft: '4px solid #00ffff',
                      paddingLeft: '20px',
                      fontStyle: 'italic',
                      margin: '20px 0',
                      color: '#cccccc',
                      background: 'rgba(0, 255, 255, 0.1)',
                      padding: '15px 20px',
                      borderRadius: '8px'
                    }}>
                      {children}
                    </blockquote>
                  ),
                }
              }}
            />
          </div>

          {/* 作者情報 */}
          {post.author && post.author.bio && (
            <div style={{
              marginTop: '50px',
              paddingTop: '30px',
              borderTop: '1px solid #00ffff'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '32px',
                  boxShadow: '0 0 25px rgba(0, 255, 255, 0.4)'
                }}>
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontFamily: 'Orbitron, monospace',
                    color: '#ffffff',
                    marginBottom: '15px',
                    textShadow: '0 0 8px rgba(0, 255, 0, 0.8)'
                  }}>
                    {post.author.name}
                  </h3>
                  <div style={{ 
                    color: '#cccccc', 
                    lineHeight: '1.6',
                    fontSize: '0.95rem'
                  }}>
                    <PortableText value={post.author.bio} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>
      </div>
    </>
  )
}