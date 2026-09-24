import { homeServices } from '../../lib/content/services'
import { Button } from '../ui/Button'
import { Container, Section } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Stagger, StaggerItem } from '../ui/Reveal'

export function ServicesSection() {
  return (
    <Section id="services" className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="SERVICES"
            title="What we build for you."
            description="Four service categories. Start with what's costing you the most."
            className="flex-1"
          />
          <Button to="/service" variant="secondary" size="md" className="self-start sm:self-auto">
            Learn More
          </Button>
        </div>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5" stagger={0.08}>
          {homeServices.map((s, i) => (
            <StaggerItem key={s.title}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-float sm:p-7">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <span className="size-2 rounded-full bg-accent/40 transition-transform duration-300 group-hover:scale-125 group-hover:bg-accent" />
                </div>
                <h3 className="mb-3 text-xl text-foreground">{s.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">{s.body}</p>
                <p className="border-t border-border pt-4 text-sm text-accent">{s.outcome}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
