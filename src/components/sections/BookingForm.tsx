import { lazy, Suspense } from 'react'
import { CalendarIcon } from '@phosphor-icons/react/Calendar'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { MeshBackground } from '@/components/ui/MeshBackground'
import { SITE } from '@/lib/constants'
import { useBookingDialog } from '@/components/providers/BookingDialogProvider'

const BookingFormContent = lazy(() =>
  import('@/components/booking/BookingFormContent').then((module) => ({
    default: module.BookingFormContent,
  })),
)

export function BookingForm() {
  const { openBooking } = useBookingDialog()

  return (
    <section
      id="agendamento"
      className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <MeshBackground variant="cta" />

      <div className="relative mx-auto max-w-2xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Agendamento"
            title="Vamos encontrar"
            titleAccent="um horário que funcione"
            description={
              <>
                Preencha o formulário, em até{' '}
                <strong className="font-semibold text-foreground">
                  {SITE.responseTimeHours} horas úteis
                </strong>{' '}
                respondo pelo WhatsApp ou e-mail. É uma solicitação, não uma reserva automática.
              </>
            }
          />
          <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-relaxed text-muted-foreground">
            {SITE.voice.bookingReassurance}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2" onClick={openBooking}>
              <CalendarIcon className="size-5" weight="duotone" aria-hidden="true" />
              Abrir formulário de agendamento
            </Button>
            <p className="text-center text-xs text-muted-foreground sm:text-left">
              O formulário abre sobre a página, você não sai do site.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="paper-card mt-10 p-6 sm:p-8">
            <Suspense
              fallback={
                <div className="py-8 text-center text-sm text-muted-foreground">
                  Carregando formulário…
                </div>
              }
            >
              <BookingFormContent />
            </Suspense>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
