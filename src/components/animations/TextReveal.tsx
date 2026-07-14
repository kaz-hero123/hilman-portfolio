'use client'

import { useRef } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'

interface TextRevealProps {
  text: string
  className?: string
}

export function TextReveal({ text, className = '' }: TextRevealProps) {
  const container = useRef<HTMLParagraphElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 85%', 'center 40%']
  })

  const words = text.split(' ')

  return (
    <span ref={container} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </span>
  )
}

interface WordProps {
  children: React.ReactNode
  progress: any
  range: [number, number]
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1])
  
  return (
    <span className="relative mr-[0.25em] mt-0">
      <m.span style={{ opacity }} className="transition-opacity duration-100">
        {children}
      </m.span>
    </span>
  )
}
