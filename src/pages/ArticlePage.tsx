import { Link, Navigate, useParams } from 'react-router-dom'
import { postDetails, posts } from '../lib/content/posts'
import { Container, Section } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import { FinalCTA } from '../components/sections/FinalCTA'
import { DotArrowIcon } from '../components/ui/Icons'

export default function ArticlePage() {
  const { slug = '' } = useParams()
  const post = postDetails[slug]

  if (!post) return <Navigate to="/news" replace />

  const related = posts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      <Section className="pt-32 sm:pt-36">
        <Container className="max-w-3xl">
          <Reveal>
            <Link
              to="/news"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-muted uppercase transition-colors hover:text-accent"
            >
              ← All articles
            </Link>
            <p className="mb-3 font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
              {post.category} • Read {post.read} • {post.date}
            </p>
            <h1 className="text-3xl leading-[1.12] text-foreground sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{post.intro}</p>
            <div className="mt-8 flex flex-wrap gap-6 border-t border-border pt-6">
              <div>
                <p className="text-sm font-medium text-foreground">{post.author}</p>
                <p className="mt-0.5 text-xs text-muted">{post.authorRole}</p>
              </div>
              <div>
                <p className="text-sm text-muted">Published</p>
                <p className="mt-0.5 text-sm text-foreground">{post.date}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-border pt-12">
        <Container className="max-w-3xl">
          {post.sections.map((section, i) => (
            <Reveal key={i} className="mb-10" delay={0.02 * i}>
              {section.heading ? (
                <h2 className="mb-4 text-xl text-foreground sm:text-2xl">{section.heading}</h2>
              ) : null}
              <p className="text-[15px] leading-relaxed text-muted sm:text-base">{section.body}</p>
              {section.list ? (
                <ol className="mt-5 space-y-3">
                  {section.list.map((item, li) => (
                    <li
                      key={item}
                      className="flex gap-4 rounded-xl border border-border bg-surface/40 px-5 py-4 text-sm text-foreground-dim"
                    >
                      <span className="font-mono text-accent">{li + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ol>
              ) : null}
            </Reveal>
          ))}

          <Reveal className="mt-10 flex flex-wrap gap-2 border-t border-border pt-8">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-surface/50 px-3 py-1.5 font-mono text-[11px] text-muted"
              >
                {t}
              </span>
            ))}
          </Reveal>

          <Reveal className="mt-8 text-sm text-muted">
            <span className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
              Share:
            </span>{' '}
            LinkedIn, X, Facebook
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl text-foreground">Related Posts</h2>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm text-accent hover:translate-x-0.5 transition-transform"
            >
              All articles <DotArrowIcon className="size-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/news/${p.slug}`}
                className="group rounded-2xl border border-border bg-surface/50 p-6 transition-all hover:border-accent/35"
              >
                <p className="mb-2 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                  {p.category} • {p.read}
                </p>
                <h3 className="text-lg text-foreground group-hover:text-accent">{p.title}</h3>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA title="One useful idea a week." description="Book a free audit, or join the list on the news page." />
    </>
  )
}
