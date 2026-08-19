import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from '@/lib/motion-react'
import { XIcon } from '@phosphor-icons/react/X'
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { cn } from '@/lib/utils'
import { fadeIn, scaleIn } from '@/lib/motion'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  size?: 'md' | 'lg'
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}: ModalProps) {
  const containerRef = useFocusTrap(isOpen)
  const prefersReducedMotion = useReducedMotion()
  useBodyScrollLock(isOpen)

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const overlayVariants = prefersReducedMotion ? fadeIn : fadeIn
  const dialogVariants = prefersReducedMotion ? fadeIn : scaleIn

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.button
            type="button"
            aria-label="Fechar modal"
            className="absolute inset-0 bg-foreground/25 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          <motion.div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className={cn(
              'paper-card relative z-10 max-h-[90vh] w-full overflow-y-auto',
              size === 'md' && 'max-w-md',
              size === 'lg' && 'max-w-2xl',
            )}
            data-lenis-prevent
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/60 bg-card/80 px-6 py-4 backdrop-blur-md">
              <h2 id="modal-title" className="font-display text-xl font-semibold text-foreground">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Fechar"
              >
                <XIcon className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="px-6 py-6">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
