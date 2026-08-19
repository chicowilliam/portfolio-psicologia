import { motion, useReducedMotion } from '@/lib/motion-react'
import type { IconComponent, IconWeight } from '@/lib/icons'
import { cn } from '@/lib/utils'

interface AnimatedIconProps {
  icon: IconComponent
  className?: string
  containerClassName?: string
  weight?: IconWeight
}

export function AnimatedIcon({
  icon: Icon,
  className,
  containerClassName,
  weight = 'duotone',
}: AnimatedIconProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className={cn('flex items-center justify-center', containerClassName)}>
        <Icon className={className} weight={weight} aria-hidden="true" />
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
      <Icon className={cn('relative z-10', className)} weight={weight} aria-hidden="true" />
    </motion.div>
  )
}
