import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from '@/lib/motion-react'
import { createPortal } from 'react-dom'
import { ListIcon } from '@phosphor-icons/react/List'
import { XIcon } from '@phosphor-icons/react/X'
import { Button } from '@/components/ui/Button'
import { BOOKING_CTA, NAV_LINKS, SITE } from '@/lib/constants'
import { useBookingDialog } from '@/components/providers/BookingDialogProvider'
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { useHideOnScroll } from '@/hooks/useHideOnScroll'
import { useScrollTo } from '@/hooks/useScrollTo'
import { easeOut } from '@/lib/motion'

function MobileMenu({
  isOpen,
  onClose,
  onNavClick,
  onOpenBooking,
}: {
  isOpen: boolean
  onClose: () => void
  onNavClick: (href: string) => void
  onOpenBooking: () => void
}) {
  const prefersReducedMotion = useReducedMotion()
  const panelRef = useFocusTrap(isOpen)

  useEffect(() => {
    if (!isOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[120] lg:hidden">
          <motion.button
            type="button"
            className="mobile-menu-overlay absolute inset-0"
            aria-label="Fechar menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            onClick={onClose}
          />
          <motion.aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className="mobile-menu-panel absolute inset-y-0 left-0 flex w-[min(100%,20rem)] flex-col"
            data-lenis-prevent
            initial={prefersReducedMotion ? false : { x: '-100%' }}
            animate={{ x: 0 }}
            exit={prefersReducedMotion ? undefined : { x: '-100%' }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <p className="font-display text-lg text-foreground">{SITE.psychologist.shortName}</p>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex size-11 items-center justify-center text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Fechar menu"
              >
                <XIcon className="size-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 px-3 py-4" aria-label="Navegação mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    onNavClick(link.href)
                  }}
                  className="flex min-h-11 items-center px-3 text-[1.05rem] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="border-t border-border p-4">
              <Button className="w-full" onClick={onOpenBooking}>
                {BOOKING_CTA.nav}
              </Button>
            </div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const scrollTo = useScrollTo()
  const { openBooking, isOpen: isBookingOpen } = useBookingDialog()
  const navHidden = useHideOnScroll(isMobileOpen || isBookingOpen)
  useBodyScrollLock(isMobileOpen)

  useEffect(() => {
    function onResize() {
      if (window.matchMedia('(min-width: 1024px)').matches) setIsMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMobileMenu = useCallback(() => setIsMobileOpen(false), [])

  function handleOpenBooking() {
    setIsMobileOpen(false)
    window.setTimeout(() => openBooking(), 80)
  }

  function handleNavClick(href: string) {
    scrollTo(href)
    setIsMobileOpen(false)
  }

  return (
    <>
      <motion.header
        className="site-header fixed inset-x-0 top-0 z-50"
        initial={false}
        animate={{ y: navHidden ? '-100%' : '0%' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: easeOut }}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-5 sm:h-16 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2">
            <button
              type="button"
              className="inline-flex size-11 touch-manipulation items-center justify-center text-foreground lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileOpen}
              onClick={() => setIsMobileOpen((o) => !o)}
            >
              {isMobileOpen ? <XIcon className="size-5" /> : <ListIcon className="size-5" />}
            </button>
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#inicio')
              }}
              className="truncate font-display text-[1.15rem] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-xl"
            >
              {SITE.psychologist.shortName}
            </a>
          </div>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <Button size="sm" onClick={handleOpenBooking}>
              <span className="lg:hidden">{BOOKING_CTA.short}</span>
              <span className="hidden lg:inline">{BOOKING_CTA.nav}</span>
            </Button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={closeMobileMenu}
        onNavClick={handleNavClick}
        onOpenBooking={handleOpenBooking}
      />
    </>
  )
}
