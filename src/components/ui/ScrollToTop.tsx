'use client'

import { useEffect, useState } from 'react'
import { m, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > 0.1) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    })
  }, [scrollYProgress])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, type: 'spring' }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white border border-ash shadow-sm hover:shadow-md transition-shadow group focus-ring mix-blend-exclusion md:mix-blend-normal"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} strokeWidth={2} className="text-ink group-hover:-translate-y-1 transition-transform" />
          
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-ash"
            />
            <m.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-accent"
              style={{
                pathLength: scaleX
              }}
            />
          </svg>
        </m.button>
      )}
    </AnimatePresence>
  )
}
