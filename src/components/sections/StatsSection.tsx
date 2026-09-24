import { stats } from '../../lib/content/services'
import { Container, Section } from '../ui/Container'
import { Stagger, StaggerItem } from '../ui/Reveal'
import { Counter } from '../ui/Counter'

export function StatsSection() {
  return (
    <Section className="border-t border-border py-12 sm:py-16">
      <Container>
        <Stagger className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8" stagger={0.08}>
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="rounded-2xl border border-border bg-surface/40 px-4 py-6 text-center sm:px-5 sm:py-8">
                <p className="font-display text-3xl font-semibold text-foreground tabular-nums sm:text-4xl lg:text-5xl">
                  <Counter
                    value={s.value}
                    decimals={s.decimals ?? 0}
                    suffix={s.suffix}
                    animate={s.animate}
                  />
                </p>
                <p className="mt-2 font-mono text-[11px] tracking-[0.12em] text-accent uppercase">
                  {s.label}
                </p>
                {'sub' in s && s.sub ? (
                  <p className="mt-1 text-xs text-muted">{s.sub}</p>
                ) : null}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
