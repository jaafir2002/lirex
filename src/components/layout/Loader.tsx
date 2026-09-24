import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { easeOut } from '../../lib/motion'
import { Logo } from '../ui/Logo'

const DURATION = 1800

export function Loader({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion()
  const [percent, setPercent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (reduce) {
      setPercent(100)
      const t = window.setTimeout(() => {
        setVisible(false)
        onDone()
      }, 200)
      return () => clearTimeout(t)
    }

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION)
      const eased = 1 - Math.pow(1 - t, 3)
      setPercent(Math.round(eased * 100))
      if (t < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        window.setTimeout(() => {
          setVisible(false)
          onDone()
        }, 280)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [onDone, reduce])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.55, ease: easeOut }}
          aria-live="polite"
          aria-label="Loading"
        >
          <div className="absolute right-[12%] bottom-[10%] size-40 rounded-full bg-loader-blue/15 blur-3xl" aria-hidden="true" />
          <div className="absolute top-[15%] left-[10%] size-52 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

          <div className="relative mb-10">
            <Logo size="lg" />
          </div>

          <div className="relative h-[3px] w-[200px] overflow-hidden rounded-full bg-surface">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent to-loader-blue"
              style={{ width: `${percent}%` }}
            />
          </div>

          <p className="mt-5 font-mono text-sm text-muted tabular-nums">{percent}%</p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
