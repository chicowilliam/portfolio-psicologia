import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from '@/lib/motion-react'
import { cn } from '@/lib/utils'

interface MagneticWrapperProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function MagneticWrapper({
  children,
  className,
  strength = 0.22,
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.4 })

  useEffect(() => {
    setEnabled(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  }, [])

  if (prefersReducedMotion || !enabled) {
    return <div className={className}>{children}</div>
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2

    x.set(offsetX * strength)
    y.set(offsetY * strength)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={cn('magnetic-wrapper', className)}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}
