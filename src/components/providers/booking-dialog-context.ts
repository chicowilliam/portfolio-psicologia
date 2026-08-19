import { createContext, useContext } from 'react'

export interface BookingDialogContextValue {
  isOpen: boolean
  openBooking: () => void
  closeBooking: () => void
}

export const BookingDialogContext = createContext<BookingDialogContextValue | null>(
  null,
)

export function useBookingDialog() {
  const context = useContext(BookingDialogContext)
  if (!context) {
    throw new Error('useBookingDialog must be used within BookingDialogProvider')
  }
  return context
}
