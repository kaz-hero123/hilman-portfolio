'use client'

import { useState, useRef, MouseEvent, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'

interface TrailItem {
  id: number
  x: number
  y: number
  imageSrc: string
}

interface ImageTrailProps {
  children: React.ReactNode
  images: string[]
}

export function ImageTrail({ children, images }: ImageTrailProps) {
  const [trail, setTrail] = useState<TrailItem[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const lastMousePos = useRef({ x: 0, y: 0 })
  const imageIndex = useRef(0)
  const idCounter = useRef(0)

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return
    const { clientX, clientY } = e
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top

    const dx = x - lastMousePos.current.x
    const dy = y - lastMousePos.current.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance > 100) {
      lastMousePos.current = { x, y }
      const newId = idCounter.current++
      const newTrailItem = {
        id: newId,
        x,
        y,
        imageSrc: images[imageIndex.current % images.length],
      }

      setTrail((prev) => [...prev, newTrailItem])
      imageIndex.current++

      setTimeout(() => {
        setTrail((prev) => prev.filter((item) => item.id !== newId))
      }, 1000)
    }
  }

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full"
      onMouseMove={handleMouseMove}
    >
      {children}
      
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <AnimatePresence>
          {trail.map((item) => (
            <m.div
              key={item.id}
              initial={{ opacity: 0.8, scale: 0.5 }}
              animate={{ opacity: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute w-32 h-24 sm:w-48 sm:h-32 rounded-lg overflow-hidden shadow-lg border border-white/10"
              style={{
                left: item.x,
                top: item.y,
                x: '-50%',
                y: '-50%',
              }}
            >
              <img 
                src={item.imageSrc} 
                alt="" 
                className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity"
              />
            </m.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
