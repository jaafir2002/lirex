import { Container, Section } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Stagger, StaggerItem } from '../ui/Reveal'

const tools = [
  'HubSpot',
  'Salesforce',
  'Slack',
  'Notion',
  'Airtable',
  'Stripe',
  'Zendesk',
  'Linear',
  'Google',
  'Shopify',
  'Intercom',
  'Calendly',
  'Asana',
  'Jira',
  'Twilio',
  'Stripe API',
  'Webhooks',
  'OpenAI',
  'Make',
  'n8n',
]

export function IntegrationsSection() {
  return (
    <Section id="integrations" className="border-t border-border">
      <Container>
        <SectionHeading
          eyebrow="YOUR STACK, CONNECTED"
          title="Works with your stack"
          description="No rip-and-replace. Lirex builds on the tools you already use HubSpot, Salesforce, Slack, and 200+ others — with custom connections for everything else."
          align="center"
        />

        <Stagger
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          stagger={0.04}
        >
          {tools.map((t, i) => (
            <StaggerItem key={t} y={12}>
              <div
                className={`flex h-16 items-center justify-center rounded-xl border border-border bg-surface/50 px-3 text-center text-xs font-medium text-foreground-dim transition-all duration-300 hover:border-accent/40 hover:text-accent sm:h-[72px] sm:text-sm ${
                  i % 5 === 0 ? 'sm:col-span-1' : ''
                }`}
              >
                {t}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
