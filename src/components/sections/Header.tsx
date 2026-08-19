import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from '@/lib/motion-react'
import { createPortal } from 'react-dom'
import { ListIcon } from '@phosphor-icons/react/List'
import { XIcon } from '@phosphor-icons/react/X'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { useBookingDialog } from '@/components/providers/BookingDialogProvider'
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { useHideOnScroll } from '@/hooks/useHideOnScroll'
import { useScrollTo } from '@/hooks/useScrollTo'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { easeOut, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/utils'

const SECTION_IDS = [
  'inicio',
  'sobre',
  'especialidades',
  'como-funciona',
  'duvidas',
  'agendamento',
  'contato',
]

const navLinkVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
}

function MobileMenu({
  isOpen,
  onClose,
  onNavClick,
  onOpenBooking,
  isLinkActive,
}: {
  isOpen: boolean
  onClose: () => void
  onNavClick: (href: string) => void
  onOpenBooking: () => void
  isLinkActive: (href: string) => boolean
}) {
  const prefersReducedMotion = useReducedMotion()
  const panelRef = useFocusTrap(isOpen)

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    if (!isOpen) return

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <div className="mobile-menu-root fixed inset-0 z-[120] lg:hidden" aria-hidden={false}>
          <motion.button
            type="button"
            className="mobile-menu-overlay dialog-overlay absolute inset-0"
            aria-label="Fechar menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: easeOut }}
            onClick={onClose}
          />

          <motion.aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            aria-describedby="mobile-menu-description"
            className={cn(
              'mobile-menu-panel dialog-panel absolute inset-y-0 left-0 flex w-[min(100%,20rem)] flex-col outline-none',
              prefersReducedMotion && 'dialog-panel-reduced',
            )}
            data-lenis-prevent
            initial={prefersReducedMotion ? false : { x: '-100%' }}
            animate={{ x: 0 }}
            exit={prefersReducedMotion ? undefined : { x: '-100%' }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu-header px-5 pb-5 pt-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 pr-2">
                  <h2
                    id="mobile-menu-title"
                    className="font-display text-xl font-semibold leading-tight text-foreground"
                  >
                    {SITE.psychologist.name}
                  </h2>
                  <p id="mobile-menu-description" className="mt-1 text-sm text-muted-foreground">
                    {SITE.psychologist.title} · CRP {SITE.psychologist.crp}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Fechar menu"
                >
                  <XIcon className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <motion.nav
              className="flex flex-1 flex-col gap-1.5 overflow-y-auto px-4 py-5"
              aria-label="Navegação mobile"
              variants={prefersReducedMotion ? undefined : staggerContainer(0.05)}
              initial="hidden"
              animate="visible"
            >
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.href)

                return (
                  <motion.div
                    key={link.href}
                    variants={prefersReducedMotion ? undefined : navLinkVariants}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        onNavClick(link.href)
                      }}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'mobile-menu-link flex min-h-12 items-center rounded-2xl px-4 text-[15px] font-medium',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card',
                        active
                          ? 'mobile-menu-link-active font-semibold'
                          : 'text-foreground/90',
                      )}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                )
              })}
            </motion.nav>

            <div className="mobile-menu-footer px-4 py-5">
              <Button className="w-full" onClick={onOpenBooking}>
                Agendar consulta
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Atendimento presencial e online
              </p>
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
  const [scrolled, setScrolled] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const scrollTo = useScrollTo()
  const { openBooking, isOpen: isBookingOpen } = useBookingDialog()
  const activeSection = useScrollSpy(SECTION_IDS)
  const navHidden = useHideOnScroll(isMobileOpen || isBookingOpen)
  useBodyScrollLock(isMobileOpen)

  useEffect(() => {
    const hero = document.getElementById('inicio')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-72px 0px 0px 0px' },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setIsMobileOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeMobileMenu = useCallback(() => setIsMobileOpen(false), [])

  function handleOpenBooking() {
    setIsMobileOpen(false)
    window.setTimeout(() => openBooking(), 80)
  }

  function handleNavClick(href: string) {
    if (href === '#agendamento') {
      handleOpenBooking()
      return
    }
    scrollTo(href)
    setIsMobileOpen(false)
  }

  function isLinkActive(href: string) {
    return activeSection === href.replace('#', '')
  }

  return (
    <>
      <motion.header
        className="site-header fixed inset-x-0 top-0 z-50 border-b"
        initial={false}
        animate={{
          y: navHidden ? '-100%' : '0%',
          backgroundColor: scrolled
            ? 'color-mix(in srgb, var(--color-background) 42%, transparent)'
            : 'color-mix(in srgb, var(--color-background) 18%, transparent)',
          borderColor: scrolled
            ? 'color-mix(in srgb, var(--color-border) 40%, transparent)'
            : 'transparent',
          boxShadow: scrolled ? 'var(--shadow-soft)' : '0 0 0 0 transparent',
        }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: easeOut }}
      >
        <div className="mx-auto grid min-h-16 max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-2 px-4 sm:gap-3 sm:px-6 lg:flex lg:justify-between lg:gap-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className={cn(
                'mobile-menu-trigger relative inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-full text-foreground transition-colors duration-200 lg:hidden',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                isMobileOpen && 'mobile-menu-trigger-open',
              )}
              aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu-title"
              onClick={() => setIsMobileOpen((open) => !open)}
            >
              {isMobileOpen ? (
                <XIcon className="size-5" aria-hidden="true" />
              ) : (
                <ListIcon className="size-5" aria-hidden="true" />
              )}
            </button>

            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#inicio')
              }}
              className={cn(
                'group flex min-w-0 flex-col overflow-hidden transition-[opacity,max-width] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                scrolled
                  ? 'max-w-[11.5rem] opacity-100 sm:max-w-xs lg:max-w-none'
                  : 'pointer-events-none max-w-0 opacity-0',
              )}
              aria-hidden={!scrolled}
              tabIndex={scrolled ? 0 : -1}
            >
              <span className="truncate font-display text-base font-semibold text-foreground transition-colors group-hover:text-primary sm:text-lg">
                {SITE.psychologist.name}
              </span>
              <span className="hidden truncate text-xs text-muted-foreground min-[400px]:inline">
                CRP {SITE.psychologist.crp}
              </span>
            </a>
          </div>

          <nav
            className="hidden items-center justify-center gap-1 lg:flex"
            aria-label="Navegação principal"
          >
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href)

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                    active ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="desktop-nav-indicator"
                      className="absolute inset-0 rounded-lg bg-primary/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              )
            })}
          </nav>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <Button size="sm" onClick={handleOpenBooking} className="hidden min-[430px]:inline-flex">
              Agendar consulta
            </Button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={closeMobileMenu}
        onNavClick={handleNavClick}
        onOpenBooking={handleOpenBooking}
        isLinkActive={isLinkActive}
      />
    </>
  )
}
