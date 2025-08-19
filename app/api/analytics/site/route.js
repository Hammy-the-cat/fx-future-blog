import { NextResponse } from 'next/server'

// メモリ内の単純なカウンター（開発用）
let visitCount = 1250
let lastUpdated = new Date().toISOString()

export async function GET() {
  try {
    console.log('GET request - current count:', visitCount)
    
    return NextResponse.json({
      totalVisits: visitCount,
      lastUpdated: lastUpdated,
      source: 'memory'
    })
  } catch (error) {
    console.error('Error in GET:', error)
    return NextResponse.json({
      totalVisits: 1250,
      lastUpdated: new Date().toISOString(),
      source: 'fallback'
    }, { status: 500 })
  }
}

export async function POST() {
  try {
    visitCount += 1
    lastUpdated = new Date().toISOString()
    
    console.log('POST request - new count:', visitCount)
    
    return NextResponse.json({
      totalVisits: visitCount,
      lastUpdated: lastUpdated,
      source: 'memory'
    })
  } catch (error) {
    console.error('Error in POST:', error)
    return NextResponse.json({
      totalVisits: visitCount,
      lastUpdated: lastUpdated,
      source: 'error'
    }, { status: 500 })
  }
}