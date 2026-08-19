import { motion, useReducedMotion } from '@/lib/motion-react'
import { ScrollReveal, ScrollRevealGroup } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PullQuote } from '@/components/ui/PullQuote'
import { Button } from '@/components/ui/Button'
import { GlassCard } from '@/components/ui/GlassCard'
import { LivingPortrait } from '@/components/ui/LivingPortrait'
import { CalendarIcon } from '@phosphor-icons/react/Calendar'
import { HouseLineIcon } from '@phosphor-icons/react/HouseLine'
import { WhatsappLogoIcon } from '@phosphor-icons/react/WhatsappLogo'
import { SealCheckIcon } from '@phosphor-icons/react/SealCheck'
import { useBookingDialog } from '@/components/providers/BookingDialogProvider'
import { SITE, TIMELINE, WHATSAPP_URL } from '@/lib/constants'
import { POSE_B_PORTRAIT_IMAGES } from '@/lib/portrait-images'

function TimelineConnector() {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div
        className="absolute bottom-0 left-[19px] top-0 w-px bg-border lg:left-1/2 lg:-translate-x-px"
        aria-hidden="true"
      />
    )
  }

  return (
    <div
      className="absolute bottom-0 left-[19px] top-0 w-px overflow-hidden bg-border/30 lg:left-1/2 lg:-translate-x-px"
      aria-hidden="true"
    >
      <motion.div
        className="h-full w-full origin-top bg-border"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}

export function About() {
  const { openBooking } = useBookingDialog()

  return (
    <section id="sobre" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Sobre mim"
            title="Quem acompanha você"
            titleAccent="neste processo"
            description="Formação, trajetória e a forma como conduzo cada sessão — com escuta, evidência e respeito ao seu tempo."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal delay={0.05}>
            <div>
              <div className="paper-frame relative aspect-[4/5] overflow-hidden">
                <LivingPortrait
                  images={POSE_B_PORTRAIT_IMAGES}
                  ariaLabel={SITE.psychologist.photoAlt}
                  variant="expressive"
                  imageClassName="object-[center_22%] sm:object-[center_18%]"
                  className="absolute inset-0"
                />
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_22%_14%,rgba(255,255,255,0.36),transparent_42%)]"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/30" aria-hidden="true" />

                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/55 bg-background/82 px-3 py-1 text-[11px] font-medium text-primary shadow-soft backdrop-blur-sm sm:left-6 sm:top-6">
                  <HouseLineIcon className="size-3" aria-hidden="true" />
                  Consultório em {SITE.contact.neighborhood}
                </div>

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/42 via-foreground/8 to-transparent p-5 sm:p-8">
                  <div className="glass-quote rounded-2xl px-4 py-3 shadow-soft sm:px-5 sm:py-4">
                    <p className="font-display text-base font-semibold text-foreground sm:text-lg">
                      {SITE.psychologist.name}
                    </p>
                    <p className="text-xs text-primary sm:text-sm">
                      CRP {SITE.psychologist.crp}
                    </p>
                  </div>
                </div>
              </div>

              <GlassCard
                hover={false}
                variant="note"
                className="-mt-5 block rounded-2xl p-4 shadow-card sm:hidden"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                  Sinais rápidos de confiança
                </p>
                <div className="mt-3 space-y-2">
                  <p className="flex items-center gap-2 text-sm text-foreground">
                    <SealCheckIcon className="size-4 text-primary" weight="duotone" aria-hidden="true" />
                    Registro profissional verificável
                  </p>
                  <p className="flex items-center gap-2 text-sm text-foreground">
                    <CalendarIcon className="size-4 text-primary" weight="duotone" aria-hidden="true" />
                    Mais de 10 anos de atuação clínica
                  </p>
                  <p className="flex items-center gap-2 text-sm text-foreground">
                    <HouseLineIcon className="size-4 text-primary" weight="duotone" aria-hidden="true" />
                    Atendimento presencial e online
                  </p>
                </div>
                <a
                  href={SITE.crpVerifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Verificar CRP agora
                </a>

                <div className="mt-4 space-y-2 border-t border-border/60 pt-4">
                  <p className="text-sm font-medium text-foreground">
                    Quer dar o primeiro passo hoje?
                  </p>
                  <Button size="md" className="w-full" onClick={() => openBooking()}>
                    Agendar consulta
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full gap-2"
                    href={WHATSAPP_URL}
                    external
                  >
                    <WhatsappLogoIcon className="size-4" weight="duotone" aria-hidden="true" />
                    Tirar uma dúvida no WhatsApp
                  </Button>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="space-y-6">
              <PullQuote
                quote={SITE.voice.aboutPullQuote}
                attribution={SITE.psychologist.name}
                className="mb-6"
              />

              <p className="leading-relaxed text-muted-foreground">
                {SITE.psychologist.bio}
              </p>

              <GlassCard hover={false} variant="note" className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Abordagem terapêutica
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Trabalho com {SITE.psychologist.approach}, integrando técnicas
                  validadas cientificamente com uma escuta empática e
                  personalizada. Cada processo terapêutico é único — não existe
                  receita pronta, mas sim um caminho construído em parceria.
                </p>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16">
          <ScrollReveal>
            <h3 className="mb-8 font-display text-2xl font-semibold text-foreground">
              Trajetória profissional
            </h3>
          </ScrollReveal>

          <div className="relative">
            <TimelineConnector />

            <ScrollRevealGroup className="space-y-0">
              {TIMELINE.map((item, index) => (
                <div key={item.year} className="relative grid gap-4 pb-10 lg:grid-cols-2 lg:gap-8">
                  <div
                    className={`flex items-start gap-4 lg:pr-12 ${
                      index % 2 === 0
                        ? 'lg:col-start-1 lg:flex-row-reverse lg:text-right'
                        : 'lg:col-start-2'
                    }`}
                  >
                    <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card text-xs font-semibold text-primary">
                      {item.year}
                    </div>
                    <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                      <p className="text-sm font-semibold text-primary">{item.year}</p>
                      <h4 className="mt-1 font-display text-lg font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollRevealGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
