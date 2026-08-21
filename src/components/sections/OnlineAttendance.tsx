import { CheckCircleIcon } from '@phosphor-icons/react/CheckCircle'
import { MonitorIcon } from '@phosphor-icons/react/Monitor'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { SITE } from '@/lib/constants'

const checklist: Array<{
  title: string
  description: string
  href?: string
  linkLabel?: string
}> = [
  {
    title: 'Cadastro e-Psi',
    description: 'Atendimento online conforme Resolução CFP nº 11/2018.',
    href: SITE.online.ePsiUrl,
    linkLabel: 'Consultar e-Psi',
  },
  {
    title: 'Plataforma segura',
    description: SITE.online.platform,
  },
  {
    title: 'TCLE e orientações',
    description: SITE.online.tcleNote,
  },
  {
    title: 'Sessões síncronas',
    description: SITE.online.syncNote,
  },
] 

export function OnlineAttendance() {
  return (
    <section
      id="atendimento-online"
      className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Atendimento online"
            title="Presencial, online ou"
            titleAccent="combinado — com segurança"
            description={
              <>
                Modalidade híbrida disponível. Online exige cadastro no e-Psi, ambiente privado e
                consentimento informado (LGPD + TCLE).
              </>
            }
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <ScrollReveal delay={0.04}>
            <GlassCard hover={false} variant="note" className="p-6 sm:p-8">
              <div className="mb-5 inline-flex items-center gap-2 text-primary">
                <MonitorIcon className="size-5" weight="duotone" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.1em]">
                  Requisitos éticos e técnicos
                </span>
              </div>

              <ul className="space-y-4">
                {checklist.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <CheckCircleIcon
                      className="mt-0.5 size-5 shrink-0 text-primary"
                      weight="duotone"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      {'href' in item && item.href && item.linkLabel ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1.5 inline-block text-sm font-medium text-primary underline-offset-2 hover:underline"
                        >
                          {item.linkLabel}
                        </a>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="flex h-full flex-col justify-center rounded-[0.75rem_1.25rem_1.25rem_0.75rem] border border-border bg-accent/10 px-6 py-7 sm:px-8">
              <p className="font-display text-lg font-semibold leading-snug text-foreground">
                &ldquo;{SITE.brand.manifesto}&rdquo;
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {SITE.online.urgencyNote}
              </p>
              {SITE.online.ePsiRegistered ? (
                <span className="paper-chip mt-5 w-fit text-xs text-primary">
                  Cadastro e-Psi ativo
                </span>
              ) : null}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
