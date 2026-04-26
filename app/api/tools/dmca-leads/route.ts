import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/tools/dmca-leads
 *
 * Called when a creator generates a DMCA notice via /tools/dmca-generator.
 *
 * Two side effects:
 *   1. Sends the user a copy of their generated notice via Resend, with a
 *      soft "Try Privly free for 7 days" CTA at the bottom.
 *   2. Sends a notification email to leads@useprivly.com so Jono gets the
 *      lead details (email, infringing domains, marketing-opt-in flag).
 *
 * No Supabase write — keeping this stateless until lead volume justifies a
 * persisted lead-database. Email-as-record works fine in the meantime.
 */

interface DMCALeadBody {
  fullName: string
  email: string
  workDescription: string
  originalContentUrl: string
  infringingUrls: string[]
  platformName: string
  generatedNotice: string
  marketingOptIn?: boolean
}

const NOTIFY_TO = 'hello@useprivly.com'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/** Extract the leak-site domain from the first infringing URL (for analytics). */
function extractDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return 'unknown'
  }
}

/** Brand wrapper matching the plum/Fraunces system used in privly-app email templates. */
function brandedHtml(content: string, preheader: string) {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Your DMCA notice — Privly</title></head>
<body style="margin:0;padding:0;background:#F5F3FF;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1E1246;">
<div style="display:none;max-height:0;overflow:hidden;">${preheader}</div>
<div style="background:#F5F3FF;padding:24px 0;">
  <div style="max-width:640px;margin:0 auto;background:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(30,18,70,0.06);">
    <div style="padding:24px 30px 18px;text-align:center;border-bottom:1px solid #EEEAFF;">
      <img src="https://app.useprivly.com/logo-dark.png" alt="Privly" width="130" style="max-width:130px;height:auto;display:inline-block;" />
    </div>
    <div style="padding:34px 30px;color:#1E1246;">
      ${content}
    </div>
    <div style="background:#F5F3FF;border-top:1px solid #E5E0F5;padding:22px 30px;text-align:center;">
      <p style="font-family:Georgia,'Times New Roman',serif;font-style:italic;color:#4A3D6B;font-size:13px;margin:0;">Made by creators, for creators.</p>
    </div>
  </div>
</div>
</body></html>`
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as DMCALeadBody

    // Validate required fields
    if (!body.email || !body.fullName || !body.generatedNotice) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    if (!isValidEmail(body.email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      // Dev fallback — log only
      console.log('[DMCA leads] (no RESEND_API_KEY) lead:', {
        email: body.email, platform: body.platformName, urls: body.infringingUrls,
      })
      return NextResponse.json({ success: true, dev: true })
    }

    const firstName = body.fullName.split(' ')[0] || 'there'
    const targetDomain = extractDomain(body.infringingUrls?.[0] ?? '')
    const urlsList = (body.infringingUrls || []).filter(Boolean).join('<br/>')

    // ====== 1. User-confirmation email with their DMCA notice ======
    const userBody = `
      <h1 style="font-family:Georgia,'Times New Roman',serif;font-size:26px;font-weight:500;color:#1E1246;margin:0 0 18px;letter-spacing:-0.5px;">
        Your DMCA notice is <span style="color:#7C3AED;font-style:italic;">ready.</span>
      </h1>
      <p style="font-size:15px;color:#1E1246;margin:0 0 14px;">Hey ${firstName},</p>
      <p style="font-size:14px;line-height:1.65;color:#4A3D6B;margin:0 0 20px;">
        Here's the DMCA takedown notice you generated. Save this email for your records — it's a copy of the exact notice you can send to the host, CDN, or platform where your content is being infringed.
      </p>
      <pre style="background:#F5F3FF;border:1px solid #E5E0F5;border-radius:10px;padding:18px 20px;font-family:'SFMono-Regular',Menlo,Monaco,Consolas,monospace;font-size:12px;line-height:1.55;color:#1E1246;white-space:pre-wrap;word-wrap:break-word;margin:0 0 24px;">${body.generatedNotice
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')}</pre>
      <h2 style="font-family:Georgia,'Times New Roman',serif;font-size:18px;color:#1E1246;margin:24px 0 10px;">What to do next</h2>
      <p style="font-size:14px;line-height:1.65;color:#4A3D6B;margin:0 0 8px;"><strong style="color:#7C3AED;">1. Send to the right party.</strong> File this with the host or CDN — not just the leak site itself. A multi-target filing gets actioned 4-5x faster than a single-target one.</p>
      <p style="font-size:14px;line-height:1.65;color:#4A3D6B;margin:0 0 8px;"><strong style="color:#7C3AED;">2. Submit Google de-indexing in parallel.</strong> Even if the leak site ignores your notice, removing the URL from Google search kills most of the discovery path.</p>
      <p style="font-size:14px;line-height:1.65;color:#4A3D6B;margin:0 0 18px;"><strong style="color:#7C3AED;">3. Re-check in 7 days.</strong> Many leak sites re-upload removed content under a new URL. The work isn't done after one notice.</p>
      <div style="background:linear-gradient(135deg,rgba(124,58,237,0.08),rgba(236,72,153,0.05));border:1px solid rgba(124,58,237,0.20);border-radius:12px;padding:24px 22px;margin:24px 0 8px;">
        <p style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-size:18px;color:#1E1246;">Filing one notice is fine. The next one's coming next week.</p>
        <p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:#4A3D6B;">Most creators using this tool file 5-10 takedowns a month. Privly automates the entire workflow — continuous monitoring, multi-target filing, automatic re-filing when content reappears. Same legal compliance, zero hours of your time.</p>
        <a href="https://app.useprivly.com/auth/signup?ref=dmca-tool" style="background:#DB2777;color:#FFFFFF;padding:12px 24px;border-radius:99px;text-decoration:none;font-weight:600;font-size:14px;display:inline-block;">Try Privly free for 7 days</a>
      </div>
      <p style="font-size:13px;line-height:1.6;color:#8B7FA3;margin:18px 0 0;font-style:italic;">
        Questions? Hit reply — real humans on the other end.
      </p>
    `

    const userEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${resendApiKey}` },
      body: JSON.stringify({
        from: 'Privly <noreply@useprivly.com>',
        to: [body.email],
        reply_to: 'support@useprivly.com',
        subject: `Your DMCA notice for ${body.platformName || targetDomain}`,
        html: brandedHtml(userBody, 'Your DMCA takedown notice is ready — saved for your records'),
      }),
    })
    if (!userEmailRes.ok) {
      console.error('[DMCA leads] User email failed:', await userEmailRes.text())
      // Don't fail the request — still record the lead via the team email
    }

    // ====== 2. Lead-notification email to Jono ======
    const teamBody = `
      <h2 style="margin:0 0 12px;font-family:Georgia,serif;color:#1E1246;">New DMCA-tool lead</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;color:#1E1246;">
        <tr><td style="padding:6px 0;color:#8B7FA3;">Name</td><td style="padding:6px 0;">${body.fullName}</td></tr>
        <tr><td style="padding:6px 0;color:#8B7FA3;">Email</td><td style="padding:6px 0;"><a href="mailto:${body.email}" style="color:#7C3AED;">${body.email}</a></td></tr>
        <tr><td style="padding:6px 0;color:#8B7FA3;">Target platform</td><td style="padding:6px 0;">${body.platformName || '—'}</td></tr>
        <tr><td style="padding:6px 0;color:#8B7FA3;">Target domain</td><td style="padding:6px 0;font-family:monospace;">${targetDomain}</td></tr>
        <tr><td style="padding:6px 0;color:#8B7FA3;vertical-align:top;">Infringing URLs</td><td style="padding:6px 0;font-family:monospace;font-size:12px;">${urlsList || '—'}</td></tr>
        <tr><td style="padding:6px 0;color:#8B7FA3;vertical-align:top;">Original work</td><td style="padding:6px 0;">${body.workDescription?.slice(0, 200) || '—'}</td></tr>
        <tr><td style="padding:6px 0;color:#8B7FA3;">Marketing opt-in</td><td style="padding:6px 0;">${body.marketingOptIn ? '✅ Yes' : 'No'}</td></tr>
        <tr><td style="padding:6px 0;color:#8B7FA3;">Generated</td><td style="padding:6px 0;">${new Date().toISOString()}</td></tr>
      </table>
      <p style="margin:18px 0 0;font-size:13px;color:#8B7FA3;">User received their notice via Resend. Reply directly to follow up — they expect human contact.</p>
    `

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${resendApiKey}` },
      body: JSON.stringify({
        from: 'Privly Leads <noreply@useprivly.com>',
        to: [NOTIFY_TO],
        reply_to: body.email,
        subject: `[DMCA tool] ${body.fullName} — ${targetDomain}`,
        html: teamBody,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[DMCA leads] error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
