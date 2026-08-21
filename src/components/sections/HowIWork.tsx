import { ScrollReveal, ScrollRevealGroup } from '@/components/ui/ScrollReveal'
import { PRINCIPLES } from '@/lib/constants'

export function HowIWork() {
  return (
    <section id="como-trabalho" className="bg-ink px-5 py-14 text-ink-foreground sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-primary-light">
            Como eu trabalho
          </p>
          <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(1.9rem,4.5vw,2.9rem)] leading-[1.12]">
            Três princípios que orientam cada sessão
          </h2>
        </ScrollReveal>

        <ScrollRevealGroup className="mt-12 space-y-0 divide-y divide-white/15 border-y border-white/15">
          {PRINCIPLES.map((item) => (
            <article
              key={item.index}
              className="grid gap-3 py-8 sm:grid-cols-[5rem_minmax(0,14rem)_1fr] sm:gap-8 sm:py-10"
            >
              <span className="font-display text-3xl text-primary-light/80 sm:text-4xl">
                {item.index}
              </span>
              <h3 className="font-display text-xl leading-snug sm:text-2xl">{item.title}</h3>
              <p className="max-w-[42ch] text-[0.98rem] leading-[1.7] text-ink-foreground/75">
                {item.description}
              </p>
            </article>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  )
}
