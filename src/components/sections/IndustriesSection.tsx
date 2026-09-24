import { industries } from '../../lib/content/services'
import { Container, Section } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal, Stagger, StaggerItem } from '../ui/Reveal'

export function IndustriesSection() {
  return (
    <Section className="border-t border-border">
      <Container>
        <SectionHeading
          eyebrow="INDUSTRIES WE SERVE"
          title="Built for your industry"
          description="Finance, healthcare, e-commerce, SaaS, and professional services where automation delivers the highest return."
        />

        <Stagger className="mt-12 divide-y divide-border border-y border-border" stagger={0.06}>
          {industries.map((ind) => (
            <StaggerItem key={ind.index} y={12}>
              <div className="group grid gap-3 py-6 transition-colors hover:bg-white/[0.02] sm:grid-cols-[80px_1fr_1.2fr] sm:items-center sm:gap-6 sm:px-2">
                <span className="font-mono text-xs text-accent">{ind.index}</span>
                <h3 className="text-lg text-foreground transition-colors group-hover:text-accent sm:text-xl">
                  {ind.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{ind.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-8" delay={0.1}>
          <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
            ✦ Match your situation to a service on the Service page
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}
