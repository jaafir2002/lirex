export type PostCard = {
  slug: string
  category: string
  read: string
  date: string
  title: string
  excerpt?: string
  featured?: boolean
}

export const posts: PostCard[] = [
  {
    slug: 'blog-item',
    category: 'Strategy',
    read: '8 min Read',
    date: '25 Aug, 26',
    title: 'The 5 workflows every company should automate first — and why most start with the wrong one.',
    excerpt:
      "Most teams start where it's visible, not where it's valuable. Here's the order that actually pays off.",
    featured: true,
  },
  {
    slug: 'build-vs-buy',
    category: 'AI Agents',
    read: '5 min Read',
    date: '24 Jul, 26',
    title: 'Build vs. buy: when off-the-shelf AI tools fail.',
    excerpt: 'When generic tools stop paying for themselves — and how to decide what to build.',
  },
  {
    slug: 'not-actually-automated',
    category: 'Automation',
    read: '8 min Read',
    date: '22 Jun, 26',
    title: "Why your “automation” probably isn't actually automated.",
    excerpt: 'Zaps that still need babysitting are not automation. Here is how to tell the difference.',
  },
  {
    slug: 'spray-and-pray',
    category: 'Lead Generation',
    read: '10 min Read',
    date: '14 Jun, 26',
    title: 'The death of spray as well as pray outbound.',
    excerpt: 'Fewer, smarter messages beat volume — and protect your domain reputation.',
  },
  {
    slug: 'workflow-audit',
    category: 'Tutorials',
    read: '5 min Read',
    date: '02 May, 26',
    title: "A 7-step framework for auditing your team's workflows.",
    excerpt: 'A practical checklist you can run in a single afternoon.',
  },
]

export type PostDetail = {
  slug: string
  category: string
  read: string
  date: string
  title: string
  author: string
  authorRole: string
  intro: string
  sections: { heading?: string; body: string; list?: string[] }[]
  tags: string[]
}

export const postDetails: Record<string, PostDetail> = {
  'blog-item': {
    slug: 'blog-item',
    category: 'Strategy',
    read: '8 min',
    date: '25 August, 2026',
    title: 'Automate these 5 first.',
    author: 'Alex Martin',
    authorRole: 'Founder & Head of Automation',
    intro:
      "Most teams start where it's visible, not where it's valuable. Here's the order that actually pays off.",
    sections: [
      {
        heading: 'Most companies start automating in the wrong place.',
        body: 'They start with the workflow that feels annoying — usually something visible like social media posting or expense reports. The work gets done faster, but the business does not change. Three months later, they wonder why “AI” has not moved the needle. After running automation audits for 80+ companies across SaaS, e-commerce, and services, we have seen a clear pattern in which workflows actually drive ROI when automated first.',
      },
      {
        heading: 'Lead response and qualification.',
        body: 'This is almost always the highest-ROI automation in any B2B company. Every minute of delay in responding to inbound leads measurably reduces close rates — and most teams are responding in hours, not seconds. AI qualification systems can respond in under 60 seconds, score fit accurately, and book meetings automatically. We have seen this single workflow add six figures of pipeline within a quarter.',
      },
      {
        heading: 'Customer support tier-one triage.',
        body: 'Most support volume is repetitive: order status, password resets, refund requests, basic how-tos. A well-trained AI agent can resolve 50–70% of these without human touch, while routing complex cases to humans with full context. The savings compound — and CSAT usually goes up, not down.',
      },
      {
        heading: 'How to choose for your business.',
        body: "If you're not sure where to start, run this simple exercise:",
        list: [
          "List your team's top 10 most repetitive workflows",
          'For each, estimate: hours per week × hourly cost × revenue impact',
          'Rank by total annual cost',
          'Start with the top 2',
        ],
      },
    ],
    tags: ['#Automation', '#Strategy', '#ROI', '#AIagents'],
  },
  'build-vs-buy': {
    slug: 'build-vs-buy',
    category: 'AI Agents',
    read: '5 min',
    date: '24 July, 2026',
    title: 'Build vs. buy: when off-the-shelf AI tools fail.',
    author: 'Alex Martin',
    authorRole: 'Founder & Head of Automation',
    intro: 'When generic tools stop paying for themselves — and how to decide what to build.',
    sections: [
      {
        heading: 'Buy until the edge cases own you.',
        body: 'Off-the-shelf tools win when your process is standard and volume is low. They fail when your data model, compliance rules, or brand voice diverge from the average customer. That is usually the moment your team starts maintaining the tool instead of the tool maintaining the work.',
      },
      {
        heading: 'Signals it is time to build.',
        body: 'You are writing brittle workarounds every week. Your team does not trust the output. You cannot explain decisions to compliance. Or the per-seat cost now exceeds a focused internal system.',
      },
      {
        heading: 'A hybrid path that works.',
        body: 'Keep commodity pieces (email, calendar, storage) as SaaS. Build the judgment layer — scoring, routing, brand-specific generation — where differentiation lives. Most of our clients end up hybrid within a year.',
      },
    ],
    tags: ['#BuildVsBuy', '#AIagents', '#Strategy'],
  },
  'not-actually-automated': {
    slug: 'not-actually-automated',
    category: 'Automation',
    read: '8 min',
    date: '22 June, 2026',
    title: "Why your “automation” probably isn't actually automated.",
    author: 'Marina Cosoy',
    authorRole: 'Lead AI Engineer',
    intro: 'Zaps that still need babysitting are not automation. Here is how to tell the difference.',
    sections: [
      {
        heading: 'Automation has three layers.',
        body: 'Trigger, decision, and recovery. Most stacks only automate the trigger. When data is messy or an API flakes, a human becomes the decision and recovery layer — and the “automation” quietly becomes a chore.',
      },
      {
        heading: 'Audit for silent failure.',
        body: 'If more than 5% of runs need manual fixes, you do not have automation — you have a dashboard for exceptions. Add validation, fallbacks, and alerting before adding more triggers.',
      },
      {
        heading: 'Measure the right thing.',
        body: 'Track unattended completion rate, not number of zaps. That single metric exposes which systems are real and which are theater.',
      },
    ],
    tags: ['#Automation', '#Ops', '#Reliability'],
  },
  'spray-and-pray': {
    slug: 'spray-and-pray',
    category: 'Lead Generation',
    read: '10 min',
    date: '14 June, 2026',
    title: 'The death of spray as well as pray outbound.',
    author: 'Alex Martin',
    authorRole: 'Founder & Head of Automation',
    intro: 'Fewer, smarter messages beat volume — and protect your domain reputation.',
    sections: [
      {
        heading: 'Volume stopped working.',
        body: 'Inboxes and filters changed. Blast sequences train buyers to ignore you and train algorithms to bury you. The teams still winning outbound send less — with far more context per send.',
      },
      {
        heading: 'Intent over lists.',
        body: 'Pair firmographic fit with real intent signals, then let AI draft against a specific trigger. One relevant message outperforms fifty generic ones, and your domain stays healthy.',
      },
      {
        heading: 'Protect the brand layer.',
        body: 'Automate research, enrichment, and drafting — keep human approval on anything that represents your brand at scale. That split is how we run 3–5x pipeline systems without spam aesthetics.',
      },
    ],
    tags: ['#LeadGeneration', '#Outbound', '#AI'],
  },
  'workflow-audit': {
    slug: 'workflow-audit',
    category: 'Tutorials',
    read: '5 min',
    date: '02 May, 2026',
    title: "A 7-step framework for auditing your team's workflows.",
    author: 'Alex Martin',
    authorRole: 'Founder & Head of Automation',
    intro: 'A practical checklist you can run in a single afternoon.',
    sections: [
      {
        heading: 'The framework.',
        body: 'Walk one real process end-to-end with the people who do it daily. Capture every handoff, every tool switch, and every “I usually fix it manually when…” moment.',
        list: [
          'List the outcome the workflow produces',
          'Map steps and systems in order',
          'Mark every manual copy/paste',
          'Note failure modes and who notices them',
          'Estimate hours and error cost per week',
          'Identify the single highest-ROI step to automate first',
          'Define what “done” looks like in 30 days',
        ],
      },
      {
        heading: 'What you get.',
        body: 'A one-page map, a ranked opportunity list, and a first build target. That is the same skeleton we use for paid Pilots — you can run a lighter version yourself.',
      },
    ],
    tags: ['#Automation', '#Tutorial', '#Audit'],
  },
}
