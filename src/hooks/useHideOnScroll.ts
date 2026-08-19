import { useLenis } from '@/components/providers/LenisProvider'
import { useEffect, useRef, useState } from 'react'

export function useHideOnScroll(paused: boolean) {
  const [hidden, setHidden] = useState(false)
  const lastScroll = useRef(0)
  const pausedRef = useRef(paused)
  const lenis = useLenis()

  pausedRef.current = paused

  useEffect(() => {
    function apply(scroll: number, direction?: number) {
      if (pausedRef.current || scroll < 56) {
        setHidden(false)
        lastScroll.current = scroll
        return
      }

      if (typeof direction === 'number' && direction !== 0) {
        setHidden(direction > 0)
        lastScroll.current = scroll
        return
      }

      const delta = scroll - lastScroll.current
      if (delta > 8) setHidden(true)
      else if (delta < -8) setHidden(false)
      lastScroll.current = scroll
    }

    if (lenis) {
      const onScroll = (instance: { scroll: number; direction: number }) => {
        apply(instance.scroll, instance.direction)
      }

      lenis.on('scroll', onScroll)
      return () => {
        lenis.off('scroll', onScroll)
      }
    }

    function onWindowScroll() {
      apply(window.scrollY)
    }

    window.addEventListener('scroll', onWindowScroll, { passive: true })
    return () => window.removeEventListener('scroll', onWindowScroll)
  }, [lenis])

  useEffect(() => {
    if (paused) setHidden(false)
  }, [paused])

  return hidden
}
