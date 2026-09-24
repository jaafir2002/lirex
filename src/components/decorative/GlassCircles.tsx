import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  className?: string
}

export function GlassCircles({ className = '' }: Props) {
  const reduce = useReducedMotion()

  const float = reduce
    ? {}
    : {
        animate: { y: [0, -16, 0], rotate: [0, 4, 0] },
        transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' as const },
      }

  const floatAlt = reduce
    ? {}
    : {
        animate: { y: [0, 14, 0], rotate: [0, -6, 0] },
        transition: { duration: 12, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.6 },
      }

  const spin = reduce
    ? {}
    : {
        animate: { rotate: 360 },
        transition: { duration: 40, repeat: Infinity, ease: 'linear' as const },
      }

  return (
    <div className={`relative h-full w-full ${className}`} aria-hidden="true">
      {/* Outer metal ring */}
      <motion.div
        className="absolute top-[8%] right-[6%] aspect-square w-[78%] max-w-[420px]"
        {...spin}
      >
        <div className="metal-ring h-full w-full rounded-full opacity-70" />
      </motion.div>

      {/* Large glass sphere */}
      <motion.div
        className="absolute top-[14%] right-[14%] aspect-square w-[62%] max-w-[340px]"
        {...float}
      >
        <div className="glass-sphere h-full w-full rounded-full" />
        <div className="absolute inset-[18%] rounded-full bg-gradient-to-br from-white/25 via-transparent to-accent/20 blur-[2px]" />
      </motion.div>

      {/* Medium sphere */}
      <motion.div
        className="absolute right-[48%] bottom-[18%] aspect-square w-[34%] max-w-[180px]"
        {...floatAlt}
      >
        <div className="glass-sphere h-full w-full rounded-full" />
      </motion.div>

      {/* Small accent sphere */}
      <motion.div
        className="absolute top-[52%] right-[8%] aspect-square w-[18%] max-w-[96px]"
        {...float}
      >
        <div className="h-full w-full rounded-full border border-accent/40 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.55),rgba(232,180,160,0.35)_45%,rgba(14,11,10,0.5))] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)]" />
      </motion.div>

      {/* Tiny specular dot */}
      <div className="absolute top-[28%] right-[28%] size-3 rounded-full bg-white/70 blur-[1px]" />
    </div>
  )
}
