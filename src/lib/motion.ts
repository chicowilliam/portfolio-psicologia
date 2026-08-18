export const easeOut = [0.22, 1, 0.36, 1] as const

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 320, damping: 32 },
  },
}

export const slideInRight = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring' as const, stiffness: 320, damping: 32 },
  },
}

export function staggerContainer(stagger = 0.08) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: 0.05 },
    },
  }
}
