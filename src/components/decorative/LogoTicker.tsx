const marks = [
  { id: 'wordmark', label: 'NEXUS' },
  { id: 'ring', label: 'ORBIT' },
  { id: 'chart', label: 'PULSE' },
  { id: 'diamond', label: 'VERTEX' },
  { id: 'wave', label: 'FLUX' },
  { id: 'hex', label: 'HELIX' },
]

function LogoMark({ id }: { id: string }) {
  if (id === 'wordmark') {
    return (
      <svg viewBox="0 0 120 24" className="h-5 w-[110px]" aria-hidden="true">
        <text
          x="0"
          y="17"
          fill="currentColor"
          fontFamily="Inter Display, Inter, sans-serif"
          fontSize="15"
          fontWeight="600"
          letterSpacing="0.12em"
        >
          NEXUS
        </text>
      </svg>
    )
  }
  if (id === 'ring') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    )
  }
  if (id === 'chart') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M4 18V10M10 18V6M16 18v-5M22 18V8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  if (id === 'diamond') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M12 3 21 12 12 21 3 12 12 3Z" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }
  if (id === 'wave') {
    return (
      <svg viewBox="0 0 40 24" className="h-5 w-10" aria-hidden="true">
        <path
          d="M2 14c4-8 8-8 12 0s8 8 12 0 8-8 12 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 2 20 7v10l-8 5-8-5V7l8-5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LogoTicker({ className = '' }: { className?: string }) {
  const row = [...marks, ...marks]

  return (
    <div className={`relative overflow-hidden ${className}`} aria-label="Trusted logos">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-[ticker_28s_linear_infinite] gap-10 text-foreground-dim/55">
        {row.map((m, i) => (
          <span key={`${m.id}-${i}`} className="flex shrink-0 items-center gap-2.5">
            <LogoMark id={m.id} />
            <span className="font-display text-sm font-semibold tracking-[0.14em] uppercase">
              {m.label}
            </span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
