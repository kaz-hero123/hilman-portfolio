'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface BlurRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function BlurReveal({ children, className = '', delay = 0 }: BlurRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(12px)', y: 10 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
