export function Logo({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const text =
    size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-base' : 'text-lg'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex size-8 items-center justify-center rounded-[10px] border border-accent/35 bg-surface">
        <svg viewBox="0 0 24 24" className="size-4 text-accent" aria-hidden="true">
          <path
            d="M5 18V6h3.1l4.4 7.1L16.9 6H20v12h-2.7v-7.4L13.4 15h-1.7L7.7 10.6V18H5Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className={`font-logo font-semibold tracking-tight text-foreground ${text}`}>Lirex</span>
    </span>
  )
}
