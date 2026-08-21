import { useEffect, useState } from 'react'
import { WarningIcon } from '@phosphor-icons/react/Warning'
import { XIcon } from '@phosphor-icons/react/X'
import { SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'portfolio-psicologia:emergency-notice-dismissed'

export function EmergencyNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = window.localStorage.getItem(STORAGE_KEY)
    setVisible(dismissed !== 'true')
  }, [])

  function dismiss() {
    window.localStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <aside
      className={cn(
        'fixed inset-x-0 bottom-0 z-30 border-t border-border/70 bg-card/95 px-4 py-3 shadow-elevated backdrop-blur-md',
        'sm:bottom-4 sm:left-auto sm:right-4 sm:max-w-md sm:rounded-2xl sm:border',
      )}
      aria-label="Aviso sobre atendimento de urgência"
    >
      <div className="mx-auto flex gap-3 sm:max-w-none">
        <WarningIcon
          className="mt-0.5 size-5 shrink-0 text-accent"
          weight="duotone"
          aria-hidden="true"
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-foreground">
            Não atendemos urgências por este site
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Em crise ou risco imediato, ligue{' '}
            <a href={`tel:${SITE.emergency.cvv}`} className="font-medium text-primary hover:underline">
              {SITE.emergency.cvv} (CVV)
            </a>{' '}
            ou{' '}
            <a href={`tel:${SITE.emergency.samu}`} className="font-medium text-primary hover:underline">
              {SITE.emergency.samu} (SAMU)
            </a>
            .
          </p>
        </div>
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Fechar aviso"
        >
          <XIcon className="size-4" aria-hidden="true" />
        </button>
      </div>
    </aside>
  )
}
