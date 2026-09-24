import type { MouseEventHandler, ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

type ButtonProps = {
  children: ReactNode
  href?: string
  to?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  showArrow?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
  'aria-label'?: string
}

const base =
  'group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium cursor-pointer select-none transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none'

const variants = {
  primary:
    'bg-accent text-[#1a1410] shadow-[0_10px_30px_-12px_rgba(232,180,160,0.55)] hover:bg-accent-strong hover:shadow-[0_14px_36px_-12px_rgba(232,180,160,0.65)]',
  secondary:
    'bg-surface text-foreground border border-border hover:border-accent/40 hover:bg-surface-deep hover:shadow-card',
  ghost: 'text-foreground-dim hover:text-foreground hover:bg-white/5',
  outline: 'border border-accent/40 text-accent hover:bg-accent-soft',
  accent: 'bg-foreground text-background hover:bg-foreground-dim',
}

const sizes = {
  sm: 'h-9 px-4 text-sm min-h-9',
  md: 'h-11 px-5 text-sm min-h-11',
  lg: 'h-12 px-7 text-[15px] min-h-12',
}

export function Button({
  children,
  href,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  showArrow = false,
  onClick,
  ...rest
}: ButtonProps) {
  const navigate = useNavigate()
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  const arrow = showArrow ? (
    <ArrowRight
      className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
      aria-hidden="true"
    />
  ) : null

  if (to?.startsWith('http')) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={classes} aria-label={rest['aria-label']}>
        {children}
        {arrow}
      </a>
    )
  }

  if (to) {
    return (
      <button
        type="button"
        className={classes}
        aria-label={rest['aria-label']}
        onClick={(event) => {
          onClick?.(event)
          event.preventDefault()
          navigate(to)
        }}
      >
        {children}
        {arrow}
      </button>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
        aria-label={rest['aria-label']}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
      >
        {children}
        {arrow}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={rest['aria-label']}>
      {children}
      {arrow}
    </button>
  )
}

export function TextLink({
  to,
  children,
  className = '',
}: {
  to: string
  children: ReactNode
  className?: string
}) {
  const external = to.startsWith('http')
  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}
