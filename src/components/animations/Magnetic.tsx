'use client'

import React, { useRef, useState } from 'react'
import { m } from 'framer-motion'
import { playTickSound } from '@/lib/sound'

interface MagneticProps {
  children: React.ReactNode
}

export function Magnetic({ children }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    if (!ref.current) return
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 })
  }

  const handleMouseEnter = () => {
    playTickSound()
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </m.div>
  )
}
