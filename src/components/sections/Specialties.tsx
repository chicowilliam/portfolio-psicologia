import { memo } from 'react'
import {
  Heart,
  HeartHandshake,
  Sparkles,
  Sun,
  Users,
  Wind,
  type LucideIcon,
} from 'lucide-react'
import { ScrollReveal, ScrollRevealGroup } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'
import { SPECIALTIES } from '@/lib/constants'
import type { Specialty } from '@/types'

const iconMap = {
  wind: Wind,
  'heart-handshake': HeartHandshake,
  users: Users,
  heart: Heart,
  sparkles: Sparkles,
  sun: Sun,
} as const

interface SpecialtyCardProps {
  specialty: Specialty
  Icon: LucideIcon
}

const SpecialtyCard = memo(function SpecialtyCard({
  specialty,
  Icon,
}: SpecialtyCardProps) {
  return (
    <GlassCard as="article" className="group h-full p-6">
      <AnimatedIcon
        icon={Icon}
        containerClassName="mb-4 size-11 rounded-xl bg-primary/10 text-primary transition-[background-color,color] duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
        className="size-5"
      />
      <h3 className="font-display text-xl font-semibold text-foreground">
        {specialty.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {specialty.description}
      </p>
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
            title="Especialidades e demandas atendidas"
            description="Acompanhamento terapêutico para diferentes momentos e necessidades da vida."
          />
        </ScrollReveal>

        <ScrollRevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALTIES.map((specialty) => {
            const Icon = iconMap[specialty.icon as keyof typeof iconMap]

            return (
              <SpecialtyCard key={specialty.id} specialty={specialty} Icon={Icon} />
            )
          })}
        </ScrollRevealGroup>
      </div>
    </section>
  )
}
