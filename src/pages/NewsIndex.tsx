import { Link } from 'react-router-dom'
import { posts } from '../lib/content/posts'
import { Container, Section } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Stagger, StaggerItem, Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { DotArrowIcon } from '../components/ui/Icons'

export default function NewsIndex() {
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const rest = posts.filter((p) => p.slug !== featured.slug)

  return (
    <>
      <Section className="pt-32 sm:pt-36">
        <Container>
          <SectionHeading
            eyebrow="INSIGHTS"
            title="Practical writing on AI, automation, and operations."
            description={
              'No "future of work" hot takes. Just things we\'ve learned shipping AI systems for real companies.'
            }
          />

          <Reveal className="mt-12">
            <Link
              to={`/news/${featured.slug}`}
              className="group grid gap-6 rounded-3xl border border-border bg-surface/50 p-6 transition-all duration-300 hover:border-accent/35 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10"
            >
              <div>
                <p className="mb-4 font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                  {featured.category} • {featured.read}
                </p>
                <p className="mb-2 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                  FEATURED POST
                </p>
                <h2 className="mb-4 text-2xl leading-snug text-foreground transition-colors group-hover:text-accent sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted sm:text-base">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-accent">
                  Read Article
                  <DotArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              <div
                className="relative hidden min-h-[220px] overflow-hidden rounded-2xl border border-border bg-[radial-gradient(circle_at_30%_30%,rgba(232,180,160,0.25),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(187,221,255,0.12),transparent_50%),linear-gradient(145deg,#221c19,#1a1410)] lg:block"
                aria-hidden="true"
              >
                <div className="dot-grid absolute inset-0 opacity-40" />
              </div>
            </Link>
          </Reveal>

          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-5" stagger={0.08}>
            {rest.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  to={`/news/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-surface/45 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35"
                >
                  <p className="mb-4 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                    {post.category} • {post.read}
                  </p>
                  <p className="mb-2 text-xs text-muted">{post.date}</p>
                  <h3 className="mb-3 text-lg leading-snug text-foreground transition-colors group-hover:text-accent sm:text-xl">
                    {post.title}
                  </h3>
                  <p className="mt-auto text-sm text-muted">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-accent">
                    Read Article
                    <DotArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-surface/50 p-8 text-center sm:p-10">
            <SectionHeading
              align="center"
              eyebrow="STAY IN THE LOOP"
              title="One useful idea a week."
              description="One practical automation tactic, every Thursday. No fluff. Join 4,200+ founders and operators."
            />
            <form
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@company.com"
                className="h-12 flex-1 rounded-full border border-border bg-background px-5 text-sm text-foreground placeholder:text-muted focus:border-accent/50 focus:outline-none"
              />
              <Button type="submit" className="h-12 px-6">
                Subscribe
              </Button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}
