'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { playPopSound } from '@/lib/sound'

interface ClickConfettiProps {
  children: React.ReactNode
}

export function ClickConfetti({ children }: ClickConfettiProps) {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; color: string }[]>([])

  const handleClick = (e: React.MouseEvent) => {
    playPopSound()
    
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const colors = ['#38bdf8', '#34d399', '#f472b6', '#fbbf24', '#a78bfa']
    
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: Date.now() + i,
      x,
      y,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    setParticles((prev) => [...prev, ...newParticles])

    setTimeout(() => {
      setParticles((prev) => prev.filter(p => !newParticles.find(n => n.id === p.id)))
    }, 2000)
  }

  return (
    <div className="relative inline-block" onClick={handleClick}>
      {children}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        <AnimatePresence>
          {particles.map((p) => {
            const angle = Math.random() * Math.PI * 2
            const velocity = 50 + Math.random() * 100
            return (
              <motion.div
                key={p.id}
                initial={{ 
                  opacity: 1, 
                  x: p.x, 
                  y: p.y, 
                  scale: 0 
                }}
                animate={{ 
                  opacity: 0,
                  x: p.x + Math.cos(angle) * velocity,
                  y: p.y + Math.sin(angle) * velocity,
                  scale: Math.random() * 0.5 + 0.5,
                  rotate: Math.random() * 360
                }}
                transition={{ duration: 0.6 + Math.random() * 0.4, ease: "easeOut" }}
                className="absolute w-2 h-2"
                style={{ backgroundColor: p.color }}
              />
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
