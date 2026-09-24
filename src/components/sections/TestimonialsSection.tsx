import { useRef } from 'react'
import { testimonials } from '../../lib/content/services'
import { Container, Section } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function TestimonialsSection() {
  const railRef = useRef<HTMLDivElement>(null)

  return (
    <Section id="testimonials" className="overflow-hidden border-t border-border">
      <Container>
        <SectionHeading
          eyebrow="WHAT CLIENTS SAY"
          title="Don’t take our word for it."
          description="Founders and operators who've had Lirex inside their business, in their own words."
          align="center"
        />
      </Container>

      <div
        ref={railRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:gap-5 sm:px-8 lg:justify-center lg:overflow-visible lg:px-10"
      >
        {testimonials.map((t, i) => (
          <figure
            key={`${t.name}-${i}`}
            className="w-[min(85vw,360px)] shrink-0 snap-center rounded-2xl border border-border bg-surface/55 p-6 sm:w-[380px] sm:p-7"
          >
            <div className="mb-5 flex gap-1 text-accent" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, s) => (
                <span key={s} className="text-sm">
                  ★
                </span>
              ))}
            </div>
            <blockquote className="mb-6 text-[15px] leading-relaxed text-foreground-dim sm:text-base">
              “{t.quote}”
            </blockquote>
            <figcaption>
              <p className="text-sm font-medium text-foreground">{t.name}</p>
              <p className="mt-1 text-xs text-muted">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
