import { memo } from 'react'
import {
  Award,
  Calendar,
  GraduationCap,
  Heart,
  type LucideIcon,
} from 'lucide-react'
import { ScrollReveal, ScrollRevealGroup } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'
import { MeshBackground } from '@/components/ui/MeshBackground'
import { CREDENTIALS } from '@/lib/constants'
import type { Credential } from '@/types'

const iconMap = {
  badge: Award,
  graduation: GraduationCap,
  calendar: Calendar,
  heart: Heart,
} as const

interface CredentialCardProps {
  credential: Credential
  Icon: LucideIcon
}

const CredentialCard = memo(function CredentialCard({
  credential,
  Icon,
}: CredentialCardProps) {
  return (
    <GlassCard as="article" className="group h-full p-6">
      <AnimatedIcon
        icon={Icon}
        containerClassName="mb-4 size-12 rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
        className="size-6"
      />
      <p className="text-sm font-medium text-muted-foreground">
        {credential.label}
      </p>
      <p className="mt-1 font-display text-lg font-semibold text-foreground">
        {credential.value}
      </p>
    </GlassCard>
  )
})

export function Credentials() {
  return (
    <section className="relative border-y border-border bg-muted/40 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <MeshBackground variant="subtle" />

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Profissionalismo e confiança"
            title="Compromisso com a ética e a qualidade do cuidado"
            description="Informações verificáveis que demonstram minha formação, registro profissional e experiência clínica."
          />
        </ScrollReveal>

        <ScrollRevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((credential) => {
            const Icon = iconMap[credential.icon as keyof typeof iconMap]

            return (
              <CredentialCard key={credential.label} credential={credential} Icon={Icon} />
            )
          })}
        </ScrollRevealGroup>
      </div>
    </section>
  )
}
