import { Calendar, X } from 'lucide-react'
import { Dialog } from 'radix-ui'
import { BookingFormContent } from '@/components/booking/BookingFormContent'
import { useBookingDialog } from '@/components/providers/BookingDialogProvider'
import { SITE } from '@/lib/constants'

export function BookingDialog() {
  const { isOpen, closeBooking } = useBookingDialog()

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeBooking()}>
      <Dialog.Portal>
        <Dialog.Overlay className="booking-dialog-overlay dialog-overlay fixed inset-0 z-[60]" />
        <Dialog.Content
          className="booking-dialog-content dialog-sheet fixed inset-x-0 bottom-0 z-[70] flex max-h-[min(94dvh,100%)] flex-col outline-none sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:w-[min(100%,42rem)] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl"
          aria-describedby="booking-dialog-description"
        >
          <div className="booking-dialog-header shrink-0 px-5 pb-4 pt-5 sm:px-8 sm:pt-7">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="mb-2 inline-flex items-center gap-2 text-primary">
                  <Calendar className="size-4" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Agendamento
                  </span>
                </div>
                <Dialog.Title className="font-display text-xl font-semibold leading-tight text-foreground sm:text-2xl">
                  Solicite seu horário de consulta
                </Dialog.Title>
                <Dialog.Description
                  id="booking-dialog-description"
                  className="mt-2 text-sm leading-relaxed text-muted-foreground"
                >
                  Preencha abaixo — em até {SITE.responseTimeHours} horas úteis respondo
                  pelo WhatsApp ou e-mail. É uma solicitação, não uma reserva automática.
                </Dialog.Description>
              </div>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Fechar formulário"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              </Dialog.Close>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              {SITE.voice.bookingReassurance}
            </p>
          </div>

          <div className="booking-dialog-body min-h-0 flex-1 overflow-y-auto px-5 pb-6 sm:px-8 sm:pb-8">
            <BookingFormContent closeAfterSuccess />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
