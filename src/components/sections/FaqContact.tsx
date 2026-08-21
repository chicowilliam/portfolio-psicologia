import { lazy, Suspense, useState } from 'react'
import { CaretDownIcon } from '@phosphor-icons/react/CaretDown'
import { WhatsappLogoIcon } from '@phosphor-icons/react/WhatsappLogo'
import { motion, useReducedMotion } from '@/lib/motion-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { BOOKING_CTA, FAQ_ITEMS, SITE, WHATSAPP_URL } from '@/lib/constants'
import { useBookingDialog } from '@/components/providers/BookingDialogProvider'

const BookingFormContent = lazy(() =>
  import('@/components/booking/BookingFormContent').then((m) => ({
    default: m.BookingFormContent,
  })),
)

export function FaqContact() {
  const [openId, setOpenId] = useState<string | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const { openBooking } = useBookingDialog()

  return (
    <>
      <section id="duvidas" className="border-t border-border bg-background-alt px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-clay">
              Dúvidas
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.85rem,4vw,2.6rem)] leading-[1.12] text-foreground">
              O que costumam perguntar
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-8 divide-y divide-border border-y border-border">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id
                return (
                  <div key={item.id}>
                    <button
                      type="button"
                      id={`faq-trigger-${item.id}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className="pr-2 font-medium text-foreground">{item.question}</span>
                      <motion.span
                        animate={{ rotate: prefersReducedMotion ? 0 : isOpen ? 180 : 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}
                      >
                        <CaretDownIcon className="size-5 shrink-0 text-subtle" aria-hidden="true" />
                      </motion.span>
                    </button>
                    <div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${item.id}`}
                      className="accordion-panel"
                      data-open={isOpen ? 'true' : 'false'}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-5 pr-6 text-sm leading-relaxed text-muted-foreground">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="contato" className="px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-clay">
                  Contato
                </p>
                <h2 className="mt-3 max-w-[14ch] font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] text-foreground">
                  Podemos começar por uma conversa.
                </h2>
                <p className="mt-5 max-w-[40ch] text-[1.02rem] leading-[1.7] text-muted-foreground">
                  Em até {SITE.responseTimeHours} horas úteis respondo pelo WhatsApp ou e-mail.
                  É um primeiro contato humano, não uma reserva automática.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button size="lg" onClick={() => openBooking()}>
                    {BOOKING_CTA.nav}
                  </Button>
                  {WHATSAPP_URL ? (
                    <Button size="lg" variant="outline" href={WHATSAPP_URL} external className="gap-2">
                      <WhatsappLogoIcon className="size-5" weight="fill" aria-hidden="true" />
                      WhatsApp
                    </Button>
                  ) : null}
                </div>

                <div className="mt-8 space-y-2 text-sm text-muted-foreground">
                  <p>
                    <a
                      href={`mailto:${SITE.contact.email}`}
                      className="text-foreground underline-offset-2 hover:underline"
                    >
                      {SITE.contact.email}
                    </a>
                  </p>
                  <p>
                    {SITE.contact.neighborhood}, {SITE.contact.city}
                  </p>
                  <p>{SITE.contact.schedule}</p>
                </div>
              </div>

              <div className="border border-border bg-card p-5 sm:p-7" id="agendamento">
                <h3 className="font-display text-xl text-foreground">Solicitar horário</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Preencha abaixo. Retorno em até {SITE.responseTimeHours}h úteis.
                </p>
                <div className="mt-6">
                  <Suspense
                    fallback={
                      <p className="py-6 text-sm text-muted-foreground">Carregando formulário…</p>
                    }
                  >
                    <BookingFormContent />
                  </Suspense>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
