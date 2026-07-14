'use client'

import React, { useRef, useState, useEffect } from 'react'
import { m, useSpring } from 'framer-motion'

export function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useSpring(0, { stiffness: 150, damping: 20 })
  const y = useSpring(0, { stiffness: 150, damping: 20 })

  const [isTouch, setIsTouch] = useState(false)
  
  useEffect(() => {
    requestAnimationFrame(() => {
      setIsTouch(window.matchMedia("(pointer: coarse)").matches)
    })
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouch || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = (mouseX / width) - 0.5
    const yPct = (mouseY / height) - 0.5
    
    x.set(xPct * 8)
    y.set(yPct * -8)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div 
      style={{ perspective: 1200 }} 
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <m.div
        ref={ref}
        style={{
          rotateX: y,
          rotateY: x,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative"
      >
        {children}
      </m.div>
    </div>
  )
}
