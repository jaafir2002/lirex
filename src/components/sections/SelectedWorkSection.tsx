import { Link } from 'react-router-dom'
import { caseStudies } from '../../lib/content/cases'
import { Button } from '../ui/Button'
import { Container, Section } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Stagger, StaggerItem } from '../ui/Reveal'
import { DotArrowIcon } from '../ui/Icons'

export function SelectedWorkSection({ limit = 3 }: { limit?: number }) {
  const items = caseStudies.slice(0, limit)

  return (
    <Section id="selected-work" className="border-t border-border">
      <Container>
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Real systems. Real results."
          description="A selection of recent client work. Every project shipped within 60 days."
        />

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3 lg:gap-5" stagger={0.1}>
          {items.map((c) => (
            <StaggerItem key={c.slug}>
              <Link
                to={`/case-study/${c.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-float sm:p-7"
              >
                <p className="mb-2 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                  {c.industry} • {c.service}
                </p>
                <h3 className="mb-4 text-xl leading-snug text-foreground transition-colors group-hover:text-accent sm:text-2xl">
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

        <div className="mt-10 flex justify-center">
          <Button to="/case-study" variant="secondary" size="lg">
            View all Case Studies
          </Button>
        </div>
      </Container>
    </Section>
  )
}
