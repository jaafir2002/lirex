import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Container, Section } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { PixelWave } from '../decorative/Ornaments'
import { DottedBackground } from '../decorative/DottedBackground'
import { easeOut } from '../../lib/motion'

type Props = {
  eyebrow?: string
  title?: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export function FinalCTA({
  eyebrow = 'READY TO START?',
  title = 'Get 20 hours back.',
  description = 'Book a free 30-minute audit. No pitch, No pressure.',
  primaryLabel = 'Get Your Free AI Audit',
  primaryTo = '/contact',
  secondaryLabel = 'See Pricing',
  secondaryTo = '/#engagement',
}: Props) {
  const reduce = useReducedMotion()

  return (
    <Section className="overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,180,160,0.12),transparent_55%)]"
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1, ease: easeOut }}
      />
      <DottedBackground className="text-accent/70" density="dense" opacity={0.55} />
      <PixelWave className="opacity-60" />

      <Container className="relative z-10">
        <motion.div
          className="relative mx-auto max-w-3xl rounded-[28px] border border-border bg-surface-deep/70 px-6 py-14 text-center backdrop-blur-sm sm:px-10 sm:py-16"
          initial={reduce ? false : { opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <SectionHeading
            align="center"
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          <motion.div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.2 }}
          >
            <Button to={primaryTo} size="lg" className="w-full sm:w-auto" showArrow>
              {primaryLabel}
            </Button>
            <Button to={secondaryTo} variant="secondary" size="lg" className="w-full sm:w-auto">
              {secondaryLabel}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
