export type CaseStudyCard = {
  slug: string
  metric: string
  category: string
  service: string
  result: string
  industry: string
}

export const caseStudies: CaseStudyCard[] = [
  {
    slug: 'b2b-saas',
    metric: '+$340K pipeline in Q1',
    category: 'SaaS',
    service: 'Lead Generation',
    result: '4-hour response time, cut to 90 seconds.',
    industry: 'B2B SaaS',
  },
  {
    slug: 'e-commerce',
    metric: '$180K saved in support costs',
    category: 'E-commerce',
    service: 'Custom AI Agent',
    result: '68% of support tickets resolved without humans.',
    industry: 'E-commerce',
  },
  {
    slug: 'marketing-agency',
    metric: '2x client capacity, zero new hires',
    category: 'Agencies',
    service: 'Workflow Automation',
    result: '35 hours per week, returned to every account manager.',
    industry: 'Marketing Agency',
  },
  {
    slug: 'healthtech',
    metric: '12 workflows automated in year one',
    category: 'Healthcare',
    service: 'AI Strategy',
    result: 'From “we should use AI” to a shipping roadmap in 3 weeks.',
    industry: 'Healthtech',
  },
  {
    slug: 'fintech',
    metric: 'Activation rate up 41%',
    category: 'SaaS',
    service: 'Custom AI Agent',
    result: 'An onboarding agent that scaled with the team.',
    industry: 'Fintech',
  },
  {
    slug: 'professional-services',
    metric: '30+ hours saved per partner, per month',
    category: 'Professional Services',
    service: 'Workflow Automation',
    result: 'Proposal creation, from 4 hours to 6 minutes.',
    industry: 'Professional Services',
  },
]

export type CaseStudyDetail = {
  slug: string
  title: string
  subtitle: string
  industry: string
  service: string
  stats: { value: string; label: string }[]
  context: string
  problem: { heading: string; body: string }
  approach: { heading: string; phases: { title: string; items: string[] }[] }
  solution: { heading: string; steps: string[] }
  results: { heading: string; bullets: string[] }
  quote: { text: string; name: string; role: string }
}

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  'b2b-saas': {
    slug: 'b2b-saas',
    title: '4-hour response time, cut to 90 seconds.',
    subtitle:
      'A 6-week build that replaced manual lead qualification with AI — without a single dropped lead.',
    industry: 'B2B SaaS',
    service: 'Lead Generation & Qualification',
    stats: [
      { value: '$340K', label: 'Pipeline added in Q1' },
      { value: '90 sec', label: 'Average response time' },
      { value: '3.2x', label: 'More qualified meetings booked' },
      { value: '6', label: 'Weeks from kickoff to live' },
    ],
    context:
      'Northbeam is a Series B SaaS company serving mid-market HR teams. At the time of engagement, they had 12 SDRs handling 400+ inbound leads per week — and losing deals to faster competitors.',
    problem: {
      heading: 'The team was fast. The handoffs weren’t.',
      body: 'When inbound demand grew faster than the team could scale, response time slipped from 12 minutes to over 4 hours. Win rates dropped 23%. The team tried hiring more SDRs, but couldn’t onboard fast enough, and the quality of qualification became inconsistent. The CEO told us: “We’re losing deals not because our product is worse, but because we’re slower.”',
    },
    approach: {
      heading: 'A 6-week build, in three phases.',
      phases: [
        {
          title: 'Phase 01 — Weeks 1–2: Audit & Design',
          items: [
            'Mapped the existing lead flow across HubSpot, Salesforce, Slack, and Calendly',
            'Reviewed 500+ historical qualified leads to define ICP scoring',
            'Designed agent logic with fallback rules for edge cases',
          ],
        },
        {
          title: 'Phase 02 — Weeks 3–4: Build',
          items: [
            'Built a custom AI qualification agent trained on their ICP and playbook',
            'Integrated with HubSpot for instant enrichment and scoring',
            'Connected to Calendly for direct meeting booking',
            'Routed unqualified leads to nurture sequences',
          ],
        },
        {
          title: 'Phase 03 — Weeks 5–6: Deploy & Refine',
          items: [
            'Launched in shadow mode for 7 days to validate against human SDRs',
            'Tuned scoring thresholds based on early results',
            'Trained the team on monitoring and handoff protocols',
          ],
        },
      ],
    },
    solution: {
      heading: 'One system, end-to-end.',
      steps: [
        'Lead submits form',
        'AI enriches with firmographic and intent data within 5 seconds',
        'AI qualifies against ICP, scores fit, and responds with a personalized message',
        'Qualified leads are booked directly to an AE’s calendar',
        'Unqualified leads enter a nurture track with periodic re-scoring',
        'Every interaction is logged in CRM with full context',
      ],
    },
    results: {
      heading: 'Outcomes after 90 days in production.',
      bullets: [
        '$340K in qualified pipeline added vs. baseline',
        '3.2x more meetings booked per week',
        '90 seconds average response time (95th percentile)',
        '0 leads dropped — every inbound now receives a response',
        '8 SDRs redeployed to outbound work where they have higher impact',
      ],
    },
    quote: {
      text: 'We thought we needed to hire five more SDRs. Instead, we got a system that outperforms our best rep — and never sleeps. The ROI was clear within the first month.',
      name: 'Sarah Chen',
      role: 'VP of Sales, Northbeam',
    },
  },
  'e-commerce': {
    slug: 'e-commerce',
    title: '68% of tickets, automated.',
    subtitle:
      'A support agent trained on their product catalog and policies now resolves most tickets without a human — and customers don’t notice the difference.',
    industry: 'E-commerce',
    service: 'Custom AI Agent',
    stats: [
      { value: '68%', label: 'Tickets resolved without humans' },
      { value: '2 min', label: 'Average first response time' },
      { value: '$180K', label: 'Saved in support costs' },
      { value: '5', label: 'Weeks from kickoff to live' },
    ],
    context:
      'Havelio is a DTC skincare brand doing 40,000+ orders a month. Support volume had outgrown their 4-person team, and hiring wasn’t keeping pace with growth.',
    problem: {
      heading: 'Support couldn’t keep up.',
      body: 'Order status, returns, and product questions made up 80% of tickets — all answerable from existing docs, but still routed to humans one by one. Response times stretched past a day during peak seasons. CSAT dropped as fast as order volume grew.',
    },
    approach: {
      heading: 'A 5-week build.',
      phases: [
        {
          title: 'Phase 01 — Weeks 1–2: Audit & Design',
          items: [
            'Categorized 12 months of ticket history by type and resolution path',
            'Mapped product catalog, return policy, and shipping rules into a knowledge base',
            "Designed escalation logic for anything outside the agent's confidence threshold",
          ],
        },
        {
          title: 'Phase 02 — Weeks 3–4: Build',
          items: [
            'Trained a support agent on the full product catalog, policies, and brand voice',
            'Integrated with their helpdesk and order management system',
            'Built automatic refund and exchange handling within policy limits',
          ],
        },
        {
          title: 'Phase 03 — Week 5: Deploy & Refine',
          items: [
            'Launched alongside the human team, agent-first with human fallback',
            'Tuned confidence thresholds based on real ticket outcomes',
            'Trained the team on monitoring and edge-case handling',
          ],
        },
      ],
    },
    solution: {
      heading: 'One agent, every channel.',
      steps: [
        'Customer submits a question via chat or email',
        'Agent pulls order data and matches it against policy',
        'Agent resolves directly — refund, exchange, tracking, or product info',
        'Anything uncertain routes to a human with full context attached',
        'Every resolution is logged and used to retrain the agent monthly',
      ],
    },
    results: {
      heading: '90 days of results.',
      bullets: [
        '68% of tickets resolved without human involvement',
        '$180K saved in support costs annually',
        '2 minutes average first response time (down from 14 hours)',
        'CSAT up 12 points despite the drop in human touch',
        'Support team refocused on VIP customers and retention',
      ],
    },
    quote: {
      text: "We expected the agent to handle the easy stuff. It's handling almost everything — and customers are happier than when humans were doing it manually.",
      name: 'Justin',
      role: 'Head of Customer Experience, Havelio',
    },
  },
  'marketing-agency': {
    slug: 'marketing-agency',
    title: '35 hours back, per week.',
    subtitle:
      'We automated reporting, onboarding, and content briefs — letting the team double client capacity without a single new hire.',
    industry: 'Marketing Agency',
    service: 'Workflow Automation',
    stats: [
      { value: '35 hrs', label: 'Saved per account manager, weekly' },
      { value: '0', label: 'New hires needed' },
      { value: '2x', label: 'Client capacity, same headcount' },
      { value: '7', label: 'Weeks from kickoff to live' },
    ],
    context:
      'Fielder & Co. is a 14-person performance marketing agency managing 30+ client accounts. Growth meant more clients — but their account managers were already stretched thin on manual reporting alone.',
    problem: {
      heading: 'Growth meant more grind.',
      body: 'Every account manager spent 8–10 hours a week assembling client reports by hand, pulling numbers from five different ad platforms. Onboarding a new client took two weeks of manual setup. The agency was turning down new business because they couldn’t staff it.',
    },
    approach: {
      heading: 'A 7-week build.',
      phases: [
        {
          title: 'Phase 01 — Weeks 1–2: Audit & Design',
          items: [
            'Mapped reporting workflows across 5 ad platforms and 30+ client accounts',
            'Documented the onboarding checklist and identified repeatable steps',
            'Designed a content brief template AI could generate from campaign data',
          ],
        },
        {
          title: 'Phase 02 — Weeks 3–5: Build',
          items: [
            'Built automated reporting that pulls, formats, and delivers client reports weekly',
            'Built an onboarding workflow that provisions accounts, folders, and access automatically',
            "Built an AI content brief generator trained on each client's brand voice",
          ],
        },
        {
          title: 'Phase 03 — Weeks 6–7: Deploy & Refine',
          items: [
            'Rolled out reporting automation first, one account team at a time',
            'Refined content brief quality based on writer feedback',
            'Documented the new onboarding flow for the ops team',
          ],
        },
      ],
    },
    solution: {
      heading: 'Three workflows, one system.',
      steps: [
        'Reporting: Pulls data from all ad platforms weekly, formats it, and sends client-ready reports automatically',
        'Onboarding: New client triggers automatic account setup, folder structure, and access provisioning',
        'Content briefs: Campaign data feeds directly into AI-generated briefs, ready for writer review',
      ],
    },
    results: {
      heading: '90 days of results.',
      bullets: [
        '35 hours saved per account manager, per week',
        '2x client capacity with the same team size',
        '3 days average onboarding time (down from 2 weeks)',
        'Account managers redeployed to strategy instead of spreadsheets',
      ],
    },
    quote: {
      text: "We stopped hiring to survive and started hiring to grow. That's the real difference this made.",
      name: 'Marina',
      role: 'Managing Partner, Fielder & Co.',
    },
  },
  healthtech: {
    slug: 'healthtech',
    title: 'From roadmap to 12 live workflows.',
    subtitle:
      'A healthtech scale-up needed a practical AI plan — then shipped twelve production workflows in the first year.',
    industry: 'Healthtech',
    service: 'AI Strategy',
    stats: [
      { value: '12', label: 'Workflows automated in year one' },
      { value: '3', label: 'Weeks to shipping roadmap' },
      { value: '40%', label: 'Faster intake processing' },
      { value: '0', label: 'HIPAA incidents' },
    ],
    context:
      'A Series A healthtech company had board pressure to “use AI” but no clear order of operations — and a compliance team that blocked every shadow IT experiment.',
    problem: {
      heading: 'Ambition without a sequence.',
      body: 'Teams were piloting random tools with no shared architecture. Compliance slowed every initiative to a halt, and leadership could not tell which use cases would move metrics.',
    },
    approach: {
      heading: 'Strategy first, then build.',
      phases: [
        {
          title: 'Phase 01 — Weeks 1–2: Audit',
          items: [
            'Interviewed ops, clinical support, and compliance stakeholders',
            'Mapped intake, scheduling, and reporting workflows',
            'Scored opportunities by ROI and regulatory risk',
          ],
        },
        {
          title: 'Phase 02 — Week 3: Roadmap',
          items: [
            'Delivered a 12-month prioritized roadmap',
            'Defined build-vs-buy for each opportunity',
            'Ran an executive readout and team workshop',
          ],
        },
        {
          title: 'Phase 03 — Months 2–12: Deploy',
          items: [
            'Shipped intake triage and scheduling automations first',
            'Expanded into reporting and patient communication',
            'Quarterly reviews kept the roadmap honest',
          ],
        },
      ],
    },
    solution: {
      heading: 'Compliance-aware by design.',
      steps: [
        'Every workflow logged with audit trails',
        'PHI handling isolated to approved systems',
        'Human review gates on clinical-adjacent decisions',
        'Monitoring for drift and policy violations',
      ],
    },
    results: {
      heading: 'Year one outcomes.',
      bullets: [
        '12 workflows live in production',
        'Intake processing 40% faster',
        'Zero compliance incidents',
        'Board reporting switched from experiments to metrics',
      ],
    },
    quote: {
      text: 'They gave us a sequence, not a slide deck. That is why anything actually shipped.',
      name: 'Elena Voss',
      role: 'COO, Carepath',
    },
  },
  fintech: {
    slug: 'fintech',
    title: 'Activation rate up 41%.',
    subtitle: 'An onboarding agent that scaled with the team — without adding headcount.',
    industry: 'Fintech',
    service: 'Custom AI Agent',
    stats: [
      { value: '41%', label: 'Activation rate increase' },
      { value: '24/7', label: 'Onboarding coverage' },
      { value: '65%', label: 'Tickets deflected' },
      { value: '8', label: 'Weeks from kickoff to live' },
    ],
    context:
      'A consumer fintech app was losing new users in the first 48 hours. Support was overwhelmed with setup questions, and activation lagged competitors.',
    problem: {
      heading: 'Day-one drop-off.',
      body: 'Users abandoned KYC and account setup when answers took hours. The team could not staff overnight coverage, and static help center content was not enough.',
    },
    approach: {
      heading: 'An agent for the critical path.',
      phases: [
        {
          title: 'Phase 01 — Weeks 1–2: Audit & Design',
          items: [
            'Funnel analysis of the first 48 hours',
            'Categorized top 40 blocking questions',
            'Designed safe handoff rules for regulated topics',
          ],
        },
        {
          title: 'Phase 02 — Weeks 3–6: Build',
          items: [
            'Trained on product docs, policies, and historical chats',
            'Integrated with in-app chat and email',
            'Built identity-aware context without exposing sensitive data',
          ],
        },
        {
          title: 'Phase 03 — Weeks 7–8: Deploy & Refine',
          items: [
            'Soft launch to 20% of new signups',
            'Tuned escalation confidence thresholds',
            'Full rollout with weekly quality reviews',
          ],
        },
      ],
    },
    solution: {
      heading: 'Always-on onboarding.',
      steps: [
        'User stalls during setup',
        'Agent proactively offers step-by-step guidance',
        'Regulated questions escalate to licensed humans with full context',
        'Outcomes feed back into the knowledge base weekly',
      ],
    },
    results: {
      heading: 'After 90 days.',
      bullets: [
        'Activation rate up 41%',
        '65% of onboarding tickets deflected',
        'Median first response under 30 seconds',
        'Support team focused on complex escalations',
      ],
    },
    quote: {
      text: 'The agent feels like a product feature, not a chatbot bolted on. Activation moved in the first month.',
      name: 'Daniel Cho',
      role: 'Head of Product, Ledgerly',
    },
  },
  'professional-services': {
    slug: 'professional-services',
    title: 'Proposal creation, 4 hours to 6 minutes.',
    subtitle:
      'Partners got their evenings back — proposal generation, client reporting, and knowledge search automated end-to-end.',
    industry: 'Professional Services',
    service: 'Workflow Automation',
    stats: [
      { value: '30+ hrs', label: 'Saved per partner, per month' },
      { value: '6 min', label: 'Average proposal draft time' },
      { value: '2.1x', label: 'More pursuits submitted' },
      { value: '6', label: 'Weeks from kickoff to live' },
    ],
    context:
      'A boutique consultancy was winning work on reputation but losing hours to bespoke proposal writing and manual client reporting.',
    problem: {
      heading: 'Billable time lost to paperwork.',
      body: 'Partners spent evenings assembling proposals from scattered decks and past work. Reporting was copy-paste across tools. Junior staff reinvented answers that already existed in the archive.',
    },
    approach: {
      heading: 'Automate the repeatable 80%.',
      phases: [
        {
          title: 'Phase 01 — Weeks 1–2: Audit & Design',
          items: [
            'Cataloged proposal and reporting patterns across 3 years of wins',
            'Mapped knowledge sources and access controls',
            'Designed human approval gates for client-facing output',
          ],
        },
        {
          title: 'Phase 02 — Weeks 3–4: Build',
          items: [
            'Built proposal draft generator from win/loss patterns',
            'Automated weekly client status reports from project tools',
            'Deployed an internal knowledge agent with permissioning',
          ],
        },
        {
          title: 'Phase 03 — Weeks 5–6: Deploy & Refine',
          items: [
            'Piloted with two partner groups',
            'Refined tone and structure from feedback',
            'Rolled out firm-wide with training',
          ],
        },
      ],
    },
    solution: {
      heading: 'One knowledge layer.',
      steps: [
        'Opportunity enters the pipeline',
        'Agent drafts a proposal from approved templates and past wins',
        'Partner edits and approves in minutes',
        'Status reports generate themselves weekly',
        'Team asks the knowledge agent instead of digging through drives',
      ],
    },
    results: {
      heading: 'After one quarter.',
      bullets: [
        '30+ hours saved per partner, per month',
        'Proposal drafts in ~6 minutes',
        '2.1x more pursuits submitted without new hires',
        'Consistent voice across client deliverables',
      ],
    },
    quote: {
      text: 'We stopped competing on how late partners stayed. The work quality went up, not down.',
      name: 'Amelia Hart',
      role: 'Managing Director, Hart & Cole',
    },
  },
}
