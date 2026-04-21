import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Privly - Protect Your Content. Stop Leaks. Recover Revenue.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 40%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Purple glow orb */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-50px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
          }}
        />
        {/* Pink glow orb */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-30px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            zIndex: 1,
          }}
        >
          {/* Logo text */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 800,
              background: 'linear-gradient(90deg, #a855f7, #ec4899)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-2px',
            }}
          >
            Privly
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#ffffff',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.3,
            }}
          >
            Protect Your Content. Stop Leaks. Recover Revenue.
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '20px',
              color: '#9ca3af',
              textAlign: 'center',
              maxWidth: '600px',
            }}
          >
            Forensic watermarking, automated DMCA takedowns & leak detection for creators
          </div>

          {/* Divider */}
          <div
            style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #a855f7, #ec4899)',
              borderRadius: '2px',
              marginTop: '10px',
            }}
          />

          {/* URL */}
          <div
            style={{
              fontSize: '18px',
              color: '#a855f7',
              fontWeight: 500,
              marginTop: '5px',
            }}
          >
            useprivly.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
