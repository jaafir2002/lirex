import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  titleClassName = '',
}: SectionHeadingProps) {
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <Reveal className={`flex flex-col gap-4 ${alignCls} ${className}`}>
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`max-w-3xl text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`max-w-2xl text-base leading-relaxed text-muted sm:text-lg ${align === 'center' ? 'text-pretty' : ''}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
