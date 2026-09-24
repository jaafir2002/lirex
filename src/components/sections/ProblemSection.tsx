import { problems } from '../../lib/content/services'
import { Container, Section } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Stagger, StaggerItem } from '../ui/Reveal'

export function ProblemSection() {
  return (
    <Section id="hidden" className="border-t border-border">
      <Container>
        <SectionHeading
          eyebrow="THE HIDDEN COST"
          title="Your tools aren’t talking."
          description="Your team isn't slow. Your systems just don't talk to each other and it's costing you every week."
        />

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5" stagger={0.1}>
          {problems.map((p) => (
            <StaggerItem key={p.index}>
              <article className="group relative h-full rounded-2xl border border-border bg-surface/60 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-surface sm:p-7">
                <span className="mb-8 block font-mono text-xs text-accent">{p.index}</span>
                <h3 className="mb-3 text-xl text-foreground">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{p.body}</p>
                <span
                  className="absolute right-6 bottom-6 size-1.5 rounded-full bg-accent/50 transition-transform duration-300 group-hover:scale-150"
                  aria-hidden="true"
                />
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
