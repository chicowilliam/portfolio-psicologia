import { memo } from 'react'
import { Monitor, MapPin } from 'lucide-react'
import { ScrollReveal, ScrollRevealGroup } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { PROCESS_STEPS } from '@/lib/constants'
import type { ProcessStep } from '@/types'

interface StepCardProps {
  step: ProcessStep
  index: number
  total: number
}

const StepCard = memo(function StepCard({ step, index, total }: StepCardProps) {
  return (
    <article className="relative h-full">
      {index < total - 1 && (
        <div
          className="absolute left-1/2 top-12 hidden h-px w-full bg-border/70 lg:block"
          aria-hidden="true"
        />
      )}

      <GlassCard className="relative p-6">
        <p className="step-badge mb-3">
          Passo {String(step.step).padStart(2, '0')}
        </p>
        <h3 className="font-display text-lg font-semibold text-foreground">
          {step.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {step.description}
        </p>
      </GlassCard>
    </article>
  )
})

export function HowItWorks() {
  return (
    <section id="como-funciona" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Como funciona"
            title="Do primeiro contato"
            titleAccent="ao acompanhamento contínuo"
            description="Um caminho claro, sem burocracia excessiva — presencial na Savassi ou online, no mesmo cuidado."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              Presencial na Savassi
            </div>
            <div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground">
              <Monitor className="size-4 text-primary" aria-hidden="true" />
              Online por videoconferência
            </div>
          </div>
        </ScrollReveal>

        <ScrollRevealGroup className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <StepCard
              key={step.step}
              step={step}
              index={index}
              total={PROCESS_STEPS.length}
            />
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  )
}
