import { industries, services } from '../lib/content/services'
import { Button } from '../components/ui/Button'
import { Container, Section } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal, Stagger, StaggerItem } from '../components/ui/Reveal'
import { FinalCTA } from '../components/sections/FinalCTA'
import { DottedBackground } from '../components/decorative/DottedBackground'
import { DotArrowIcon } from '../components/ui/Icons'

const matcher = [
  { situation: 'Drowning in manual handoffs between tools', start: 'Workflow Automation' },
  { situation: 'Doing high-volume work that needs judgment', start: 'Custom AI Agents' },
  { situation: 'Trying to grow pipeline without growing headcount', start: 'Lead Generation' },
  { situation: "Not sure what to automate first", start: 'AI Strategy' },
]

export default function ServicePage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-32 sm:pt-36">
        <DottedBackground className="text-accent/50" density="sparse" opacity={0.4} />
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="SERVICE"
            title="Four ways we help."
            description="Every engagement is custom-scoped. Start with what's most painful — we'll expand from there."
          />
        </Container>
      </Section>

      {services.map((service, idx) => (
        <Section
          key={service.id}
          id={service.id}
          className={`border-t border-border ${idx % 2 === 1 ? 'bg-surface-deep/40' : ''}`}
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-14">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <span className="font-mono text-xs text-accent">{service.index}</span>
                <h2 className="mt-3 text-2xl text-foreground sm:text-3xl">{service.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-accent sm:text-lg">
                  {service.heading}
                </p>
                <Button to="/contact" className="mt-6" showArrow>
                  {service.cta}
                </Button>
              </div>

              <Reveal className="space-y-8">
                <p className="text-[15px] leading-relaxed text-muted sm:text-base">
                  {service.summary}
                </p>

                <div>
                  <h3 className="mb-3 font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                    What&apos;s included
                  </h3>
                  <ul className="space-y-2.5">
                    {service.included.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-foreground-dim">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-surface/50 p-5">
                  <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                    Best for
                  </p>
                  <p className="mt-2 text-sm text-foreground-dim">{service.bestFor}</p>
                </div>

                <div>
                  <h3 className="mb-3 font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                    Typical outcomes
                  </h3>
                  <ul className="space-y-2.5">
                    {service.outcomes.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-foreground-dim">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-accent">{service.outcome}</p>
              </Reveal>
            </div>
          </Container>
        </Section>
      ))}

      <Section className="border-t border-border">
        <Container>
          <SectionHeading
            eyebrow="INDUSTRIES WE SERVE"
            title="Built for your industry"
            description="Finance, healthcare, e-commerce, SaaS, and professional services where automation delivers the highest return."
          />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" stagger={0.06}>
            {industries.map((ind) => (
              <StaggerItem key={ind.index}>
                <article className="h-full rounded-2xl border border-border bg-surface/50 p-5 sm:p-6">
                  <span className="font-mono text-xs text-accent">{ind.index}</span>
                  <h3 className="mt-3 text-lg text-foreground">{ind.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{ind.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <SectionHeading
            eyebrow="NOT SURE WHERE TO START?"
            title="Match your situation to the right service."
            align="center"
          />
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface/50">
            {matcher.map((m) => (
              <Reveal key={m.situation} y={12}>
                <div className="grid gap-2 px-5 py-5 sm:grid-cols-2 sm:items-center sm:gap-6 sm:px-7">
                  <p className="text-sm text-muted">
                    <span className="text-accent">✦</span> If you&apos;re… {m.situation}
                  </p>
                  <p className="flex items-center gap-2 text-sm font-medium text-foreground sm:justify-end">
                    Start with <span className="text-accent">{m.start}</span>
                    <DotArrowIcon className="size-4 text-accent" />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA title="Just talk to us." secondaryLabel="See Pricing" secondaryTo="/#engagement" />
    </>
  )
}
