import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { caseStudies } from '../lib/content/cases'
import { Container, Section } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Stagger, StaggerItem } from '../components/ui/Reveal'
import { FinalCTA } from '../components/sections/FinalCTA'
import { DotArrowIcon } from '../components/ui/Icons'

const filters = ['All', 'SaaS', 'E-commerce', 'Agencies', 'Professional Services', 'Healthcare'] as const

export default function CaseStudyIndex() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')

  const items = useMemo(() => {
    if (filter === 'All') return caseStudies
    return caseStudies.filter((c) => c.category === filter)
  }, [filter])

  return (
    <>
      <Section className="pt-32 sm:pt-36">
        <Container>
          <SectionHeading
            eyebrow="CASE STUDY"
            title="Real systems. Real results."
            description="A selection of recent client work. Every project below shipped within 60 days — and every result is verified by the client."
          />

          <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter case studies">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
                  filter === f
                    ? 'border-accent/50 bg-accent-soft text-accent'
                    : 'border-border bg-surface/40 text-muted hover:border-accent/30 hover:text-foreground'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <Stagger key={filter} className="mt-10 grid gap-4 md:grid-cols-2 lg:gap-5" stagger={0.08}>
            {items.map((c) => (
              <StaggerItem key={c.slug}>
                <Link
                  to={`/case-study/${c.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-surface/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-float sm:p-7"
                >
                  <p className="mb-2 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                    {c.industry} • {c.service}
                  </p>
                  <h3 className="mb-3 text-xl leading-snug text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                    {c.metric}
                  </h3>
                  <p className="mb-8 flex-1 text-sm leading-relaxed text-muted">{c.result}</p>
                  <span className="inline-flex items-center gap-2 text-sm text-accent">
                    Read case Study
                    <DotArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          {items.length === 0 ? (
            <p className="mt-10 text-center text-muted">No case studies in this category yet.</p>
          ) : null}
        </Container>
      </Section>

      <FinalCTA
        eyebrow="YOUR TURN"
        title="Want to be the next case study?"
        description="We can usually predict your outcome within the first call. Let's see what's possible."
        secondaryLabel="Back to home"
        secondaryTo="/"
      />
    </>
  )
}
