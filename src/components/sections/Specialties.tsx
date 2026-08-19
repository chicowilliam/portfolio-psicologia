import { memo } from 'react'
import { HandshakeIcon } from '@phosphor-icons/react/Handshake'
import { HeartIcon } from '@phosphor-icons/react/Heart'
import { SparkleIcon } from '@phosphor-icons/react/Sparkle'
import { SunIcon } from '@phosphor-icons/react/Sun'
import { UsersIcon } from '@phosphor-icons/react/Users'
import { WindIcon } from '@phosphor-icons/react/Wind'
import { ScrollReveal, ScrollRevealGroup } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { SPECIALTIES } from '@/lib/constants'
import type { IconComponent } from '@/lib/icons'
import type { Specialty } from '@/types'

const iconMap = {
  wind: WindIcon,
  'heart-handshake': HandshakeIcon,
  users: UsersIcon,
  heart: HeartIcon,
  sparkles: SparkleIcon,
  sun: SunIcon,
} as const

const tones = ['sage', 'linen', 'mist', 'clay', 'ink', 'leaf'] as const

interface SpecialtyCardProps {
  specialty: Specialty
  Icon: IconComponent
  tone: (typeof tones)[number]
}

const SpecialtyCard = memo(function SpecialtyCard({
  specialty,
  Icon,
  tone,
}: SpecialtyCardProps) {
  return (
    <GlassCard
      as="article"
      variant="note"
      data-tone={tone}
      className="group h-full px-5 py-6 pr-6 sm:px-6"
    >
      <div className="flex items-start gap-3">
        <Icon
          className="mt-0.5 size-6 shrink-0 text-primary"
          weight="duotone"
          aria-hidden="true"
        />
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground">
            {specialty.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {specialty.description}
          </p>
        </div>
      </div>
    </GlassCard>
  )
})

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Áreas de atuação"
            title="Demandas que acompanho"
            titleAccent="no consultório e online"
            description="Cada pessoa traz uma história. Estas são algumas das vivências em que mais trabalho — sem que uma demanda defina quem você é."
          />
        </ScrollReveal>

        <ScrollRevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALTIES.map((specialty, index) => {
            const Icon = iconMap[specialty.icon as keyof typeof iconMap]

            return (
              <SpecialtyCard
                key={specialty.id}
                specialty={specialty}
                Icon={Icon}
                tone={tones[index % tones.length]}
              />
            )
          })}
        </ScrollRevealGroup>
      </div>
    </section>
  )
}
