import { NextResponse } from 'next/server'

// フォールバック用メモリストレージ（実際の記事データに基づく）
let memoryStorage = {
  posts: {
    'eriot-wave': { viewCount: 234, title: 'エリオット波動の実践応用' },
    'fx-money-plan': { viewCount: 189, title: '［FX生存戦略］手法・心理・資金管理' },
    'time-thinking': { viewCount: 156, title: '横軸（時間軸）の活用法' },
    'daw-method': { viewCount: 123, title: 'ダウ理論と波の習性を極める' },
    'w-buttom-and-top1': { viewCount: 98, title: 'ダブルボトム・ダブルトップの正しい使い方' }
  },
  lastUpdated: new Date().toISOString()
}

// Vercel KVが利用可能かチェック
const isVercelKVAvailable = () => {
  return process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
}

// Vercel KVからデータを取得
async function getFromKV(key) {
  if (!isVercelKVAvailable()) return null
  
  try {
    const response = await fetch(`${process.env.KV_REST_API_URL}/get/${key}`, {
      headers: {
        'Authorization': `Bearer ${process.env.KV_REST_API_TOKEN}`
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      return data.result
    }
  } catch (error) {
    console.error('KV get error:', error)
  }
  return null
}

// Vercel KVにデータを保存
async function setToKV(key, value) {
  if (!isVercelKVAvailable()) return false
  
  try {
    const response = await fetch(`${process.env.KV_REST_API_URL}/set/${key}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.KV_REST_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    })
    
    return response.ok
  } catch (error) {
    console.error('KV set error:', error)
    return false
  }
}

export async function GET() {
  try {
    let postStats = null
    
    // まずVercel KVから取得を試行
    if (isVercelKVAvailable()) {
      postStats = await getFromKV('post_stats')
    }
    
    // KVにデータがない場合はメモリストレージを使用
    if (!postStats) {
      postStats = memoryStorage
    }
    
    // ランキング形式でデータを返す
    const ranking = Object.entries(postStats.posts || {})
      .map(([slug, data]) => ({
        postSlug: slug,
        viewCount: typeof data === 'object' ? data.viewCount : data,
        postTitle: typeof data === 'object' ? data.title : null
      }))
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, 10)
    
    return NextResponse.json({
      ranking,
      lastUpdated: postStats.lastUpdated,
      source: postStats === memoryStorage ? 'memory' : 'kv'
    })
  } catch (error) {
    console.error('Error fetching post stats:', error)
    
    const ranking = Object.entries(memoryStorage.posts)
      .map(([slug, viewCount]) => ({
        postSlug: slug,
        viewCount: viewCount
      }))
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, 10)
    
    return NextResponse.json({
      ranking,
      lastUpdated: memoryStorage.lastUpdated,
      source: 'fallback'
    })
  }
}

export async function POST(request) {
  try {
    const { postSlug } = await request.json()
    
    if (!postSlug) {
      return NextResponse.json({ error: 'Post slug is required' }, { status: 400 })
    }
    
    let currentStats = null
    
    // 現在の統計を取得
    if (isVercelKVAvailable()) {
      currentStats = await getFromKV('post_stats')
    }
    
    if (!currentStats) {
      currentStats = memoryStorage
    }
    
    // 記事のアクセス数を増加
    const newStats = {
      posts: {
        ...currentStats.posts,
        [postSlug]: (currentStats.posts?.[postSlug] || 0) + 1
      },
      lastUpdated: new Date().toISOString()
    }
    
    // 保存を試行
    let savedToKV = false
    if (isVercelKVAvailable()) {
      savedToKV = await setToKV('post_stats', newStats)
    }
    
    // KVに保存できない場合はメモリストレージを更新
    if (!savedToKV) {
      memoryStorage = newStats
    }
    
    return NextResponse.json({
      postSlug,
      viewCount: newStats.posts[postSlug],
      lastUpdated: newStats.lastUpdated,
      source: savedToKV ? 'kv' : 'memory'
    })
  } catch (error) {
    console.error('Error updating post stats:', error)
    
    // エラー時もローカルメモリストレージで継続
    const { postSlug } = await request.json()
    if (postSlug) {
      memoryStorage.posts[postSlug] = (memoryStorage.posts[postSlug] || 0) + 1
      memoryStorage.lastUpdated = new Date().toISOString()
    }
    
    return NextResponse.json({
      postSlug,
      viewCount: memoryStorage.posts[postSlug] || 1,
      lastUpdated: memoryStorage.lastUpdated,
      source: 'error-fallback'
    })
  }
}