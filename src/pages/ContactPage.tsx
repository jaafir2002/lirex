import { useState } from 'react'
import { brand } from '../lib/content/site'
import { contactFaqs } from '../lib/content/services'
import { Button } from '../components/ui/Button'
import { Container, Section } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal, Stagger, StaggerItem } from '../components/ui/Reveal'
import { FAQSection } from '../components/sections/FAQSection'
import { LogoTicker } from '../components/decorative/LogoTicker'
import { DottedBackground } from '../components/decorative/DottedBackground'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Section className="relative overflow-hidden pt-32 sm:pt-36">
        <DottedBackground className="text-accent/45" density="sparse" opacity={0.35} />
        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div>
              <SectionHeading
                eyebrow="GET IN TOUCH"
                title="Let's see what's possible."
                description="Book a free 30-minute call. We'll both know within the hour."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={brand.calendar} size="lg" showArrow>
                  Book a Call
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted">
                Calls are with Alex Martin. No SDRs, no qualification reps.
              </p>

              <div className="mt-10 border-t border-border pt-8">
                <p className="mb-5 text-sm text-muted">
                  Trusted by 80+ founders, ops leaders, and growth teams.
                </p>
                <LogoTicker />
              </div>
            </div>

            <Reveal className="rounded-3xl border border-border bg-surface/55 p-6 sm:p-8">
              <h2 className="mb-2 text-xl text-foreground">Tell us a bit about your project.</h2>
              <p className="mb-6 text-sm text-muted">
                We respond within 1 business day. No automated sequences, no sales drip — just a
                real reply from a real person.
              </p>

              {submitted ? (
                <div className="rounded-2xl border border-accent/35 bg-accent-soft p-6 text-center">
                  <p className="font-medium text-foreground">Thanks — we received your note.</p>
                  <p className="mt-2 text-sm text-muted">We&apos;ll reply within one business day.</p>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs text-muted">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted focus:border-accent/50 focus:outline-none"
                        placeholder="Alex Rivera"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs text-muted">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted focus:border-accent/50 focus:outline-none"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-xs text-muted">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted focus:border-accent/50 focus:outline-none"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs text-muted">
                      What are you trying to automate?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent/50 focus:outline-none"
                      placeholder="Lead routing, support triage, reporting…"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" showArrow>
                    Send message
                  </Button>
                </form>
              )}
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-4 sm:grid-cols-3" stagger={0.08}>
            {[
              { label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
              { label: 'Office', value: brand.address },
              { label: 'Press & Partnerships', value: brand.pressEmail, href: `mailto:${brand.pressEmail}` },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="h-full rounded-2xl border border-border bg-surface/45 p-5">
                  <p className="mb-2 font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-foreground-dim transition-colors hover:text-accent"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground-dim">{item.value}</p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <FAQSection
        items={contactFaqs}
        eyebrow="COMMON QUESTIONS"
        title="Questions you might be asking."
        description="Common questions, answered."
        id="faq"
      />
    </>
  )
}
