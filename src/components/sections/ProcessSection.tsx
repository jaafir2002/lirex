import { processSteps } from '../../lib/content/services'
import { Container, Section } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { ProcessTimeline } from '../decorative/ProcessTimeline'

export function ProcessSection() {
  return (
    <Section id="process" className="border-t border-border">
      <Container>
        <SectionHeading
          eyebrow="OUR PROCESS"
          title="Live in 30 days"
          description="A clear, four-step path from your first audit to AI running in production with no surprises in between."
          align="center"
        />

        <div className="mt-14 lg:mt-16">
          <ProcessTimeline steps={processSteps} />
        </div>
      </Container>
    </Section>
  )
}
