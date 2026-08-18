import { motion, useReducedMotion } from '@/lib/motion-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AnimatedIconProps {
  icon: LucideIcon
  className?: string
  containerClassName?: string
}

export function AnimatedIcon({
  icon: Icon,
  className,
  containerClassName,
}: AnimatedIconProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className={cn('flex items-center justify-center', containerClassName)}>
        <Icon className={className} aria-hidden="true" />
      </div>
    )
  }

  return (
    <motion.div
      className={cn('relative flex items-center justify-center', containerClassName)}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.svg
        viewBox="0 0 48 48"
        className="absolute size-full text-primary/20"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </motion.svg>
      <Icon className={cn('relative z-10', className)} aria-hidden="true" />
    </motion.div>
  )
}
