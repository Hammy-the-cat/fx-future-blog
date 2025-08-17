import { NextResponse } from 'next/server'

// Vercel KVが利用できない場合のフォールバック用メモリストレージ
let memoryStorage = {
  siteVisits: 1250,
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
    let siteStats = null
    
    // まずVercel KVから取得を試行
    if (isVercelKVAvailable()) {
      siteStats = await getFromKV('site_stats')
    }
    
    // KVにデータがない場合はメモリストレージを使用
    if (!siteStats) {
      siteStats = memoryStorage
    }
    
    return NextResponse.json({
      totalVisits: siteStats.siteVisits || 1250,
      lastUpdated: siteStats.lastUpdated || new Date().toISOString(),
      source: siteStats === memoryStorage ? 'memory' : 'kv'
    })
  } catch (error) {
    console.error('Error fetching site stats:', error)
    return NextResponse.json({
      totalVisits: memoryStorage.siteVisits,
      lastUpdated: memoryStorage.lastUpdated,
      source: 'fallback'
    })
  }
}

export async function POST() {
  try {
    let currentStats = null
    
    // 現在の統計を取得
    if (isVercelKVAvailable()) {
      currentStats = await getFromKV('site_stats')
    }
    
    if (!currentStats) {
      currentStats = memoryStorage
    }
    
    // アクセス数を増加
    const newStats = {
      siteVisits: (currentStats.siteVisits || 1250) + 1,
      lastUpdated: new Date().toISOString()
    }
    
    // 保存を試行
    let savedToKV = false
    if (isVercelKVAvailable()) {
      savedToKV = await setToKV('site_stats', newStats)
    }
    
    // KVに保存できない場合はメモリストレージを更新
    if (!savedToKV) {
      memoryStorage = newStats
    }
    
    return NextResponse.json({
      totalVisits: newStats.siteVisits,
      lastUpdated: newStats.lastUpdated,
      source: savedToKV ? 'kv' : 'memory'
    })
  } catch (error) {
    console.error('Error updating site stats:', error)
    
    // エラー時もローカルメモリストレージで継続
    memoryStorage.siteVisits += 1
    memoryStorage.lastUpdated = new Date().toISOString()
    
    return NextResponse.json({
      totalVisits: memoryStorage.siteVisits,
      lastUpdated: memoryStorage.lastUpdated,
      source: 'error-fallback'
    })
  }
}