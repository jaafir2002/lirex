export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Service', to: '/service' },
  { label: 'Case Study', to: '/case-study' },
  { label: 'News', to: '/news' },
] as const

export const footerColumns = [
  {
    title: 'Pages',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Service', to: '/service' },
      { label: 'Case Study', to: '/case-study' },
      { label: 'Blog', to: '/news' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI Workflow Automation', to: '/service' },
      { label: 'Custom AI Agents', to: '/service' },
      { label: 'Lead Generation', to: '/service' },
      { label: 'AI Strategy', to: '/service' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Integrations', to: '/#integrations' },
      { label: 'FAQ', to: '/#faq' },
      { label: 'Pricing', to: '/#engagement' },
      { label: 'Free Audit', to: 'https://cal.com/', external: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms of Service', to: '/terms-of-service' },
      { label: 'Cookie Policy', to: '/cookie-policy' },
      { label: '404 Page', to: '/404' },
    ],
  },
] as const

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/feed/', icon: 'linkedin' as const },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' as const },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'youtube' as const },
] as const

export const brand = {
  name: 'Lirex',
  tagline: 'AI AUTOMATION AGENCY',
  email: 'hello@lirex.ai',
  pressEmail: 'press@lirex.ai',
  privacyEmail: 'privacy@lirex.ai',
  address: 'Heemraadssingel 102C Rotterdam, NL',
  calendar: 'https://cal.com/',
} as const
