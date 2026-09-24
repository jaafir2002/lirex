import { Link, Navigate, useParams } from 'react-router-dom'
import { caseStudies, caseStudyDetails } from '../lib/content/cases'
import { Container, Section } from '../components/ui/Container'
import { Reveal, Stagger, StaggerItem } from '../components/ui/Reveal'
import { FinalCTA } from '../components/sections/FinalCTA'
import { DotArrowIcon } from '../components/ui/Icons'

export default function CaseStudyDetail() {
  const { slug = '' } = useParams()
  const detail = caseStudyDetails[slug]

  if (!detail) return <Navigate to="/case-study" replace />

  const related = caseStudies.filter((c) => c.slug !== slug).slice(0, 2)

  return (
    <>
      <Section className="pt-32 sm:pt-36">
        <Container>
          <Reveal>
            <Link
              to="/case-study"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-muted uppercase transition-colors hover:text-accent"
            >
              ← All case studies
            </Link>
            <p className="mb-3 font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
              {detail.industry} • {detail.service}
            </p>
            <h1 className="max-w-3xl text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
              {detail.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {detail.subtitle}
            </p>
          </Reveal>

          <Stagger className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4" stagger={0.07}>
            {detail.stats.map((s) => (
              <StaggerItem key={s.label} y={14}>
                <div className="rounded-2xl border border-border bg-surface/50 px-4 py-5">
                  <p className="font-display text-2xl font-semibold text-accent sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-muted">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-10 rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
            <p className="text-[15px] leading-relaxed text-foreground-dim sm:text-base">
              {detail.context}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                The Problem
              </p>
              <h2 className="mt-3 text-2xl text-foreground sm:text-3xl">
                {detail.problem.heading}
              </h2>
            </div>
            <Reveal>
              <p className="text-[15px] leading-relaxed text-muted sm:text-base">
                {detail.problem.body}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border bg-surface-deep/40">
        <Container>
          <div className="mb-8 flex flex-col gap-3">
            <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
              The Approach
            </p>
            <h2 className="text-2xl text-foreground sm:text-3xl">{detail.approach.heading}</h2>
          </div>
          <Stagger className="grid gap-4 lg:grid-cols-3 lg:gap-5" stagger={0.1}>
            {detail.approach.phases.map((phase) => (
              <StaggerItem key={phase.title}>
                <article className="h-full rounded-2xl border border-border bg-surface/55 p-6">
                  <h3 className="mb-4 text-base text-accent">{phase.title}</h3>
                  <ul className="space-y-2.5">
                    {phase.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-muted">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                The Solution
              </p>
              <h2 className="mt-3 text-2xl text-foreground sm:text-3xl">
                {detail.solution.heading}
              </h2>
            </div>
            <ol className="space-y-4">
              {detail.solution.steps.map((step, i) => (
                <Reveal key={step} y={14} delay={i * 0.04}>
                  <li className="flex gap-4 rounded-xl border border-border bg-surface/40 px-5 py-4">
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground-dim">{step}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                The Results
              </p>
              <h2 className="mt-3 text-2xl text-foreground sm:text-3xl">
                {detail.results.heading}
              </h2>
            </div>
            <div>
              <ul className="space-y-3">
                {detail.results.bullets.map((b) => (
                  <Reveal key={b} y={12}>
                    <li className="flex gap-3 rounded-lg px-1 py-1 text-[15px] text-foreground-dim">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {b}
                    </li>
                  </Reveal>
                ))}
              </ul>
              <Reveal className="mt-8 rounded-2xl border border-accent/25 bg-accent-soft p-6 sm:p-7">
                <blockquote className="text-lg leading-relaxed text-foreground">
                  “{detail.quote.text}”
                </blockquote>
                <p className="mt-4 text-sm text-accent">
                  {detail.quote.name} — {detail.quote.role}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-2xl text-foreground">Related Case Studies</h2>
            <Link
              to="/case-study"
              className="inline-flex items-center gap-2 text-sm text-accent transition-transform hover:translate-x-0.5"
            >
              View all <DotArrowIcon className="size-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {related.map((c) => (
              <Link
                key={c.slug}
                to={`/case-study/${c.slug}`}
                className="group rounded-2xl border border-border bg-surface/50 p-6 transition-all hover:border-accent/35"
              >
                <p className="mb-2 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                  {c.industry} • {c.service}
                </p>
                <h3 className="text-xl text-foreground group-hover:text-accent">{c.metric}</h3>
                <p className="mt-2 text-sm text-muted">{c.result}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA
        eyebrow="WANT RESULTS LIKE THIS?"
        title="Be our next case study."
        description="We can usually predict your outcome on the first call."
        secondaryLabel="See our services"
        secondaryTo="/service"
      />
    </>
  )
}
