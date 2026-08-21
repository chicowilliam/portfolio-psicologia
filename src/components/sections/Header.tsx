import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from '@/lib/motion-react'
import { createPortal } from 'react-dom'
import { CalendarIcon } from '@phosphor-icons/react/Calendar'
import { XIcon } from '@phosphor-icons/react/X'
import { Button } from '@/components/ui/Button'
import { BOOKING_CTA, NAV_LINKS, SITE } from '@/lib/constants'
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
  'para-quem',
  'abordagem',
  'especialidades',
  'como-funciona',
  'consultorio',
  'atendimento-online',
  'conteudo',
  'duvidas',
  'agendamento',
  'contato',
]

const navLinkVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.38, ease: easeOut },
  },
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="mobile-menu-burger" aria-hidden="true">
      <span
        className={cn('mobile-menu-burger-line mobile-menu-burger-line-top', open && 'is-open')}
      />
      <span
        className={cn('mobile-menu-burger-line mobile-menu-burger-line-mid', open && 'is-open')}
      />
      <span
        className={cn('mobile-menu-burger-line mobile-menu-burger-line-bot', open && 'is-open')}
      />
    </span>
  )
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
              'mobile-menu-panel dialog-panel absolute inset-y-0 left-0 flex w-[min(100%,22.5rem)] flex-col outline-none',
              prefersReducedMotion && 'dialog-panel-reduced',
            )}
            data-lenis-prevent
            initial={prefersReducedMotion ? false : { x: '-100%' }}
            animate={{ x: 0 }}
            exit={prefersReducedMotion ? undefined : { x: '-100%' }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu-glow" aria-hidden="true" />
            <div className="mobile-menu-grain" aria-hidden="true" />

            <div className="mobile-menu-header px-5 pb-6 pt-7">
              <p className="mobile-menu-eyebrow">Explorar o site</p>
              <div className="mt-3 flex items-start justify-between gap-4">
                <div className="min-w-0 pr-2">
                  <h2
                    id="mobile-menu-title"
                    className="font-display text-[1.35rem] font-semibold leading-[1.15] tracking-[-0.01em] text-foreground"
                  >
                    {SITE.psychologist.name}
                  </h2>
                  <p id="mobile-menu-description" className="mt-1.5 text-sm text-muted-foreground">
                    {SITE.psychologist.title}
                  </p>
                  <span className="paper-chip mt-3 text-xs text-primary">
                    CRP {SITE.psychologist.crp}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="mobile-menu-close inline-flex size-10 shrink-0 items-center justify-center rounded-full text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Fechar menu"
                >
                  <XIcon className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <motion.nav
              className="mobile-menu-nav flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4"
              aria-label="Navegação mobile"
              variants={prefersReducedMotion ? undefined : staggerContainer(0.04)}
              initial="hidden"
              animate="visible"
            >
              {NAV_LINKS.map((link, index) => {
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
                        'mobile-menu-link group/link relative flex min-h-[3.25rem] items-center gap-3 rounded-[0.65rem_1.1rem_1.1rem_0.65rem] px-3.5 py-2.5',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card',
                        active && 'mobile-menu-link-active',
                      )}
                    >
                      <span className="mobile-menu-link-index" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={cn(
                          'mobile-menu-link-label font-medium',
                          active ? 'font-semibold text-primary' : 'text-foreground/88',
                        )}
                      >
                        {link.label}
                      </span>
                      <span
                        className={cn(
                          'mobile-menu-link-chevron ml-auto text-primary/50 transition-transform duration-200',
                          active && 'text-primary',
                        )}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </a>
                  </motion.div>
                )
              })}
            </motion.nav>

            <div className="mobile-menu-footer px-4 py-5">
              <div className="mobile-menu-footer-card glass-quote rounded-[0.75rem_1.25rem_1.25rem_0.75rem] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                  Pronto para começar?
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Solicite um horário e receba retorno em até {SITE.responseTimeHours}h úteis.
                </p>
                <Button className="mt-4 w-full gap-2" onClick={onOpenBooking}>
                  <CalendarIcon className="size-4" weight="duotone" aria-hidden="true" />
                  {BOOKING_CTA.primary}
                </Button>
              </div>
              <p className="mt-3 text-center text-[11px] tracking-[0.04em] text-muted-foreground/80">
                Presencial · Online · {SITE.contact.neighborhood}
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
        className="site-header fixed inset-x-0 top-0 z-50"
        initial={false}
        animate={{
          y: navHidden ? '-100%' : '0%',
          backgroundColor: scrolled
            ? 'color-mix(in srgb, var(--color-wine-mist) 62%, transparent)'
            : 'color-mix(in srgb, var(--color-wine-mist) 28%, transparent)',
          boxShadow: scrolled
            ? '0 8px 28px -18px rgb(58 36 40 / 0.18)'
            : '0 0 0 0 transparent',
        }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: easeOut }}
      >
        <div className="mx-auto grid min-h-16 max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-2 px-4 sm:gap-3 sm:px-6 lg:flex lg:justify-between lg:gap-8 lg:px-8">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className={cn(
                'mobile-menu-trigger relative inline-flex h-11 shrink-0 touch-manipulation items-center gap-2.5 rounded-full px-3 text-foreground transition-all duration-200 lg:hidden',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                isMobileOpen && 'mobile-menu-trigger-open',
              )}
              aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu-title"
              onClick={() => setIsMobileOpen((open) => !open)}
            >
              <HamburgerIcon open={isMobileOpen} />
              <span className="mobile-menu-trigger-label text-[11px] font-semibold uppercase tracking-[0.1em]">
                Menu
              </span>
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
            className="hidden items-center justify-center gap-2 lg:flex xl:gap-3"
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
                  data-active={active ? 'true' : 'false'}
                  className={cn(
                    'site-header-nav-link',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                    active ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="desktop-nav-indicator"
                      className="site-header-nav-indicator absolute inset-0"
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
              {BOOKING_CTA.short}
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
