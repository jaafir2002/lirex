import type { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export function DotArrowIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="5" cy="12" r="1.5" fill="currentColor" />
      <circle cx="10" cy="12" r="1.5" fill="currentColor" />
      <circle cx="15" cy="12" r="1.5" fill="currentColor" />
      <path d="M18 12h4M19.5 9.5 22 12l-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function LinkedinIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.5 8.5H3.7V20h2.8V8.5ZM5.1 4A1.65 1.65 0 1 0 5.1 7.3 1.65 1.65 0 0 0 5.1 4ZM20.3 13.4c0-3.1-1.7-4.5-3.9-4.5-1.8 0-2.6 1-3 1.7V8.5H10.6c.04.8 0 11.5 0 11.5h2.8v-6.4c0-.3 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.7V20h3.1v-6.6Z" />
    </svg>
  )
}

export function FacebookIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.5 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.1C16.7 2 15.7 2 14.6 2c-2.4 0-4 1.5-4 4.2v2.3H8v3.5h2.6V22h3.9v-9.9h2.7l.4-3.5h-3.1Z" />
    </svg>
  )
}

export function YoutubeIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.5-1.7-1.7C18.4 5.5 12 5.5 12 5.5s-6.4 0-7.9.4c-.8.2-1.5.8-1.7 1.7C2 9 2 12.2 2 12.2s0 3.2.4 4.6c.2.9.9 1.5 1.7 1.7 1.5.4 7.9.4 7.9.4s6.4 0 7.9-.4c.8-.2 1.5-.8 1.7-1.7.4-1.4.4-4.6.4-4.6ZM10 15.2V9.2l5.2 3-5.2 3Z" />
    </svg>
  )
}
