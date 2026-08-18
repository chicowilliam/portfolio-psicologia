import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion } from '@/components/ui/Accordion'
import { FAQ_ITEMS } from '@/lib/constants'

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
            title="Dúvidas comuns sobre o atendimento"
            description="Respostas transparentes para você tomar sua decisão com tranquilidade."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
