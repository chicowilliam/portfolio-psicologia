import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from '@/lib/motion-react'
import { Menu, X } from 'lucide-react'
import { Dialog } from 'radix-ui'
import { Button } from '@/components/ui/Button'
import { MagneticWrapper } from '@/components/ui/MagneticWrapper'
import { NAV_LINKS, SITE } from '@/lib/constants'
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
          <MagneticWrapper className="hidden sm:inline-flex">
            <Button
              size="sm"
              magnetic={false}
              className="shadow-soft"
              onClick={() => handleNavClick('#agendamento')}
            >
              Agendar consulta
            </Button>
          </MagneticWrapper>

          <Dialog.Root open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="relative inline-flex size-11 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
                aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ opacity: 0, rotate: -90, scale: 0.85 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.85 }}
                      transition={{ duration: 0.2, ease: easeOut }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <X className="size-5" aria-hidden="true" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ opacity: 0, rotate: 90, scale: 0.85 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.85 }}
                      transition={{ duration: 0.2, ease: easeOut }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Menu className="size-5" aria-hidden="true" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="dialog-overlay fixed inset-0 z-50 bg-foreground/25 backdrop-blur-sm lg:hidden" />
              <Dialog.Content
                className={cn(
                  'dialog-panel fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-border bg-card/95 shadow-elevated outline-none backdrop-blur-xl lg:hidden',
                  prefersReducedMotion && 'dialog-panel-reduced',
                )}
                aria-describedby={undefined}
              >
                <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
                  <Dialog.Title className="font-display text-lg font-semibold text-foreground">
                    Menu
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="inline-flex size-11 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label="Fechar menu"
                    >
                      <X className="size-5" aria-hidden="true" />
                    </button>
                  </Dialog.Close>
                </div>

                <motion.nav
                  className="flex flex-1 flex-col gap-1 overflow-y-auto p-5"
                  aria-label="Navegação mobile"
                  variants={prefersReducedMotion ? undefined : staggerContainer(0.06)}
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
                            'flex min-h-11 items-center rounded-xl px-4 py-3 text-base font-medium transition-colors',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                            active
                              ? 'bg-primary/10 text-primary'
                              : 'text-foreground hover:bg-muted hover:text-primary',
                          )}
                        >
                          {link.label}
                        </a>
                      </motion.div>
                    )
                  })}

                  <motion.div
                    className="mt-4 pt-2"
                    variants={prefersReducedMotion ? undefined : navLinkVariants}
                  >
                    <Button
                      className="min-h-11 w-full"
                      magnetic={false}
                      onClick={() => handleNavClick('#agendamento')}
                    >
                      Agendar consulta
                    </Button>
                  </motion.div>
                </motion.nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </motion.header>
  )
}
