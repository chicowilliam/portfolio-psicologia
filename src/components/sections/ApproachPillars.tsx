import { ScrollReveal, ScrollRevealGroup } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { APPROACH_PILLARS } from '@/lib/constants'

export function ApproachPillars() {
  return (
    <section
      id="abordagem"
      className="band-light px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Abordagem"
            title="Três pilares do"
            titleAccent="cuidado terapêutico"
            description={
              <>
                Integro <strong className="font-semibold text-foreground">TCC</strong> a uma
                escuta atenta e personalizada. Sem promessas de cura, com foco em clareza e
                ferramentas possíveis.
              </>
            }
          />
        </ScrollReveal>

        <ScrollRevealGroup className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-3 lg:gap-10">
          {APPROACH_PILLARS.map((pillar) => (
            <article key={pillar.index} className="pillar-card">
              <span className="pillar-card-number" aria-hidden="true">
                {pillar.index}
              </span>
              <span className="relative text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                {pillar.subtitle}
              </span>
              <h3 className="relative mt-3 max-w-[14ch] font-display text-xl font-semibold text-foreground sm:text-2xl">
                {pillar.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
              <p className="relative mt-5 border-t border-border/60 pt-4 text-sm leading-relaxed text-foreground/88">
                <strong className="font-medium text-primary">Na prática:</strong> {pillar.benefit}
              </p>
            </article>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  )
}
