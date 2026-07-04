export const editorialTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
}

export const slowEditorialTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as const,
}

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: editorialTransition,
  },
}

export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export const createStaggerContainer = (staggerChildren = 0.08, delayChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
})
