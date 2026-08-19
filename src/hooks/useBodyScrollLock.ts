import { useEffect } from 'react'
import { useLenis } from '@/components/providers/LenisProvider'

let lockCount = 0
let previousBodyOverflow = ''
let previousHtmlOverflow = ''

export function useBodyScrollLock(isLocked: boolean) {
  const lenis = useLenis()

  useEffect(() => {
    if (!isLocked) return

    if (lockCount === 0) {
      previousBodyOverflow = document.body.style.overflow
      previousHtmlOverflow = document.documentElement.style.overflow
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      lenis?.stop()
    }

    lockCount += 1

    return () => {
      lockCount = Math.max(0, lockCount - 1)
      if (lockCount === 0) {
        document.body.style.overflow = previousBodyOverflow
        document.documentElement.style.overflow = previousHtmlOverflow
        lenis?.start()
      }
    }
  }, [isLocked, lenis])
}
