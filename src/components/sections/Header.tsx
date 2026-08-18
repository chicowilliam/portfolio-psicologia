import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from '@/lib/motion-react'
import { Menu, X } from 'lucide-react'
import { Dialog } from 'radix-ui'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { useBookingDialog } from '@/components/providers/BookingDialogProvider'
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

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const scrollTo = useScrollTo()
  const { openBooking } = useBookingDialog()
  const activeSection = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const hero = document.getElementById('inicio')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-1px 0px 0px 0px' },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  function handleNavClick(href: string) {
    if (href === '#agendamento') {
      openBooking()
      setIsMobileOpen(false)
      return
    }
    scrollTo(href)
    setIsMobileOpen(false)
  }

  function isLinkActive(href: string) {
    return activeSection === href.replace('#', '')
  }

  return (
    <motion.header
      className="sticky top-0 z-40 border-b backdrop-blur-xl"
      initial={false}
      animate={{
        backgroundColor: scrolled
          ? 'color-mix(in srgb, var(--color-background) 72%, transparent)'
          : 'color-mix(in srgb, var(--color-background) 48%, transparent)',
        borderColor: scrolled
          ? 'color-mix(in srgb, var(--color-border) 55%, transparent)'
          : 'transparent',
        boxShadow: scrolled ? 'var(--shadow-soft)' : '0 0 0 0 transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(14px)',
      }}
      transition={{ duration: 0.35, ease: easeOut }}
    >
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#inicio')
          }}
          className="group flex shrink-0 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {SITE.psychologist.name}
          </span>
          <span className="text-xs text-muted-foreground">
            CRP {SITE.psychologist.crp}
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
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

        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => openBooking()}
          >
            Agendar consulta
          </Button>

          <Dialog.Root open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className={cn(
                  'mobile-menu-trigger relative inline-flex size-11 items-center justify-center rounded-full transition-colors duration-200 lg:hidden',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  isMobileOpen && 'mobile-menu-trigger-open',
                )}
                aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={isMobileOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18, ease: easeOut }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <X className="size-5" aria-hidden="true" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18, ease: easeOut }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Menu className="size-5" aria-hidden="true" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="mobile-menu-overlay dialog-overlay fixed inset-0 z-50 lg:hidden" />
              <Dialog.Content
                className={cn(
                  'mobile-menu-panel dialog-panel fixed inset-y-0 right-0 z-50 flex w-[min(100%,21rem)] flex-col outline-none lg:hidden',
                  prefersReducedMotion && 'dialog-panel-reduced',
                )}
                aria-describedby="mobile-menu-description"
              >
                <div className="mobile-menu-header px-5 pb-5 pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 pr-2">
                      <Dialog.Title className="font-display text-xl font-semibold leading-tight text-foreground">
                        {SITE.psychologist.name}
                      </Dialog.Title>
                      <Dialog.Description
                        id="mobile-menu-description"
                        className="mt-1 text-sm text-muted-foreground"
                      >
                        {SITE.psychologist.title} · CRP {SITE.psychologist.crp}
                      </Dialog.Description>
                    </div>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-label="Fechar menu"
                      >
                        <X className="size-4" aria-hidden="true" />
                      </button>
                    </Dialog.Close>
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
                            handleNavClick(link.href)
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
                  <Button
                    className="w-full"
                    onClick={() => openBooking()}
                  >
                    Agendar consulta
                  </Button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Atendimento presencial e online
                  </p>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </motion.header>
  )
}
