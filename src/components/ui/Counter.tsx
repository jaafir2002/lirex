import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

type CounterProps = {
  value: number
  decimals?: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  animate?: boolean
}

export function Counter({
  value,
  decimals = 0,
  suffix = '',
  prefix = '',
  duration = 1400,
  className = '',
  animate = true,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(animate ? 0 : value)

  useEffect(() => {
    if (!animate || reduce) {
      setDisplay(value)
      return
    }
    if (!inView) return

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(value * eased)
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration, animate, reduce])

  const formatted = display.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
