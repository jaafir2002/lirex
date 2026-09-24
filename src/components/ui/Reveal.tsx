import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { easeOut, viewportOnce } from '../../lib/motion'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
  as?: 'div' | 'section' | 'li' | 'article' | 'span'
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion()
  const Comp = motion[as] as typeof motion.div

  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={once ? viewportOnce : { once: false }}
      transition={{ duration: 0.55, ease: easeOut, delay }}
    >
      {children}
    </Comp>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
}

export function Stagger({ children, className, stagger = 0.08, delay = 0 }: StaggerProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  y = 20,
}: {
  children: ReactNode
  className?: string
  y?: number
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
      }}
    >
      {children}
    </motion.div>
  )
}
