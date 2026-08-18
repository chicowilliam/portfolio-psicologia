import { motion, useReducedMotion } from '@/lib/motion-react'
import { ScrollReveal, ScrollRevealGroup } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { SITE, TIMELINE } from '@/lib/constants'

function TimelineConnector() {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div
        className="absolute bottom-0 left-[19px] top-0 w-px bg-border lg:left-1/2 lg:-translate-x-px"
        aria-hidden="true"
      />
    )
  }

  return (
    <div
      className="absolute bottom-0 left-[19px] top-0 w-px overflow-hidden bg-border/30 lg:left-1/2 lg:-translate-x-px"
      aria-hidden="true"
    >
      <motion.div
        className="h-full w-full origin-top bg-border"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}

export function About() {
  return (
    <section id="sobre" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Sobre mim"
            title="Quem acompanha você nesse processo"
            description="Conheça minha trajetória, formação e abordagem terapêutica."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal delay={0.05}>
            <div className="glass-card relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-primary-light/25" />
              <div className="absolute inset-0 flex items-end p-8">
                <div className="glass-quote rounded-2xl px-5 py-4 shadow-soft">
                  <p className="font-display text-lg font-semibold text-foreground">
                    {SITE.psychologist.name}
                  </p>
                  <p className="text-sm text-primary">
                    CRP {SITE.psychologist.crp}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="space-y-6">
              <p className="leading-relaxed text-muted-foreground">
                {SITE.psychologist.bio}
              </p>

              <GlassCard hover={false} className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Abordagem terapêutica
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Trabalho com {SITE.psychologist.approach}, integrando técnicas
                  validadas cientificamente com uma escuta empática e
                  personalizada. Cada processo terapêutico é único — não existe
                  receita pronta, mas sim um caminho construído em parceria.
                </p>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16">
          <ScrollReveal>
            <h3 className="mb-8 font-display text-2xl font-semibold text-foreground">
              Trajetória profissional
            </h3>
          </ScrollReveal>

          <div className="relative">
            <TimelineConnector />

            <ScrollRevealGroup className="space-y-0">
              {TIMELINE.map((item, index) => (
                <div key={item.year} className="relative grid gap-4 pb-10 lg:grid-cols-2 lg:gap-8">
                  <div
                    className={`flex items-start gap-4 lg:pr-12 ${
                      index % 2 === 0
                        ? 'lg:col-start-1 lg:flex-row-reverse lg:text-right'
                        : 'lg:col-start-2'
                    }`}
                  >
                    <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card text-sm font-semibold text-primary">
                      {index + 1}
                    </div>
                    <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                      <p className="text-sm font-semibold text-primary">{item.year}</p>
                      <h4 className="mt-1 font-display text-lg font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollRevealGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
