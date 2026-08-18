import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { useScrollTo } from '@/hooks/useScrollTo'
import { cn } from '@/lib/utils'

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const scrollTo = useScrollTo()

  function handleNavClick(href: string) {
    scrollTo(href)
    setIsMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#inicio')
          }}
          className="group flex flex-col"
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
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => handleNavClick('#agendamento')}
          >
            Agendar consulta
          </Button>

          <button
            type="button"
            className="rounded-lg p-2 text-foreground lg:hidden"
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l border-border bg-card shadow-elevated lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <span className="font-display font-semibold">Menu</span>
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  className="rounded-lg p-2 hover:bg-muted"
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
                    className={cn(
                      'rounded-xl px-4 py-3 text-base font-medium text-foreground',
                      'transition-colors hover:bg-muted hover:text-primary',
                    )}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  className="mt-4 w-full"
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
