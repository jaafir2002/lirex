import { Check, Star } from 'lucide-react'
import { pricing } from '../../lib/content/services'
import { Button } from '../ui/Button'
import { Container, Section } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Stagger, StaggerItem } from '../ui/Reveal'

export function PricingSection() {
  return (
    <Section id="engagement" className="border-t border-border">
      <Container>
        <SectionHeading
          eyebrow="ENGAGEMENTS"
          title="Simple, honest pricing."
          description="Start with a Pilot, scale into a build, or embed us as a partner."
          align="center"
        />

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3 lg:gap-5" stagger={0.1}>
          {pricing.map((tier) => (
            <StaggerItem key={tier.id}>
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-6 sm:p-7 ${
                  tier.featured
                    ? 'border-accent/45 bg-gradient-to-b from-accent/[0.08] to-surface/70 shadow-glow'
                    : 'border-border bg-surface/50'
                }`}
              >
                {tier.featured ? (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-[#1a1410]">
                    <Star className="size-3" aria-hidden="true" />
                    Most popular
                  </span>
                ) : null}

                <div className="mb-6 flex items-baseline justify-between gap-3">
                  <h3 className="text-xl text-foreground">{tier.name}</h3>
                  <p className="font-display text-2xl font-semibold text-accent sm:text-3xl">
                    {tier.price}
                  </p>
                </div>
                <p className="mb-2 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                  {tier.cadence}
                </p>
                <p className="mb-6 text-sm leading-relaxed text-muted">{tier.blurb}</p>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground-dim">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  to={tier.id === 'enterprise' ? 'https://cal.com/' : '/contact'}
                  variant={tier.featured ? 'primary' : 'secondary'}
                  size="lg"
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
