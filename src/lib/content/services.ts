export type Service = {
  id: string
  index: string
  title: string
  heading: string
  summary: string
  outcome: string
  included: string[]
  bestFor: string
  outcomes: string[]
  cta: string
}

export const services: Service[] = [
  {
    id: 'workflow',
    index: '01',
    title: 'AI Workflow Automation',
    heading: 'Connect your stack. Eliminate the handoffs.',
    summary:
      "Most companies don't have a tool problem — they have a between-the-tools problem. CRM doesn't talk to billing. Support tickets don't update the customer record. Sales notes never reach onboarding. We fix that.",
    outcome: 'Outcome: Save 20+ hours per week, per team.',
    included: [
      'End-to-end workflow design across your existing tools',
      'Custom integrations (n8n, Make, Zapier, or native API builds)',
      'AI-powered decision logic (routing, prioritizing, summarizing)',
      'Automated reporting and notifications',
      'Error monitoring and fallback handling',
    ],
    bestFor: 'Teams using 5+ tools that should be working as one system.',
    outcomes: [
      '20+ hours per week reclaimed across the team',
      'Response times cut by 80–95%',
      'Zero data falling through the cracks between systems',
    ],
    cta: 'Scope a Workflow Project',
  },
  {
    id: 'agents',
    index: '02',
    title: 'Custom AI Agents',
    heading: 'AI teammates trained on your business.',
    summary:
      'Off-the-shelf AI tools are generic by design. We build custom agents trained on your data, your processes, and your tone — so they handle real work the way your best employee would.',
    outcome: 'Outcome: Scale output without scaling headcount.',
    included: [
      'Custom agent architecture (single-task or multi-step)',
      'Training on your documentation, data, and historical conversations',
      'Multi-channel deployment (web, Slack, email, voice, WhatsApp)',
      'Human-in-the-loop fallbacks for edge cases',
      'Continuous learning and refinement',
    ],
    bestFor: 'Teams with high-volume repetitive work that requires judgment, not just rules.',
    outcomes: [
      '60–80% of tasks handled without human touch',
      '24/7 coverage without hiring',
      'Consistent quality across every interaction',
    ],
    cta: 'Design Your Agent',
  },
  {
    id: 'lead-gen',
    index: '03',
    title: 'Lead Generation & Qualification',
    heading: 'Pipeline on autopilot.',
    summary:
      "The hardest part of outbound isn't sending emails — it's finding the right people, knowing what to say, and following up consistently. We build AI systems that handle all three.",
    outcome: 'Outcome: 3–5x more qualified pipeline.',
    included: [
      'AI-powered lead sourcing and enrichment',
      'Intent and fit scoring',
      'Personalized multi-channel outreach (email, LinkedIn, voice)',
      'Reply handling and meeting booking',
      'CRM sync and reporting',
    ],
    bestFor: 'B2B teams that need predictable pipeline without scaling SDR headcount.',
    outcomes: [
      '3–5x increase in qualified pipeline',
      '70%+ reduction in cost per meeting',
      'SDRs freed up for high-touch closing work',
    ],
    cta: 'Build My Pipeline System',
  },
  {
    id: 'strategy',
    index: '04',
    title: 'AI Strategy & Consulting',
    heading: 'Clarity before you spend a dollar on AI.',
    summary:
      'Most companies waste their first six months on AI by automating the wrong things. We help you skip that. Our strategy engagements give you a clear, prioritized roadmap — grounded in real ROI, not hype.',
    outcome: 'Outcome: Clarity in 2 weeks, not 2 quarters.',
    included: [
      'Full operations and tooling audit',
      'Workflow mapping and bottleneck analysis',
      'ROI-ranked automation opportunity list',
      '12-month implementation roadmap',
      'Build-vs-buy recommendations for each opportunity',
      'Executive readout and team workshop',
    ],
    bestFor: "Leaders who know AI matters but don't know where to start — or where to focus next.",
    outcomes: [
      'Clear answer on the top 3–5 opportunities to automate',
      'Realistic budgets and timelines',
      'Internal alignment on what to do (and what to skip)',
    ],
    cta: 'Book a Strategy Engagement',
  },
]

export const homeServices = [
  {
    title: 'AI Workflow Automation',
    body: 'Connect your stack and let AI handle the handoffs. CRM updates, lead routing, document generation all automated, end-to-end.',
    outcome: 'Save 20+ hours per week, per team.',
  },
  {
    title: 'Custom AI Agents',
    body: 'Purpose-built agents trained on your data — sales SDRs that book meetings, support bots that resolve tickets, research assistants that deliver briefs in minutes.',
    outcome: 'Scale output without scaling headcount.',
  },
  {
    title: 'AI Strategy & Consulting',
    body: "Not sure where to start? We audit your operations, identify the highest-ROI opportunities, and deliver a clear roadmap before we build anything.",
    outcome: 'Clarity in 2 weeks, not 2 quarters.',
  },
  {
    title: 'Lead Generation & Qualification',
    body: 'AI-powered outbound systems that find, enrich, and qualify leads — then deliver hot conversations straight to your calendar.',
    outcome: '3–5x more qualified pipeline.',
  },
]

export const industries = [
  {
    index: '001',
    title: 'Financial Services',
    body: 'Compliance, reporting, client onboarding — automated with the rigor your industry demands.',
  },
  {
    index: '002',
    title: 'Healthcare',
    body: 'HIPAA-aware workflows for intake, scheduling, and patient communication.',
  },
  {
    index: '003',
    title: 'E-commerce & Retail',
    body: 'Support, fulfillment, and personalization systems that scale with your catalog.',
  },
  {
    index: '004',
    title: 'SaaS & Technology',
    body: 'Onboarding, customer success, and growth automation built for product-led teams.',
  },
  {
    index: '005',
    title: 'Professional Services',
    body: 'Proposal generation, client reporting, and knowledge management — built for billable teams.',
  },
]

export const problems = [
  {
    index: '01',
    title: 'Leads go cold',
    body: 'Hours pass while your team manually qualifies inbound — and your best prospects move on.',
  },
  {
    index: '02',
    title: 'Reports take days',
    body: "Reports take days when the data already exists — but lives in five tools that don't talk to each other.",
  },
  {
    index: '03',
    title: 'Customers wait',
    body: 'Support tickets pile up with answers your documentation already contains.',
  },
]

export const processSteps = [
  {
    id: 'discover',
    step: 'Steps 01',
    title: 'Discover',
    body: "We start with a deep audit of your workflows, tools, and bottlenecks. You walk away with a clear map of what to automate first — even if you don't hire us.",
  },
  {
    id: 'design',
    step: 'Steps 02',
    title: 'Design',
    body: 'We architect your automation system: tools, integrations, agent logic, fallback rules. You approve the blueprint before we build.',
  },
  {
    id: 'deploy',
    step: 'Steps 03',
    title: 'Deploy',
    body: 'We build, test, and ship in sprints. You see progress weekly and start seeing results before the project is even complete.',
  },
  {
    id: 'optimize',
    step: 'Steps 04',
    title: 'Optimize',
    body: "Automation isn't set-and-forget. We monitor, refine, and expand your systems as your business evolves.",
  },
]

export const stats = [
  { value: 20, suffix: '+', label: 'hrs', sub: 'Saved per week, per team', animate: true },
  { value: 3.5, suffix: 'x', label: 'Average pipeline growth', decimals: 1, animate: true },
  { value: 94, suffix: '%', label: 'Task accuracy across agents', animate: false },
  { value: 30, suffix: ' days', label: 'Average time-to-launch', animate: true },
]

export const testimonials = [
  {
    quote:
      "They didn't just hand us a tool, they handed us back our week. Our SDR team is closing more deals with half the manual work.",
    name: 'Sarah Chen',
    role: 'Head of Revenue, Northbeam',
  },
  {
    quote:
      'Every workflow they shipped paid for itself within the first month. The clarity alone was worth the engagement.',
    name: 'Marcus Webb',
    role: 'COO, Havelio',
  },
  {
    quote: 'We doubled client capacity without hiring. That is not a slogan — it is our P&L.',
    name: 'Marina',
    role: 'Managing Partner, Fielder & Co.',
  },
  {
    quote: 'They scoped smaller when we tried to overscope. Rare honesty in this industry.',
    name: 'Priya Nair',
    role: 'VP Operations, Brightline',
  },
]

export const pricing = [
  {
    id: 'pilot',
    name: 'Pilot',
    price: '$2500',
    cadence: 'One-time engagement',
    featured: false,
    blurb: 'A 2-week audit with a prioritized roadmap. No commitment to build.',
    features: [
      'Operations audit',
      'ROI-ranked opportunity map',
      '60-minute strategy session',
      'Implementation roadmap',
    ],
    cta: 'Start with a Pilot',
  },
  {
    id: 'scale',
    name: 'Scale',
    price: '$8500',
    cadence: 'Per month',
    featured: true,
    blurb: 'We build and refine your systems in 30-day sprints.',
    features: [
      'Up to 3 workflows or 1 agent',
      'Full integration & testing',
      'Weekly progress reviews',
      'Ongoing optimization',
    ],
    cta: 'Start a Scale Sprint',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'Embedded partnership',
    featured: false,
    blurb: 'A dedicated AI team, embedded and shipping continuously.',
    features: [
      'Dedicated automation engineer',
      'Unlimited workflows',
      'Slack-based support',
      'Quarterly strategy reviews',
    ],
    cta: 'Book a Discovery Call',
  },
]

export const homeFaqs = [
  {
    q: 'Do I need to be technical to work with you?',
    a: 'No. We handle architecture, integrations, and testing. You approve the blueprint and review weekly progress — no engineering background required on your side.',
  },
  {
    q: 'What tools do you work with?',
    a: 'HubSpot, Salesforce, Slack, Notion, Airtable, Stripe, Zendesk, and 200+ others via API. If it has an endpoint, we can usually connect it.',
  },
  {
    q: 'How long until I see results?',
    a: 'Pilot audits deliver a roadmap in 2 weeks. First production workflows typically ship inside 30 days, with measurable results before the build is complete.',
  },
  {
    q: "What if I don't know what to automate yet?",
    a: 'That is exactly what the Pilot is for. We map your operations, rank opportunities by ROI, and tell you what not to automate.',
  },
  {
    q: 'Is my data safe?',
    a: 'Yes. We work under NDA, use least-privilege access, and can deploy inside your cloud or VPC when required. Data never trains public models without written consent.',
  },
  {
    q: 'What if the automation breaks?',
    a: 'Every system ships with monitoring, fallbacks, and alerting. Scale and Enterprise plans include ongoing optimization so issues are caught before your team feels them.',
  },
]

export const contactFaqs = [
  {
    q: 'What size company do you typically work with?',
    a: 'From seed startups with messy ops to 500-person teams. The common thread is repetitive knowledge work across multiple tools.',
  },
  {
    q: 'Do you work with companies outside the US?',
    a: 'Yes. We are remote-first with clients across North America, Europe, and APAC. Calls are scheduled in your timezone.',
  },
  {
    q: "What's the minimum engagement size?",
    a: 'Pilots start at $2,500 one-time. Ongoing builds start at $8,500/month.',
  },
  {
    q: 'How fast can you start?',
    a: 'Most pilots kick off within 1–2 weeks of the first call. Enterprise embeds are scoped on a shared timeline.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Always, before any operational detail is shared.',
  },
  {
    q: "What if I'm not sure I need automation yet?",
    a: 'Book the free audit anyway. If automation is not the right answer, we will say so.',
  },
]
