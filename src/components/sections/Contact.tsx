import { memo } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { GlassCard } from '@/components/ui/GlassCard'
import { MeshBackground } from '@/components/ui/MeshBackground'
import { SITE, WHATSAPP_URL } from '@/lib/constants'

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
            title="Localização e horários"
            description="Estou à disposição para esclarecer dúvidas sobre o atendimento."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
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
                <p className="mt-1 text-sm text-muted-foreground">
                  {SITE.contact.whatsappDisplay}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-3"
                  onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener')}
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
              <div className="flex aspect-[4/3] items-center justify-center bg-muted/60">
                <div className="px-6 text-center">
                  <MapPin className="mx-auto size-10 text-primary/40" aria-hidden="true" />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Mapa interativo — substitua pelo embed do Google Maps
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground/70">
                    {SITE.contact.address}, {SITE.contact.neighborhood}
                  </p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
