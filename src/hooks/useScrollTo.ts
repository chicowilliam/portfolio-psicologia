import { useCallback } from 'react'
import { useLenis } from '@/components/providers/LenisProvider'

export function useScrollTo() {
  const lenis = useLenis()

  return useCallback(
    (href: string) => {
      const id = href.replace('#', '')
      const element = document.getElementById(id)

      if (!element) return

      if (lenis) {
        lenis.scrollTo(element, { offset: -88, duration: 1.1 })
        return
      }

      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    [lenis],
  )
}
