import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Container, Section } from '../components/ui/Container'
import { DottedBackground } from '../components/decorative/DottedBackground'

export default function NotFoundPage() {
  return (
    <Section className="relative flex min-h-[70vh] items-center overflow-hidden pt-32">
      <DottedBackground className="text-accent/50" density="normal" opacity={0.4} />
      <Container className="relative z-10 text-center">
        <p className="font-mono text-sm tracking-[0.2em] text-accent uppercase">404</p>
        <h1 className="mt-4 text-4xl text-foreground sm:text-5xl lg:text-6xl">
          This page went off-script.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-muted">
          The link may be old, or the page moved. Let&apos;s get you back to useful work.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/" size="lg" showArrow>
            Back to home
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Contact us
          </Button>
        </div>
        <p className="mt-10 text-sm text-muted">
          Or browse{' '}
          <Link to="/case-study" className="text-accent underline-offset-4 hover:underline">
            case studies
          </Link>
          .
        </p>
      </Container>
    </Section>
  )
}
