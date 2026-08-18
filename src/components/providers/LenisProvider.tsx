import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import Lenis from 'lenis'

const LenisContext = createContext<Lenis | null>(null)

interface LenisProviderProps {
  children: ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) return

    const instance = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    })

    setLenis(instance)
    document.documentElement.classList.add('lenis', 'lenis-smooth')

    let rafId = 0
    function raf(time: number) {
      instance.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      instance.destroy()
      document.documentElement.classList.remove('lenis', 'lenis-smooth')
      setLenis(null)
    }
  }, [])

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  )
}

export function useLenis() {
  return useContext(LenisContext)
}
