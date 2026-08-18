import {
  createContext,
  lazy,
  Suspense,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

interface BookingDialogContextValue {
  isOpen: boolean
  openBooking: () => void
  closeBooking: () => void
}

const BookingDialogContext = createContext<BookingDialogContextValue | null>(null)

const BookingDialog = lazy(() =>
  import('@/components/booking/BookingDialog').then((module) => ({
    default: module.BookingDialog,
  })),
)

export function BookingDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openBooking = useCallback(() => setIsOpen(true), [])
  const closeBooking = useCallback(() => setIsOpen(false), [])

  const value = useMemo(
    () => ({ isOpen, openBooking, closeBooking }),
    [isOpen, openBooking, closeBooking],
  )

  return (
    <BookingDialogContext.Provider value={value}>
      {children}
      <Suspense fallback={null}>
        <BookingDialog />
      </Suspense>
    </BookingDialogContext.Provider>
  )
}

export function useBookingDialog() {
  const context = useContext(BookingDialogContext)
  if (!context) {
    throw new Error('useBookingDialog must be used within BookingDialogProvider')
  }
  return context
}
