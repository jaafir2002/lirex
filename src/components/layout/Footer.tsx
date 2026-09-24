import { Link } from 'react-router-dom'
import { brand, footerColumns, socialLinks } from '../../lib/content/site'
import { Logo } from '../ui/Logo'
import { FacebookIcon, LinkedinIcon, YoutubeIcon } from '../ui/Icons'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

const icons = {
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-background pt-16 pb-10 sm:pt-20">
      <Container>
        <Reveal>
          <h2 className="mb-12 max-w-3xl text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
            Let’s build systems that give your team their time back.
          </h2>
        </Reveal>

        <div className="grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              AI systems for teams that want leverage, not more dashboards.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => {
                const Icon = icons[s.icon]
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit on ${s.label}`}
                    className="flex size-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-200 hover:border-accent/40 hover:text-accent"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted">
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] tracking-[0.14em] text-muted/70 uppercase">
            {brand.tagline}
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Logo size="md" className="opacity-80" />
        </div>
      </Container>
    </footer>
  )
}
