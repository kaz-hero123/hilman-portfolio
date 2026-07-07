// ─── Transition presets ───────────────────────────────────────────────────────

export const editorialTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
}

export const slowEditorialTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as const,
}

// ─── Reusable animation variants ──────────────────────────────────────────────

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: editorialTransition,
  },
}

export const fadeUpSmallVariant = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: editorialTransition,
  },
}

export const slideInLeftVariant = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: editorialTransition,
  },
}

// ─── Stagger container factory ────────────────────────────────────────────────

export const createStaggerContainer = (staggerChildren = 0.08, delayChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
})

// ─── Pre-built stagger containers ─────────────────────────────────────────────

export const staggerContainer = createStaggerContainer(0.1, 0.15)
export const fastStaggerContainer = createStaggerContainer(0.05, 0.1)
