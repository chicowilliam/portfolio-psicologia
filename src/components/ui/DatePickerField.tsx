import { useState } from 'react'
import { DayPicker } from '@daypicker/react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarBlankIcon } from '@phosphor-icons/react/CalendarBlank'
import { Dialog, Popover } from 'radix-ui'
import { Button } from '@/components/ui/Button'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import {
  CALENDAR_DISABLED_MATCHERS,
  getCalendarClassNames,
} from '@/lib/calendar-styles'
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
}: {
  selected?: Date
  onSelect: (date: Date | undefined) => void
}) {
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      disabled={CALENDAR_DISABLED_MATCHERS}
      locale={ptBR}
      classNames={getCalendarClassNames()}
      showOutsideDays
    />
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

  function handleSelect(date: Date | undefined) {
    onChange(date)
    if (date && !isMobile) {
      setOpen(false)
    }
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
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>{triggerButton}</Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="dialog-overlay fixed inset-0 z-50 bg-foreground/25 backdrop-blur-sm" />
            <Dialog.Content
              className="dialog-sheet fixed inset-x-0 bottom-0 z-50 max-h-[90dvh] overflow-y-auto rounded-t-3xl border border-border bg-card p-6 shadow-elevated outline-none"
              data-lenis-prevent
            >
              <Dialog.Title className="font-display text-lg font-semibold text-foreground">
                {label}
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-muted-foreground">
                Escolha um dia disponível. Domingos não estão disponíveis.
              </Dialog.Description>
              <div className="mt-5 flex justify-center">
                <BookingCalendar selected={value} onSelect={handleSelect} />
              </div>
              <Button
                type="button"
                className="mt-6 w-full"
                disabled={!value}
                onClick={() => setOpen(false)}
              >
                Confirmar data
              </Button>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ) : (
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger asChild>{triggerButton}</Popover.Trigger>
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
