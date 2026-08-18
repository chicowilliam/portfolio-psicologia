import { memo } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { GlassCard } from '@/components/ui/GlassCard'
import { MeshBackground } from '@/components/ui/MeshBackground'
import { MAPS_EMBED_URL, SITE, WHATSAPP_URL } from '@/lib/constants'

interface ContactCardProps {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}

const ContactCard = memo(function ContactCard({
  icon,
  title,
  children,
}: ContactCardProps) {
  return (
    <GlassCard as="article" hover className="flex gap-4 p-6">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-foreground">{title}</h3>
        {children}
      </div>
    </GlassCard>
  )
})

export function Contact() {
  return (
    <section
      id="contato"
      className="relative border-t border-border bg-muted/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <MeshBackground variant="subtle" />

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Contato"
            title="O consultório e"
            titleAccent="como falar comigo"
            description="Horários, localização e canais diretos — sem formulários intermediários se preferir conversar primeiro."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.04}>
          <div
            className="mt-8 rounded-2xl border border-accent/25 bg-accent/8 px-4 py-4 text-sm leading-relaxed text-muted-foreground sm:px-5"
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
            <div className="space-y-6">
              <ContactCard
                icon={<MapPin className="size-5" aria-hidden="true" />}
                title="Consultório"
              >
                <p className="mt-1 text-sm text-muted-foreground">
                  {SITE.contact.address}
                  <br />
                  {SITE.contact.neighborhood} — {SITE.contact.city}
                </p>
                <p className="mt-2 text-xs text-muted-foreground/80">
                  Prédio comercial com acesso por elevador. Entrada acessível mediante
                  combinação prévia.
                </p>
              </ContactCard>

              <ContactCard
                icon={<Clock className="size-5" aria-hidden="true" />}
                title="Horário de atendimento"
              >
                <p className="mt-1 text-sm text-muted-foreground">
                  {SITE.contact.schedule}
                </p>
              </ContactCard>

              <ContactCard
                icon={<Phone className="size-5" aria-hidden="true" />}
                title="WhatsApp"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm font-medium text-primary hover:underline"
                >
                  {SITE.contact.whatsappDisplay}
                </a>
                <Button
                  href={WHATSAPP_URL}
                  external
                  variant="outline"
                  size="sm"
                  className="mt-3"
                >
                  Enviar mensagem
                </Button>
              </ContactCard>

              <ContactCard
                icon={<Mail className="size-5" aria-hidden="true" />}
                title="E-mail"
              >
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="mt-1 block text-sm text-primary hover:underline"
                >
                  {SITE.contact.email}
                </a>
              </ContactCard>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <GlassCard hover={false} className="overflow-hidden">
              <div className="aspect-[4/3] w-full">
                <iframe
                  title={`Mapa do consultório — ${SITE.contact.neighborhood}, ${SITE.contact.city}`}
                  src={MAPS_EMBED_URL}
                  className="size-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
