import { useState } from 'react'
import { CaretDownIcon } from '@phosphor-icons/react/CaretDown'
import { motion, useReducedMotion } from '@/lib/motion-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SPECIALTIES } from '@/lib/constants'

export function AreasAccordion() {
  const [openId, setOpenId] = useState<string | null>(SPECIALTIES[0]?.id ?? null)
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="atendimento" className="border-y border-border bg-background-alt px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-clay">
            Áreas de acompanhamento
          </p>
          <h2 className="mt-3 max-w-[16ch] font-display text-[clamp(1.85rem,4vw,2.7rem)] leading-[1.12] text-foreground">
            Temas com os quais trabalho
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="mt-10 grid gap-0 lg:grid-cols-2 lg:gap-x-12">
            {SPECIALTIES.map((item) => {
              const isOpen = openId === item.id
              return (
                <div key={item.id} className="border-b border-border">
                  <button
                    type="button"
                    id={`area-trigger-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`area-panel-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="font-display text-xl text-foreground sm:text-[1.35rem]">
                      {item.title}
                    </span>
                    <motion.span
                      animate={{ rotate: prefersReducedMotion ? 0 : isOpen ? 180 : 0 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}
                    >
                      <CaretDownIcon className="size-5 text-subtle" aria-hidden="true" />
                    </motion.span>
                  </button>
                  <div
                    id={`area-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`area-trigger-${item.id}`}
                    className="accordion-panel"
                    data-open={isOpen ? 'true' : 'false'}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
