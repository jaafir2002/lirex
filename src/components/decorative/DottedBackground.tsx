import { memo } from 'react'

type Props = {
  className?: string
  density?: 'sparse' | 'normal' | 'dense'
  animate?: boolean
  opacity?: number
  pulse?: boolean
}

function buildDots(density: 'sparse' | 'normal' | 'dense') {
  const cols = density === 'dense' ? 40 : density === 'normal' ? 28 : 18
  const rows = density === 'dense' ? 22 : density === 'normal' ? 16 : 12
  const dots: { x: number; y: number; r: number; o: number }[] = []

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453
      const rnd = n - Math.floor(n)
      if (rnd < 0.28) continue
      const wave = Math.sin((x / cols) * Math.PI * 2.2 + y * 0.35) * 0.5 + 0.5
      dots.push({
        x: (x / (cols - 1)) * 100,
        y: (y / (rows - 1)) * 100,
        r: 0.7 + wave * 1.1,
        o: 0.15 + wave * 0.75,
      })
    }
  }
  return dots
}

export const DottedBackground = memo(function DottedBackground({
  className = '',
  density = 'normal',
  animate = true,
  opacity = 1,
  pulse = false,
}: Props) {
  const dots = buildDots(density)

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className={`h-full w-full ${animate ? 'animate-dot-drift' : ''}`}
      >
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={d.r * 0.12}
            fill="currentColor"
            opacity={d.o}
            className={pulse ? 'animate-dot-pulse' : undefined}
            style={pulse ? { animationDelay: `${(i % 9) * 0.35}s` } : undefined}
          />
        ))}
      </svg>
    </div>
  )
})

export function DotGrid({ className = '', rose = true }: { className?: string; rose?: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${rose ? 'dot-grid' : 'dot-field'} animate-dot-drift opacity-40 ${className}`}
      aria-hidden="true"
    />
  )
}
