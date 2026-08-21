import { ScrollReveal, ScrollRevealGroup } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { APPROACH_PILLARS } from '@/lib/constants'

export function ApproachPillars() {
  return (
    <section
      id="abordagem"
      className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
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

        <ScrollRevealGroup className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3 lg:gap-6">
          {APPROACH_PILLARS.map((pillar) => (
            <GlassCard
              key={pillar.index}
              as="article"
              variant="note"
              className="flex h-full flex-col px-6 py-7"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                {pillar.index} · {pillar.subtitle}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
              <p className="mt-4 border-t border-border/60 pt-4 text-sm leading-relaxed text-foreground/88">
                <strong className="font-medium text-primary">Na prática:</strong> {pillar.benefit}
              </p>
            </GlassCard>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  )
}
