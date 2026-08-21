import { lazy, Suspense, useCallback, useState } from 'react'
import { InstagramLogoIcon } from '@phosphor-icons/react/InstagramLogo'
import { LinkedinLogoIcon } from '@phosphor-icons/react/LinkedinLogo'
import { PrivacyPolicyContent } from '@/components/PrivacyPolicyContent'
import { useScrollTo } from '@/hooks/useScrollTo'
import { useBookingDialog } from '@/components/providers/BookingDialogProvider'
import { BOOKING_CTA, SITE } from '@/lib/constants'

const Modal = lazy(() =>
  import('@/components/ui/Modal').then((module) => ({ default: module.Modal })),
)

const FOOTER_LINKS = [
  { label: 'Quem sou eu', href: '#sobre' },
  { label: 'Para quem', href: '#para-quem' },
  { label: 'Abordagem', href: '#abordagem' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Conteúdo', href: '#conteudo' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: BOOKING_CTA.primary, href: '#agendamento' },
  { label: 'Contato', href: '#contato' },
] as const

export function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const scrollTo = useScrollTo()
  const { openBooking } = useBookingDialog()
  const closePrivacyModal = useCallback(() => setShowPrivacyModal(false), [])

  function handleAnchor(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault()
    if (href === '#agendamento') {
      openBooking()
      return
    }
    scrollTo(href)
  }

  const socialLinks = [
    SITE.social.instagram && {
      href: SITE.social.instagram,
      label: 'Instagram',
      icon: InstagramLogoIcon,
    },
    SITE.social.linkedin && {
      href: SITE.social.linkedin,
      label: 'LinkedIn',
      icon: LinkedinLogoIcon,
    },
  ].filter(Boolean) as Array<{
    href: string
    label: string
    icon: typeof InstagramLogoIcon
  }>

  return (
    <>
      <footer className="relative border-t border-border bg-ink px-4 py-12 pb-28 text-foreground sm:px-6 sm:pb-12 lg:px-8">
        <div className="grain-overlay absolute inset-0 opacity-[0.06]" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-display text-[1.38rem] font-semibold leading-tight tracking-[-0.01em]">
                {SITE.psychologist.name}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {SITE.psychologist.title}
              </p>
              <a
                href={SITE.crpVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-lg bg-foreground/10 px-3 py-1.5 text-sm font-semibold transition-colors hover:bg-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-hover"
              >
                CRP {SITE.psychologist.crp}
              </a>
            </div>

            <div>
              <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                Navegação
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm sm:grid-cols-1">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleAnchor(e, link.href)}
                      className="transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-hover"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    onClick={() => setShowPrivacyModal(true)}
                    className="transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-hover"
                  >
                    Política de Privacidade
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                {socialLinks.length > 0 ? 'Redes sociais' : 'Contato'}
              </h3>
              {socialLinks.length > 0 ? (
                <div className="mt-4 flex gap-3">
                  {socialLinks.map(({ href, label, icon: Icon }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center rounded-xl bg-foreground/10 transition-colors hover:bg-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-hover"
                      aria-label={label}
                    >
                      <Icon className="size-5" weight="duotone" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm text-muted-foreground">
                  <a
                    href={`mailto:${SITE.contact.email}`}
                    className="transition-colors hover:text-primary-light hover:underline"
                  >
                    {SITE.contact.email}
                  </a>
                </p>
              )}
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <p className="mx-auto max-w-[72ch] text-center text-xs leading-[1.75] text-subtle">
              O sigilo profissional é garantido pelo Código de Ética Profissional
              do Psicólogo (Resolução CFP nº 010/2005). As informações compartilhadas
              neste site não substituem avaliação clínica individual. Publicidade
              conforme Resolução CFP nº 011/2018, sem promessas de cura ou garantia
              de resultados.
            </p>
            <p className="mt-4 text-center text-xs text-subtle">
              © {new Date().getFullYear()} {SITE.psychologist.name}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <Suspense fallback={null}>
        {showPrivacyModal && (
          <Modal
            isOpen={showPrivacyModal}
            onClose={closePrivacyModal}
            title="Política de Privacidade"
            size="lg"
          >
            <PrivacyPolicyContent />
          </Modal>
        )}
      </Suspense>
    </>
  )
}
