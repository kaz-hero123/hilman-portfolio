'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimateInProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li'
}

export function AnimateIn({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  const Component = motion[as] as typeof motion.div

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </Component>
  )
}
