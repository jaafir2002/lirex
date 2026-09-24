export type LegalDoc = {
  slug: 'privacy-policy' | 'terms-of-service' | 'cookie-policy'
  title: string
  updated: string
  sections: { heading: string; body: string; bullets?: string[] }[]
}

export const legalDocs: LegalDoc[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy.',
    updated: 'Last updated: Sep 07, 2026',
    sections: [
      {
        heading: 'Introduction',
        body: 'Lirex ("we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By using our site, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of our website.',
      },
      {
        heading: 'Information We Collect',
        body: 'Information you provide directly: name, email address, and company name (via contact forms, audit requests, or newsletter sign-ups); information shared during calls, consultations, or project engagements; payment and billing details (processed securely through third-party providers). Information collected automatically: IP address, browser type, and device information; pages visited, time spent on site, and referral source; cookies and similar tracking technologies.',
        bullets: [
          'Name, email, and company via forms',
          'Call and engagement notes',
          'Payment details via third-party processors',
          'IP, browser, and usage analytics',
        ],
      },
      {
        heading: 'How We Use Your Information',
        body: 'We use the information we collect to respond to inquiries and provide requested services; send relevant updates, newsletters, or marketing communications (you may opt out at any time); improve our website, services, and user experience; process payments and manage client engagements; and comply with legal obligations and protect against fraud or misuse.',
      },
      {
        heading: 'Your Rights',
        body: 'Depending on your location, you may have the right to access the personal information we hold about you; request correction of inaccurate information; request deletion of your data; object to or restrict certain processing; withdraw consent for marketing communications; and request a copy of your data in a portable format. To exercise any of these rights, contact us at privacy@lirex.ai.',
      },
    ],
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of Service.',
    updated: 'Last updated: Sep 07, 2026',
    sections: [
      {
        heading: 'Agreement to Terms',
        body: 'By accessing or using the Lirex website ("Site") or engaging our services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use our Site or Services.',
      },
      {
        heading: 'Description of Services',
        body: 'Lirex provides AI automation consulting, custom AI agent development, workflow automation, and related strategic services. Specific deliverables, timelines, and pricing for any engagement will be outlined in a separate written agreement or statement of work ("SOW") between Lirex and the client.',
      },
      {
        heading: 'Use of the Site',
        body: 'You agree not to use the Site for any unlawful purpose; attempt to gain unauthorized access to our systems or data; interfere with or disrupt the Site; copy or distribute Site content without permission; or use automated tools to access the Site without authorization.',
      },
      {
        heading: 'Client Engagements',
        body: 'If you engage Lirex for services: scope, timeline, and pricing will be defined in a separate written agreement; payment terms will be specified in the applicable invoice or contract; either party may terminate according to the signed agreement; and Lirex will use reasonable care in delivering services, but does not guarantee specific business outcomes unless explicitly stated in a signed agreement.',
      },
      {
        heading: 'Payment Terms',
        body: 'Fees for Services are outlined in individual proposals, invoices, or contracts. Payments are due according to the terms specified at the time of engagement. Late payments may result in suspension of services or additional fees, as outlined in your specific agreement.',
      },
      {
        heading: 'Disclaimers',
        body: 'Our Site and Services are provided "as is" without warranties of any kind. We do not guarantee that the Site will be error-free, uninterrupted, or secure at all times. Lirex is not liable for any indirect, incidental, or consequential damages arising from your use of the Site or Services, to the maximum extent permitted by law.',
      },
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy.',
    updated: 'Last updated: Sep 07, 2026',
    sections: [
      {
        heading: 'What Are Cookies',
        body: 'Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember your preferences, and provide analytics on how the site is used.',
      },
      {
        heading: 'How We Use Cookies',
        body: 'Lirex uses cookies for the following purposes:',
        bullets: [
          'Essential Cookies — required for navigation, security, and basic functionality',
          'Performance & Analytics Cookies — help us understand how visitors use the site',
          'Functional Cookies — remember preferences such as language or region',
          'Marketing Cookies — used only with your consent to measure campaign effectiveness',
        ],
      },
      {
        heading: 'Third-Party Cookies',
        body: 'Some cookies are placed by third-party services we use, such as analytics providers or marketing platforms. These third parties have their own privacy and cookie policies, which we encourage you to review.',
      },
    ],
  },
]
