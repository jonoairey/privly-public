export function Heart({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3 4 0 5.5 4 4 7-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  )
}

export function Sparkle({
  size = 16,
  color = 'currentColor',
  className = '',
  style = {},
}: {
  size?: number
  color?: string
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2l1.5 7L20 10.5 13.5 12 12 19l-1.5-7L4 10.5 10.5 9z" />
    </svg>
  )
}

export function Star({ size = 20, color = 'currentColor', className = '' }: { size?: number; color?: string; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2l2 7.5L22 12l-8 2.5L12 22l-2-7.5L2 12l8-2.5z" />
    </svg>
  )
}

export function Shield({
  size = 16,
  color = 'currentColor',
  className = '',
  style = {},
}: {
  size?: number
  color?: string
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2 L20 5 C20 5 20 12 20 14 C20 18 16 20.5 12 22 C8 20.5 4 18 4 14 C4 12 4 5 4 5 Z" />
    </svg>
  )
}

export function Check({
  size = 16,
  color = 'currentColor',
  className = '',
  style = {},
}: {
  size?: number
  color?: string
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 12.5 L10 17 L19 7" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Arrow({ w = 90, h = 40, color = 'currentColor', className = '' }: { w?: number; h?: number; color?: string; className?: string }) {
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 90 40" fill="none">
      <path d="M 5 30 Q 30 5, 60 18 Q 75 24, 82 10" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 78 4 L 82 10 L 76 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}
