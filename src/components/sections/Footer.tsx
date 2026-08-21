import { BOOKING_CTA, NAV_LINKS, SITE } from '@/lib/constants'
import { useScrollTo } from '@/hooks/useScrollTo'
import { useBookingDialog } from '@/components/providers/BookingDialogProvider'

export function Footer() {
  const scrollTo = useScrollTo()
  const { openBooking } = useBookingDialog()

  function handleAnchor(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault()
    if (href === '#agendamento' || href === '#contato') {
      if (href === '#agendamento') {
        openBooking()
        return
      }
    }
    scrollTo(href)
  }

  return (
    <footer className="border-t border-border bg-background-alt px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-xl text-foreground">{SITE.psychologist.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{SITE.psychologist.title}</p>
            <p className="mt-4 max-w-[32ch] text-xs leading-relaxed text-subtle">
              {SITE.conceptualNotice}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-subtle">
              Navegação
            </p>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchor(e, link.href)}
                    className="text-sm text-foreground underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="text-sm text-foreground underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {BOOKING_CTA.nav}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-subtle">Contato</p>
            <p className="mt-3 text-sm text-foreground">
              <a
                href={`mailto:${SITE.contact.email}`}
                className="underline-offset-2 hover:underline"
              >
                {SITE.contact.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {SITE.contact.neighborhood}, {SITE.contact.city}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="max-w-[60ch] text-xs leading-relaxed text-subtle">
            Este site não realiza atendimento de urgência. Em situação de crise ou risco imediato,
            ligue {SITE.emergency.cvv} (CVV) ou {SITE.emergency.samu} (SAMU).
          </p>
          <p className="mt-4 text-xs text-subtle">
            © {new Date().getFullYear()} {SITE.psychologist.name}. Projeto conceitual.
          </p>
        </div>
      </div>
    </footer>
  )
}
