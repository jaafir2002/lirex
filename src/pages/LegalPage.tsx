import { Navigate, useParams } from 'react-router-dom'
import { legalDocs } from '../lib/content/legal'
import { Container, Section } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'

export default function LegalPage() {
  const { slug = '' } = useParams()
  const doc = legalDocs.find((d) => d.slug === slug)

  if (!doc) return <Navigate to="/" replace />

  return (
    <Section className="pt-32 sm:pt-36">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="mb-3 font-mono text-[11px] tracking-[0.18em] text-accent uppercase">LEGAL</p>
          <h1 className="text-3xl text-foreground sm:text-4xl lg:text-5xl">{doc.title}</h1>
          <p className="mt-3 text-sm text-muted">{doc.updated}</p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {doc.sections.map((section) => (
            <Reveal key={section.heading}>
              <h2 className="mb-3 text-xl text-foreground sm:text-2xl">{section.heading}</h2>
              <p className="text-[15px] leading-relaxed text-muted sm:text-base">{section.body}</p>
              {section.bullets ? (
                <ul className="mt-4 space-y-2.5">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-foreground-dim">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
