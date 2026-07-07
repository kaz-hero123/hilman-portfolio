'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
]

export function KonamiCode() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    let keyIndex = 0

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[keyIndex]) {
        keyIndex++
        if (keyIndex === KONAMI_CODE.length) {
          setActive(true)
          keyIndex = 0
          
          // Auto disable after 15 seconds
          setTimeout(() => setActive(false), 15000)
        }
      } else {
        keyIndex = 0
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/95 pointer-events-none flex items-center justify-center overflow-hidden"
        >
          {/* Matrix Rain Effect (Simple CSS Implementation) */}
          <div className="absolute inset-0 opacity-40">
            {Array.from({ length: 50 }).map((_, i) => (
              <div 
                key={i} 
                className="absolute text-green-500 font-mono text-sm opacity-80 whitespace-nowrap"
                style={{
                  left: `${(i / 50) * 100}%`,
                  top: '-10%',
                  animation: `matrix-fall ${2 + Math.random() * 3}s linear infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              >
                {'01001011 01000101 01011001'.split('').map((char, j) => (
                  <div key={j} className="my-1">{char}</div>
                ))}
              </div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.8, filter: 'blur(10px)' }}
            animate={{ scale: 1, filter: 'blur(0px)' }}
            transition={{ type: 'spring', bounce: 0.5 }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            <div className="text-green-500 font-mono text-4xl sm:text-6xl tracking-[0.2em] uppercase font-bold text-center glitch-text" data-text="ACCESS GRANTED">
              ACCESS GRANTED
            </div>
            <p className="font-mono text-green-400/80 text-sm tracking-widest text-center">
              SYSTEM OVERRIDE INITIATED
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
