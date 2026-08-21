import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ARRIVE_ITEMS } from '@/lib/constants'

export function ArriveBecause() {
  return (
    <section
      id="chegou-aqui"
      className="border-y border-border bg-background-alt px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
        <ScrollReveal>
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-clay">
            Antes de começar
          </p>
          <h2 className="mt-3 max-w-[14ch] font-display text-[clamp(1.85rem,4.5vw,2.85rem)] leading-[1.12] text-foreground">
            Talvez você tenha chegado aqui porque…
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <ol className="divide-y divide-border border-y border-border">
            {ARRIVE_ITEMS.map((item) => (
              <li key={item.index} className="grid grid-cols-[3rem_1fr] gap-3 py-5 sm:gap-5">
                <span className="font-display text-sm text-primary">{item.index}</span>
                <p className="text-[1.02rem] leading-[1.65] text-foreground">{item.text}</p>
              </li>
            ))}
          </ol>
        </ScrollReveal>
      </div>
    </section>
  )
}
