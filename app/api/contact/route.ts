/**
 * Contact form API - forwards to main app API
 */

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Forward to main app API
    const mainAppUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.useprivly.com'
    const response = await fetch(`${mainAppUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new Error('Failed to send contact form')
    }

    const data = await response.json()
    return NextResponse.json(data)

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
