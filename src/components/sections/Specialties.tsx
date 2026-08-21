import { useState } from 'react'
import { ScrollReveal, ScrollRevealGroup } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SPECIALTIES } from '@/lib/constants'

export function Specialties() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section
      id="especialidades"
      className="band-mid px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Áreas de atuação"
            title="Demandas que acompanho"
            titleAccent="no consultório e online"
            description={
              <>
                Cada pessoa traz uma história. Estas são algumas das vivências em que mais
                trabalho,{' '}
                <strong className="font-semibold text-foreground">
                  sem que uma demanda defina quem você é
                </strong>
                .
              </>
            }
          />
        </ScrollReveal>

        <ScrollRevealGroup className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12 sm:gap-4">
          {SPECIALTIES.map((specialty) => {
            const isOpen = openId === specialty.id

            return (
              <button
                key={specialty.id}
                type="button"
                aria-expanded={isOpen}
                data-open={isOpen ? 'true' : 'false'}
                onClick={() => setOpenId(isOpen ? null : specialty.id)}
                className="specialty-chip w-full max-w-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto sm:min-w-[14rem] sm:max-w-[20rem]"
              >
                <span className="font-display text-lg font-semibold text-foreground sm:text-xl">
                  {specialty.title}
                </span>
                <span className="specialty-chip-body w-full">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {specialty.description}
                  </p>
                </span>
              </button>
            )
          })}
        </ScrollRevealGroup>
      </div>
    </section>
  )
}
