import { motion, useReducedMotion } from '@/lib/motion-react'

interface AnimatedCheckProps {
  className?: string
}

export function AnimatedCheck({ className }: AnimatedCheckProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className={className} aria-hidden="true">
        <svg viewBox="0 0 52 52" className="size-16 text-success">
          <circle
            cx="26"
            cy="26"
            r="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 27l7 7 16-16"
          />
        </svg>
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <svg viewBox="0 0 52 52" className="size-16" aria-hidden="true">
        <motion.circle
          cx="26"
          cy="26"
          r="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-success/20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.circle
          cx="26"
          cy="26"
          r="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-success"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        />
        <motion.path
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-success"
          d="M14 27l7 7 16-16"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 0.35 }}
        />
      </svg>
    </motion.div>
  )
}
