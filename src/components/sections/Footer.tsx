import { lazy, Suspense, useCallback, useState } from 'react'
import { Globe, Share2 } from 'lucide-react'
import { PrivacyPolicyContent } from '@/components/PrivacyPolicyContent'
import { useScrollTo } from '@/hooks/useScrollTo'
import { SITE } from '@/lib/constants'

const Modal = lazy(() =>
  import('@/components/ui/Modal').then((module) => ({ default: module.Modal })),
)

export function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const scrollTo = useScrollTo()
  const closePrivacyModal = useCallback(() => setShowPrivacyModal(false), [])

  function handleAnchor(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault()
    scrollTo(href)
  }

  return (
    <>
      <footer className="relative border-t border-border bg-foreground px-4 py-12 text-primary-foreground sm:px-6 lg:px-8">
        <div className="grain-overlay absolute inset-0 opacity-[0.06]" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-display text-xl font-semibold">
                {SITE.psychologist.name}
              </p>
              <p className="mt-1 text-sm text-primary-foreground/75">
                {SITE.psychologist.title}
              </p>
              <p className="mt-4 inline-flex rounded-lg bg-primary-foreground/10 px-3 py-1.5 text-sm font-semibold">
                CRP {SITE.psychologist.crp}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/75">
                Links
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="#sobre"
                    onClick={(e) => handleAnchor(e, '#sobre')}
                    className="transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#agendamento"
                    onClick={(e) => handleAnchor(e, '#agendamento')}
                    className="transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light"
                  >
                    Agendar consulta
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setShowPrivacyModal(true)}
                    className="transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light"
                  >
                    Política de Privacidade
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/75">
                Redes sociais
              </h3>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-xl bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light"
                  aria-label="Instagram (substitua pelo link real)"
                >
                  <Share2 className="size-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-xl bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light"
                  aria-label="LinkedIn (substitua pelo link real)"
                >
                  <Globe className="size-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-primary-foreground/10 pt-8">
            <p className="text-center text-xs leading-relaxed text-primary-foreground/70">
              O sigilo profissional é garantido pelo Código de Ética Profissional
              do Psicólogo (Resolução CFP nº 010/2005). As informações compartilhadas
              neste site não substituem avaliação clínica individual.
            </p>
            <p className="mt-4 text-center text-xs text-primary-foreground/65">
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
