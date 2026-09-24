import { Accordion } from '../ui/Accordion'
import { Container, Section } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import type { AccordionItem } from '../ui/Accordion'

type Props = {
  items: AccordionItem[]
  eyebrow?: string
  title?: string
  description?: string
  id?: string
}

export function FAQSection({
  items,
  eyebrow = 'COMMON QUESTIONS',
  title = 'Questions you might be asking.',
  description,
  id = 'faq',
}: Props) {
  return (
    <Section id={id} className="border-t border-border">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          <div>
            <Accordion items={items} />
          </div>
        </div>
      </Container>
    </Section>
  )
}
