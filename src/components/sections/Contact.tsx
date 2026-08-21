import { memo } from 'react'
import { ClockIcon } from '@phosphor-icons/react/Clock'
import { EnvelopeSimpleIcon } from '@phosphor-icons/react/EnvelopeSimple'
import { MapPinIcon } from '@phosphor-icons/react/MapPin'
import { WhatsappLogoIcon } from '@phosphor-icons/react/WhatsappLogo'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { MeshBackground } from '@/components/ui/MeshBackground'
import { MAPS_EMBED_URL, SITE, WHATSAPP_URL } from '@/lib/constants'

interface ContactRowProps {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}

const ContactRow = memo(function ContactRow({
  icon,
  title,
  children,
}: ContactRowProps) {
  return (
    <article className="paper-ledger-row flex gap-4 px-5 py-5 sm:px-6">
      <div className="mt-0.5 shrink-0 text-primary">{icon}</div>
      <div className="min-w-0">
        <h3 className="font-medium text-foreground">{title}</h3>
        {children}
      </div>
    </article>
  )
})

export function Contact() {
  return (
    <section
      id="contato"
      className="relative border-t border-border bg-muted/30 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <MeshBackground variant="subtle" />

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Contato"
            title="O consultório e"
            titleAccent="como falar comigo"
            description={
              <>
                Horários, localização e canais diretos,{' '}
                <strong className="font-semibold text-foreground">
                  sem formulários intermediários
                </strong>{' '}
                se preferir conversar primeiro.
              </>
            }
          />
        </ScrollReveal>

        <ScrollReveal delay={0.04}>
          <div
            className="mt-8 rounded-sm border-0 bg-accent/8 px-4 py-4 text-sm leading-relaxed text-muted-foreground sm:px-5"
            role="note"
          >
            <strong className="font-medium text-foreground">Importante:</strong> este
            canal não substitui atendimento de urgência. Em crise ou risco imediato,
            ligue{' '}
            <a href={`tel:${SITE.emergency.cvv}`} className="font-medium text-primary hover:underline">
              {SITE.emergency.cvv} (CVV)
            </a>{' '}
            ou{' '}
            <a href={`tel:${SITE.emergency.samu}`} className="font-medium text-primary hover:underline">
              {SITE.emergency.samu} (SAMU)
            </a>
            .
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <ScrollReveal delay={0.05}>
            <div className="paper-card paper-ledger">
              <ContactRow
                icon={<MapPinIcon className="size-5" weight="duotone" aria-hidden="true" />}
                title="Consultório"
              >
                <p className="mt-1 text-sm text-muted-foreground">
                  {SITE.contact.address}
                  <br />
                  {SITE.contact.neighborhood}, {SITE.contact.city}
                </p>
                <p className="mt-2 text-xs text-muted-foreground/80">
                  Prédio comercial com acesso por elevador. Entrada acessível mediante
                  combinação prévia.
                </p>
              </ContactRow>

              <ContactRow
                icon={<ClockIcon className="size-5" weight="duotone" aria-hidden="true" />}
                title="Horário de atendimento"
              >
                <p className="mt-1 text-sm text-muted-foreground">
                  {SITE.contact.schedule}
                </p>
              </ContactRow>

              <ContactRow
                icon={<WhatsappLogoIcon className="size-5" weight="duotone" aria-hidden="true" />}
                title="WhatsApp"
              >
                <p className="mt-1 text-sm text-muted-foreground">
                  Mensagem direta para agendamento e dúvidas iniciais.
                </p>
                {WHATSAPP_URL ? (
                  <Button
                    href={WHATSAPP_URL}
                    external
                    variant="outline"
                    size="sm"
                    className="mt-3 gap-2"
                  >
                    <WhatsappLogoIcon className="size-4" weight="fill" aria-hidden="true" />
                    Chamar no WhatsApp
                  </Button>
                ) : null}
              </ContactRow>

              <ContactRow
                icon={<EnvelopeSimpleIcon className="size-5" weight="duotone" aria-hidden="true" />}
                title="E-mail"
              >
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="mt-1 block text-sm text-primary hover:underline"
                >
                  {SITE.contact.email}
                </a>
              </ContactRow>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="paper-frame">
              <div className="aspect-[4/3] w-full">
                <iframe
                  title={`Mapa do consultório, ${SITE.contact.neighborhood}, ${SITE.contact.city}`}
                  src={MAPS_EMBED_URL}
                  className="size-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
