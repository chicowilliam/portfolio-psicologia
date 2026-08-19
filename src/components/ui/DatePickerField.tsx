import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from '@/lib/motion-react'
import { createPortal } from 'react-dom'
import { DayPicker } from '@daypicker/react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarBlankIcon } from '@phosphor-icons/react/CalendarBlank'
import { XIcon } from '@phosphor-icons/react/X'
import { Popover } from 'radix-ui'
import { Button } from '@/components/ui/Button'
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import {
  CALENDAR_DISABLED_MATCHERS,
  getCalendarClassNames,
} from '@/lib/calendar-styles'
import { easeOut } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface DatePickerFieldProps {
  label: string
  value?: Date
  onChange: (date: Date | undefined) => void
  error?: string
  id?: string
}

function BookingCalendar({
  selected,
  onSelect,
  mobile = false,
}: {
  selected?: Date
  onSelect: (date: Date | undefined) => void
  mobile?: boolean
}) {
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      disabled={CALENDAR_DISABLED_MATCHERS}
      locale={ptBR}
      classNames={getCalendarClassNames({ mobile })}
      showOutsideDays
    />
  )
}

function MobileDateSheet({
  open,
  onClose,
  label,
  value,
  onChange,
}: {
  open: boolean
  onClose: () => void
  label: string
  value?: Date
  onChange: (date: Date | undefined) => void
}) {
  const [pendingDate, setPendingDate] = useState<Date | undefined>(value)
  const panelRef = useFocusTrap(open)
  const prefersReducedMotion = useReducedMotion()
  useBodyScrollLock(open)

  useEffect(() => {
    if (open) setPendingDate(value)
  }, [open, value])

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    if (!open) return

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, onClose])

  function handleConfirm() {
    onChange(pendingDate)
    onClose()
  }

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div className="date-picker-sheet-root fixed inset-0 z-[220]" aria-hidden={false}>
          <motion.button
            type="button"
            className="date-picker-sheet-overlay absolute inset-0"
            aria-label="Fechar calendário"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: easeOut }}
            onClick={onClose}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="date-picker-sheet-title"
            aria-describedby="date-picker-sheet-description"
            className="date-picker-sheet absolute inset-x-0 bottom-0 outline-none"
            data-lenis-prevent
            initial={prefersReducedMotion ? false : { y: '100%' }}
            animate={{ y: 0 }}
            exit={prefersReducedMotion ? undefined : { y: '100%' }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="date-picker-sheet-handle" aria-hidden="true" />

            <div className="date-picker-sheet-header flex items-start justify-between gap-4 px-5 pt-2">
              <div className="min-w-0">
                <h2
                  id="date-picker-sheet-title"
                  className="font-display text-lg font-semibold text-foreground"
                >
                  {label}
                </h2>
                <p id="date-picker-sheet-description" className="mt-1 text-sm text-muted-foreground">
                  Escolha um dia disponível. Domingos não estão disponíveis.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Fechar calendário"
              >
                <XIcon className="size-4" aria-hidden="true" />
              </button>
            </div>

            <div className="date-picker-sheet-body mt-4 flex justify-center px-4 pb-2">
              <BookingCalendar
                mobile
                selected={pendingDate}
                onSelect={(date) => setPendingDate(date)}
              />
            </div>

            <div className="date-picker-sheet-footer px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3">
              <Button
                type="button"
                className="w-full touch-manipulation"
                disabled={!pendingDate}
                onClick={handleConfirm}
              >
                Confirmar data
              </Button>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}

export function DatePickerField({
  label,
  value,
  onChange,
  error,
  id = 'preferredDate',
}: DatePickerFieldProps) {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 767px)')

  const displayValue = value
    ? format(value, "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR })
    : 'Selecione uma data'

  const closeSheet = useCallback(() => setOpen(false), [])

  function handleSelect(date: Date | undefined) {
    onChange(date)
    if (date) setOpen(false)
  }

  const triggerButton = (
    <button
      type="button"
      id={id}
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className={cn(
        'group flex min-h-11 w-full touch-manipulation items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-left text-sm transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        error && 'border-error focus-visible:ring-error',
        !value && 'text-muted-foreground',
      )}
      onClick={() => {
        if (isMobile) setOpen(true)
      }}
    >
      <CalendarBlankIcon
        className="size-4 shrink-0 text-muted-foreground transition-colors group-focus-visible:text-primary"
        aria-hidden="true"
      />
      <span className={cn('flex-1 capitalize', value && 'text-foreground')}>
        {displayValue}
      </span>
    </button>
  )

  return (
    <div className="group space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-foreground transition-colors duration-200 group-focus-within:text-primary group-focus-within:font-semibold"
      >
        {label}
      </label>

      {isMobile ? (
        <>
          {triggerButton}
          <MobileDateSheet
            open={open}
            onClose={closeSheet}
            label={label}
            value={value}
            onChange={onChange}
          />
        </>
      ) : (
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger asChild>
            <button
              type="button"
              id={id}
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-invalid={error ? 'true' : undefined}
              aria-describedby={error ? `${id}-error` : undefined}
              className={cn(
                'group flex min-h-11 w-full items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-left text-sm transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                error && 'border-error focus-visible:ring-error',
                !value && 'text-muted-foreground',
              )}
            >
              <CalendarBlankIcon
                className="size-4 shrink-0 text-muted-foreground transition-colors group-focus-visible:text-primary"
                aria-hidden="true"
              />
              <span className={cn('flex-1 capitalize', value && 'text-foreground')}>
                {displayValue}
              </span>
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              align="start"
              sideOffset={8}
              className="z-50 rounded-2xl border border-border bg-card p-4 shadow-elevated outline-none"
            >
              <BookingCalendar selected={value} onSelect={handleSelect} />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      )}

      {error && (
        <p id={`${id}-error`} className="field-error-animate text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
