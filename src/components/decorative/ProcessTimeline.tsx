import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { processSteps } from '../../lib/content/services'

type ProcessStep = (typeof processSteps)[number]

type Props = {
  steps: ProcessStep[]
}

export function ProcessTimeline({ steps }: Props) {
  const ref = useRef<HTMLOListElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 55%'],
  })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <ol ref={ref} className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
      {/* Curved dotted path (desktop) */}
      <svg
        className="pointer-events-none absolute top-[72px] right-[8%] left-[8%] hidden h-24 w-[84%] lg:block"
        viewBox="0 0 1000 100"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 50 C 160 0, 280 100, 420 50 S 700 0, 1000 50"
          stroke="url(#processGrad)"
          strokeWidth="2"
          strokeDasharray="4 8"
          strokeLinecap="round"
          style={reduce ? { pathLength: 1 } : { pathLength }}
        />
        <defs>
          <linearGradient id="processGrad" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e8b4a0" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#e8b4a0" stopOpacity="0.9" />
            <stop offset="1" stopColor="#e8b4a0" stopOpacity="0.25" />
          </linearGradient>
        </defs>
      </svg>

      {/* Vertical dotted path (mobile) */}
      <div
        className="absolute top-6 bottom-6 left-[27px] w-px bg-[repeating-linear-gradient(to_bottom,rgba(232,180,160,0.55)_0_4px,transparent_4px_12px)] lg:hidden"
        aria-hidden="true"
      />

      {steps.map((step, i) => (
        <motion.li
          key={step.id}
          id={step.id}
          className="relative flex gap-4 lg:block lg:pt-0"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
        >
          <div className="relative z-10 flex shrink-0 flex-col items-center lg:mb-6 lg:flex-row lg:items-start">
            <div className="flex size-14 items-center justify-center rounded-full border border-accent/35 bg-surface shadow-[0_0_0_6px_rgba(14,11,10,1),0_0_0_7px_rgba(232,180,160,0.15)]">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
            </div>
          </div>
          <div className="lg:pl-0">
            <p className="mb-2 font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
              {step.step}
            </p>
            <h3 className="mb-2 text-xl text-foreground">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted lg:text-[15px]">{step.body}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  )
}
