/**
 * Reusable Framer Motion animation variants.
 * Ref: design-system.md §10
 *
 * Rules:
 * - Maks 3 motion.div per section
 * - Semua animasi sudah di-cover oleh prefers-reduced-motion di globals.css
 * - Tidak ada animasi loop kecuali blinking cursor di Hero
 */

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};
