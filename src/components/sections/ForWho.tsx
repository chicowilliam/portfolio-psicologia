import { ScrollReveal, ScrollRevealGroup } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FOR_WHO_ITEMS, SITE } from '@/lib/constants'

export function ForWho() {
  return (
    <section
      id="para-quem"
      className="band-light-alt relative px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow={SITE.niche.eyebrow}
            title={SITE.niche.title}
            titleAccent={SITE.niche.titleAccent}
            description={SITE.niche.description}
          />
        </ScrollReveal>

        <ScrollRevealGroup className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:gap-5">
          {FOR_WHO_ITEMS.map((item) => (
            <article
              key={item.index}
              className="paper-card group flex gap-4 px-5 py-5 transition-shadow sm:px-6 sm:py-6"
            >
              <span
                className="font-display text-sm font-semibold tracking-[0.08em] text-accent"
                aria-hidden="true"
              >
                {item.index}
              </span>
              <p className="text-[0.98rem] leading-[1.65] text-foreground/90">{item.text}</p>
            </article>
          ))}
        </ScrollRevealGroup>

        <ScrollReveal delay={0.08}>
          <p className="mx-auto mt-10 max-w-[58ch] text-center text-sm leading-relaxed text-muted-foreground">
            Se você se reconhece em parte dessas experiências, podemos conversar na{' '}
            <strong className="font-medium text-foreground">primeira conversa</strong> para
            entender se o meu trabalho faz sentido para o seu momento.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
