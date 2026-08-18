import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion } from '@/components/ui/Accordion'
import { SITE, FAQ_ITEMS } from '@/lib/constants'

export function FAQ() {
  return (
    <section
      id="duvidas"
      className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Perguntas frequentes"
            title="O que muita gente"
            titleAccent="quer saber antes de agendar"
            description="Respostas diretas, sem rodeios — para você decidir com mais segurança."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12">
            <Accordion items={FAQ_ITEMS} />
            <p className="mt-8 text-center text-sm leading-relaxed text-muted-foreground">
              {SITE.voice.faqClosing}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
