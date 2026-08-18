import { Children, isValidElement } from 'react'
import { motion, useReducedMotion } from '@/lib/motion-react'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer } from '@/lib/motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

interface ScrollRevealGroupProps {
  children: React.ReactNode
  className?: string
  itemClassName?: string
  staggerDelay?: number
}

export function ScrollRevealGroup({
  children,
  className,
  itemClassName,
  staggerDelay = 0.08,
}: ScrollRevealGroupProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer(staggerDelay)}
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child

        return (
          <motion.div
            key={child.key ?? undefined}
            className={itemClassName}
            variants={fadeInUp}
          >
            {child}
          </motion.div>
        )
      })}
    </motion.div>
  )
}
