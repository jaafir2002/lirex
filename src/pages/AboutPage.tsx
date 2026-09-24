import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { aboutStats, team, values } from '../lib/content/about'
import { Container, Section } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Stagger, StaggerItem, Reveal } from '../components/ui/Reveal'
import { Counter } from '../components/ui/Counter'
import { FinalCTA } from '../components/sections/FinalCTA'
import { DottedBackground } from '../components/decorative/DottedBackground'
import { easeOut } from '../lib/motion'

function AnimatedWords({
  text,
  className = '',
  delay = 0.1,
  step = 0.07,
  as: Tag = 'span',
}: {
  text: string
  className?: string
  delay?: number
  step?: number
  as?: 'span' | 'h1' | 'h2'
}) {
  const reduce = useReducedMotion()
  const words = text.split(' ')

  if (reduce) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block will-change-transform"
          initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: easeOut, delay: delay + i * step }}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </Tag>
  )
}

function FloatingOrb({
  className,
  duration = 9,
  alt = false,
}: {
  className: string
  duration?: number
  alt?: boolean
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={`pointer-events-none absolute ${className}`} aria-hidden="true" />

  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      aria-hidden="true"
      animate={{ y: alt ? [0, 16, 0] : [0, -18, 0], rotate: alt ? [0, -6, 0] : [0, 8, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export default function AboutPage() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const dotY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-32 sm:pt-36">
        <motion.div style={reduce ? undefined : { y: dotY }} className="absolute inset-0">
          <DottedBackground className="text-accent/50" density="sparse" opacity={0.4} pulse />
        </motion.div>

        <FloatingOrb className="glass-sphere top-24 right-[8%] size-24 opacity-40 sm:size-32" duration={10} />
        <FloatingOrb className="metal-ring bottom-16 left-[6%] size-16 opacity-50 sm:size-24" duration={12} alt />
        <FloatingOrb
          className="glass-sphere top-1/2 right-[18%] hidden size-10 opacity-30 lg:block"
          duration={8}
          alt
        />

        <Container className="relative z-10">
          <div className="flex flex-col items-start gap-5">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1.5 font-mono text-[11px] tracking-[0.18em] text-accent uppercase"
              initial={reduce ? false : { opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              <motion.span
                className="size-1.5 rounded-full bg-accent"
                animate={reduce ? undefined : { opacity: [1, 0.35, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              ABOUT LIREX
            </motion.span>

            <AnimatedWords
              as="h1"
              text="The team behind Lirex."
              className="max-w-3xl text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl"
              delay={0.2}
              step={0.08}
            />

            <motion.div
              className="h-px w-24 origin-left bg-gradient-to-r from-accent/70 to-transparent"
              initial={reduce ? false : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: easeOut, delay: 0.55 }}
            />

            <motion.p
              className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.65 }}
            >
              Founded in 2023 by operators tired of watching great people burn out on busywork.
              Now we build AI for 80+ growing companies.
            </motion.p>

            <motion.div
              className="mt-2 flex flex-wrap gap-3"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easeOut, delay: 0.85 }}
            >
              <a
                href="#story"
                className="group/hero inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground transition-all duration-300 hover:border-accent/40 hover:bg-surface-deep"
              >
                Our story
                <span className="transition-transform duration-300 group-hover/hero:translate-y-0.5">↓</span>
              </a>
              <a
                href="#team"
                className="group/hero inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-sm text-muted transition-colors duration-300 hover:text-foreground"
              >
                Meet the team
                <span className="transition-transform duration-300 group-hover/hero:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Story */}
      <Section id="story" className="border-t border-border">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading eyebrow="OUR STORY" title="Built by operators, not theorists." />
            </div>

            <div className="space-y-5 text-[15px] leading-relaxed text-muted sm:text-base">
              {[
                'We started Lirex after years inside fast-growing companies — running sales ops, leading customer success, scaling marketing teams. We saw the same pattern everywhere: smart people doing repetitive work, because their tools couldn’t talk to each other and AI felt too complicated to deploy.',
                'So we built what we wished we’d had. A small team that could walk into a business, audit the chaos, and ship AI systems that actually worked — without the six-month enterprise engagement.',
                'Three years later, we’ve automated millions of tasks for companies that now move faster with smaller teams. That’s the work. That’s why we’re here.',
              ].map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.1} y={28}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15} y={36}>
            <blockquote className="group/quote relative mt-14 overflow-hidden rounded-2xl border border-border bg-surface/50 p-7 transition-colors duration-500 hover:border-accent/30 sm:p-10">
              <div
                className="pointer-events-none absolute -top-6 -left-2 font-display text-[140px] leading-none text-accent/10 transition-transform duration-700 group-hover/quote:-translate-y-2 sm:text-[180px]"
                aria-hidden="true"
              >
                “
              </div>
              <div className="relative">
                <p className="font-display text-xl leading-snug text-foreground sm:text-2xl lg:text-3xl">
                  “We believe AI shouldn&apos;t replace your team, it should give them their time back.
                  Our job is to build the systems that make that real.”
                </p>
                <footer className="mt-5 flex items-center gap-3 font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                  <span className="h-px w-8 bg-accent/50 transition-all duration-500 group-hover/quote:w-14" />
                  Alex Martin — Founder
                </footer>
              </div>
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 transition-opacity duration-700 group-hover/quote:opacity-100"
                aria-hidden="true"
              />
            </blockquote>
          </Reveal>
        </Container>
      </Section>

      {/* Values */}
      <Section className="border-t border-border">
        <Container>
          <SectionHeading eyebrow="WHAT WE BELIEVE" title="What we never compromise on." />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5" stagger={0.1}>
            {values.map((v, i) => (
              <StaggerItem key={v.title} y={28}>
                <article className="group/value relative h-full overflow-hidden rounded-2xl border border-border bg-surface/50 p-6 transition-all duration-400 hover:-translate-y-1 hover:border-accent/40 hover:shadow-float sm:p-7">
                  <div
                    className="pointer-events-none absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover/value:opacity-100"
                    aria-hidden="true"
                  />
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-mono text-xs text-accent transition-transform duration-300 group-hover/value:scale-110">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="size-8 rounded-full border border-accent/20 bg-accent-soft opacity-0 transition-all duration-400 group-hover/value:opacity-100"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-3 text-xl text-foreground transition-colors duration-300 group-hover/value:text-accent">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{v.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Team */}
      <Section id="team" className="border-t border-border">
        <Container>
          <SectionHeading
            eyebrow="THE TEAM"
            title="Small team. Senior operators."
            description="You won't get handed off to a junior account manager. The people who scope your project build it."
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" stagger={0.08}>
            {team.map((m) => (
              <StaggerItem key={m.name} y={32}>
                <article className="group/member h-full rounded-2xl border border-border bg-surface/50 p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-float">
                  <motion.div
                    className="mb-5 flex size-14 items-center justify-center rounded-full border border-accent/30 bg-accent-soft font-display text-lg font-semibold text-accent"
                    whileHover={reduce ? undefined : { scale: 1.08, rotate: -6 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                  >
                    {m.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </motion.div>
                  <h3 className="text-lg text-foreground">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted transition-colors duration-300 group-hover/member:text-foreground-dim">
                    {m.role}
                  </p>
                  <div
                    className="mt-4 h-0.5 w-8 origin-left rounded-full bg-accent/40 transition-all duration-400 group-hover/member:w-16 group-hover/member:bg-accent"
                    aria-hidden="true"
                  />
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Stats */}
      <Section className="border-t border-border py-12 sm:py-16">
        <Container>
          <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6" stagger={0.1}>
            {aboutStats.map((s) => (
              <StaggerItem key={s.label} y={24}>
                <div className="group/stat relative overflow-hidden rounded-2xl border border-border bg-surface/40 px-4 py-7 text-center transition-all duration-400 hover:border-accent/35 hover:bg-surface/60">
                  <div
                    className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-accent to-transparent transition-transform duration-500 group-hover/stat:scale-x-100"
                    aria-hidden="true"
                  />
                  <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-xs text-muted">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <FinalCTA
        eyebrow="WORK WITH US"
        title="Want to see if we're a fit?"
        description="A 30-minute call usually makes it obvious. Bring your messiest workflow."
        secondaryLabel="See Our Work"
        secondaryTo="/service"
      />
    </>
  )
}
