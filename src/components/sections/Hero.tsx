import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { GlassCircles } from '../decorative/GlassCircles'
import { DottedBackground } from '../decorative/DottedBackground'
import { LogoTicker } from '../decorative/LogoTicker'
import { Pill } from '../ui/Pill'
import { easeOut } from '../../lib/motion'
import { brand } from '../../lib/content/site'

export function Hero() {
  const reduce = useReducedMotion()

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: easeOut, delay },
        }

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24" id="header">
      <DottedBackground className="text-accent/60" density="normal" opacity={0.5} />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(232,180,160,0.1),transparent_50%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="max-w-xl">
            <motion.div {...rise(0.05)}>
              <Pill>{brand.tagline}</Pill>
            </motion.div>

            <motion.h1
              className="mt-6 text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl xl:text-[68px]"
              {...rise(0.12)}
            >
              Automation built for growth.
            </motion.h1>

            <motion.p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg" {...rise(0.2)}>
              We build AI systems that handle the repetitive work so your team can focus on what only
              humans can do.
            </motion.p>

            <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" {...rise(0.28)}>
              <Button to="/contact" size="lg" className="w-full sm:w-auto" showArrow>
                Get Your Free AI Audit
              </Button>
              <Button to="/service" variant="secondary" size="lg" className="w-full sm:w-auto">
                See How It Works
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="relative mx-auto h-[320px] w-full max-w-[480px] sm:h-[400px] lg:h-[480px] lg:max-w-none"
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.2 }}
          >
            <GlassCircles />
          </motion.div>
        </div>

        <motion.div
          className="mt-14 border-t border-border pt-8"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.45 }}
        >
          <p className="mb-5 text-center text-sm text-muted">
            Trusted by 80+ founders, ops leaders, and growth teams.
          </p>
          <LogoTicker />
        </motion.div>
      </Container>
    </section>
  )
}
