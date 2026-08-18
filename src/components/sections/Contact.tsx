import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { SITE, WHATSAPP_URL } from '@/lib/constants'

export function Contact() {
  return (
    <section
      id="contato"
      className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Contato"
            title="Localização e horários"
            description="Estou à disposição para esclarecer dúvidas sobre o atendimento."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <article className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Consultório</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {SITE.contact.address}
                    <br />
                    {SITE.contact.neighborhood} — {SITE.contact.city}
                  </p>
                </div>
              </article>

              <article className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Horário de atendimento</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {SITE.contact.schedule}
                  </p>
                </div>
              </article>

              <article className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">WhatsApp</h3>
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
                </div>
              </article>

              <article className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">E-mail</h3>
                  <a
                    href={`mailto:${SITE.contact.email}`}
                    className="mt-1 block text-sm text-primary hover:underline"
                  >
                    {SITE.contact.email}
                  </a>
                </div>
              </article>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <div className="flex aspect-[4/3] items-center justify-center bg-muted">
                <div className="text-center px-6">
                  <MapPin className="mx-auto size-10 text-primary/40" aria-hidden="true" />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Mapa interativo — substitua pelo embed do Google Maps
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground/70">
                    {SITE.contact.address}, {SITE.contact.neighborhood}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
