import { memo } from 'react'
import { CalendarIcon } from '@phosphor-icons/react/Calendar'
import { GraduationCapIcon } from '@phosphor-icons/react/GraduationCap'
import { HeartIcon } from '@phosphor-icons/react/Heart'
import { LockIcon } from '@phosphor-icons/react/Lock'
import { ScalesIcon } from '@phosphor-icons/react/Scales'
import { SealCheckIcon } from '@phosphor-icons/react/SealCheck'
import { UsersThreeIcon } from '@phosphor-icons/react/UsersThree'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MeshBackground } from '@/components/ui/MeshBackground'
import { CREDENTIALS, SITE, TRUST_SEALS } from '@/lib/constants'
import type { IconComponent } from '@/lib/icons'
import type { Credential, TrustSeal } from '@/types'

const iconMap = {
  badge: SealCheckIcon,
  graduation: GraduationCapIcon,
  calendar: CalendarIcon,
  heart: HeartIcon,
} as const

const trustIconMap = {
  supervision: UsersThreeIcon,
  formation: GraduationCapIcon,
  ethics: ScalesIcon,
  privacy: LockIcon,
} as const

interface CredentialCellProps {
  credential: Credential
  Icon: IconComponent
}

interface TrustSealCellProps {
  seal: TrustSeal
  Icon: IconComponent
}

const CredentialCell = memo(function CredentialCell({
  credential,
  Icon,
}: CredentialCellProps) {
  return (
    <article className="p-5 sm:p-6">
      <Icon className="size-6 text-primary" weight="duotone" aria-hidden="true" />
      <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {credential.label}
      </p>
      {credential.href ? (
        <a
          href={credential.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block font-display text-lg font-semibold leading-snug text-foreground underline-offset-2 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {credential.value}
        </a>
      ) : (
        <p className="mt-2 font-display text-lg font-semibold leading-snug text-foreground">
          {credential.value}
        </p>
      )}
    </article>
  )
})

const TrustSealCell = memo(function TrustSealCell({ seal, Icon }: TrustSealCellProps) {
  return (
    <article className="flex gap-3 rounded-xl border border-border/70 bg-card/60 px-4 py-4">
      <Icon className="mt-0.5 size-5 shrink-0 text-primary" weight="duotone" aria-hidden="true" />
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
          {seal.label}
        </p>
        <p className="mt-1 font-display text-base font-semibold text-foreground">{seal.value}</p>
        {seal.note ? (
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{seal.note}</p>
        ) : null}
      </div>
    </article>
  )
})

export function Credentials() {
  return (
    <section
      id="credenciais"
      className="relative border-y border-border bg-muted/40 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <MeshBackground variant="subtle" />

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Profissionalismo"
            title="Informações que você pode"
            titleAccent="verificar com tranquilidade"
            description={SITE.voice.credentialsNote}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="paper-card paper-ledger mt-12">
            <div className="paper-ledger-grid cols-2 cols-4 grid">
              {CREDENTIALS.map((credential) => {
                const Icon = iconMap[credential.icon as keyof typeof iconMap]

                return (
                  <CredentialCell
                    key={credential.label}
                    credential={credential}
                    Icon={Icon}
                  />
                )
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_SEALS.map((seal) => {
              const Icon = trustIconMap[seal.icon as keyof typeof trustIconMap]

              return <TrustSealCell key={seal.label} seal={seal} Icon={Icon} />
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
