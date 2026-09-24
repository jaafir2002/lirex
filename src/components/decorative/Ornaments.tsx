export function CornerDots({ className = '' }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute size-1.5 rounded-full bg-accent/70 ${className}`}
      aria-hidden="true"
    />
  )
}

export function CardCorners() {
  return (
    <>
      <CornerDots className="top-3 left-3" />
      <CornerDots className="top-3 right-3" />
      <CornerDots className="bottom-3 left-3" />
      <CornerDots className="right-3 bottom-3" />
    </>
  )
}

export function PixelWave({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg className="h-full w-full text-accent/30" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 18 }).map((_, row) =>
          Array.from({ length: 36 }).map((_, col) => {
            const x = col * 22 + 8
            const yBase = 80 + row * 16
            const wave = Math.sin(col * 0.35 + row * 0.4) * 18
            const mask = Math.abs(col - 18) / 18 + Math.abs(row - 9) / 9 > 1.35 ? 0 : 1
            if (!mask) return null
            const o = 0.12 + (1 - Math.abs(col - 18) / 18) * 0.35
            return (
              <circle
                key={`${row}-${col}`}
                cx={x}
                cy={yBase + wave}
                r="1.3"
                fill="currentColor"
                opacity={o}
              />
            )
          }),
        )}
      </svg>
    </div>
  )
}
