import { Heart } from './Icons'

export default function LogoHeart({ size = 36 }: { size?: number }) {
  return (
    <div
      className="heartbeat"
      style={{
        width: size,
        height: size,
        borderRadius: 12,
        background: 'linear-gradient(135deg, var(--accent), var(--hot))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        boxShadow: '0 8px 18px -4px rgba(147, 51, 234, 0.5)',
      }}
    >
      <Heart size={size * 0.44} color="white" />
    </div>
  )
}
