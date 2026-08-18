import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from '@/lib/motion-react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MagneticWrapper } from '@/components/ui/MagneticWrapper'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { useScrollTo } from '@/hooks/useScrollTo'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { fadeIn, slideInRight } from '@/lib/motion'
import { cn } from '@/lib/utils'

const SECTION_IDS = [
  'inicio',
  'sobre',
  'especialidades',
  'como-funciona',
  'duvidas',
  'contato',
]

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const drawerRef = useFocusTrap(isMobileOpen)
  const prefersReducedMotion = useReducedMotion()
  const scrollTo = useScrollTo()
  const activeSection = useScrollSpy(SECTION_IDS)

  useBodyScrollLock(isMobileOpen)

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
    <header
      className={cn(
        'sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-300',
        scrolled
          ? 'glass-header border-border/50 shadow-soft'
          : 'border-transparent bg-background/55 backdrop-blur-xl',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#inicio')
          }}
          className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {SITE.psychologist.name}
          </span>
          <span className="text-xs text-muted-foreground">
            CRP {SITE.psychologist.crp}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              aria-current={isLinkActive(link.href) ? 'page' : undefined}
              className={cn(
                'text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                isLinkActive(link.href)
                  ? 'nav-link-active'
                  : 'text-muted-foreground hover:text-primary',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MagneticWrapper className="hidden sm:inline-flex">
            <Button
              size="sm"
              magnetic={false}
              onClick={() => handleNavClick('#agendamento')}
            >
              Agendar consulta
            </Button>
          </MagneticWrapper>

          <button
            type="button"
            className="rounded-lg p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={isMobileOpen}
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Fechar menu"
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.div
              ref={drawerRef}
              className="glass-card fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l shadow-elevated lg:hidden"
              variants={prefersReducedMotion ? fadeIn : slideInRight}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="flex items-center justify-between border-b border-border/60 px-6 py-4">
                <span className="font-display font-semibold">Menu</span>
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  className="rounded-lg p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Fechar menu"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-6" aria-label="Navegação mobile">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    aria-current={isLinkActive(link.href) ? 'page' : undefined}
                    className={cn(
                      'rounded-xl px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      isLinkActive(link.href)
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-muted hover:text-primary',
                    )}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  className="mt-4 w-full"
                  magnetic
                  onClick={() => handleNavClick('#agendamento')}
                >
                  Agendar consulta
                </Button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
