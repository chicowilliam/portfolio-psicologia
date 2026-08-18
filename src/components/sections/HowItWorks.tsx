import { Monitor, MapPin } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PROCESS_STEPS } from '@/lib/constants'

export function HowItWorks() {
  return (
    <section id="como-funciona" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Como funciona"
            title="Do primeiro contato ao acompanhamento"
            description="Um processo claro e acolhedor, disponível presencialmente ou online."
          />
        </ScrollReveal>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            Presencial na Savassi
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
            <Monitor className="size-4 text-primary" aria-hidden="true" />
            Online por videoconferência
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 0.08}>
              <article className="relative h-full">
                {index < PROCESS_STEPS.length - 1 && (
                  <div
                    className="absolute left-1/2 top-12 hidden h-px w-full bg-border lg:block"
                    aria-hidden="true"
                  />
                )}

                <div className="relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
                    {step.step}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
