import type { ReactNode } from 'react'

export function Pill({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3 py-1.5 font-mono text-[11px] tracking-[0.16em] text-accent uppercase ${className}`}
    >
      <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </span>
  )
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`font-mono text-[11px] tracking-[0.2em] text-accent uppercase ${className}`}
    >
      {children}
    </p>
  )
}
