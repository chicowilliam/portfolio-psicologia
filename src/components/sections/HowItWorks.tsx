import { memo } from 'react'
import { MapPinIcon } from '@phosphor-icons/react/MapPin'
import { MonitorIcon } from '@phosphor-icons/react/Monitor'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PROCESS_STEPS } from '@/lib/constants'
import type { ProcessStep } from '@/types'

const StepRow = memo(function StepRow({ step }: { step: ProcessStep }) {
  return (
    <li className="paper-ledger-row grid gap-3 py-5 pr-5 sm:grid-cols-[4.5rem_1fr] sm:items-baseline sm:gap-6 sm:py-6 sm:pr-7">
      <p className="step-badge">
        {String(step.step).padStart(2, '0')}
      </p>
      <div>
        <h3 className="font-display text-lg font-semibold text-foreground">
          {step.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {step.description}
        </p>
      </div>
    </li>
  )
})

export function HowItWorks() {
  return (
    <section id="como-funciona" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Como funciona"
            title="Do primeiro contato"
            titleAccent="ao acompanhamento contínuo"
            description={
              <>
                Um caminho claro,{' '}
                <strong className="font-semibold text-foreground">sem burocracia excessiva</strong>,
                presencial na Savassi ou online, no mesmo cuidado.
              </>
            }
          />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <div className="paper-chip">
              <MapPinIcon className="size-4 text-primary" weight="duotone" aria-hidden="true" />
              Presencial na Savassi
            </div>
            <div className="paper-chip">
              <MonitorIcon className="size-4 text-primary" weight="duotone" aria-hidden="true" />
              Online por videoconferência
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <ol className="paper-card paper-note paper-ledger mt-8 list-none sm:mt-10">
            {PROCESS_STEPS.map((step) => (
              <StepRow key={step.step} step={step} />
            ))}
          </ol>
        </ScrollReveal>
      </div>
    </section>
  )
}
