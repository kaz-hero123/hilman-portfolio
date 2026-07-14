'use client'

import { useEffect, useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'

export function PageTransition() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <m.div
          key="loader"
          className="fixed inset-0 z-[999] bg-ink flex items-center justify-center pointer-events-none"
          initial={{ clipPath: 'circle(150% at 50% 50%)' }}
          exit={{ 
            clipPath: 'circle(0% at 50% 50%)',
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="font-mono text-[14px] text-white/50 tracking-[0.2em] uppercase">
              Loading
            </span>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <m.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                  className="w-1.5 h-1.5 bg-white rounded-full"
                />
              ))}
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
