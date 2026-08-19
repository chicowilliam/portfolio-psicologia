import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { BookingDialog } from '@/components/booking/BookingDialog'
import {
  BookingDialogContext,
  type BookingDialogContextValue,
} from '@/components/providers/booking-dialog-context'

export function BookingDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openBooking = useCallback(() => setIsOpen(true), [])
  const closeBooking = useCallback(() => setIsOpen(false), [])

  const value = useMemo<BookingDialogContextValue>(
    () => ({ isOpen, openBooking, closeBooking }),
    [isOpen, openBooking, closeBooking],
  )

  return (
    <BookingDialogContext.Provider value={value}>
      {children}
      <BookingDialog />
    </BookingDialogContext.Provider>
  )
}

export { useBookingDialog } from '@/components/providers/booking-dialog-context'
