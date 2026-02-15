import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send via Resend API
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'Privly Contact Form <noreply@useprivly.com>',
          to: ['hello@useprivly.com'],
          reply_to: email,
          subject: `[Privly Contact] ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br />')}</p>
          `,
        }),
      })

      if (!res.ok) {
        const error = await res.text()
        console.error('Resend API error:', error)
        return NextResponse.json(
          { error: 'Failed to send message. Please try again.' },
          { status: 500 }
        )
      }
    } else {
      // Fallback: log to console if no Resend key configured
      console.log('Contact form submission (no RESEND_API_KEY configured):')
      console.log({ name, email, subject, message })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
