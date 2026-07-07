'use client'

import React, { useState, useEffect } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
  as?: React.ElementType
}

export function GlitchText({ text, className = '', as: Component = 'span' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  // Random glitch effect every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 200 + Math.random() * 300)
      }
    }, 2500)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <Component 
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      <span className={`relative z-10 ${isGlitching ? 'opacity-80' : 'opacity-100'}`}>
        {text}
      </span>
      
      {isGlitching && (
        <>
          <span className="absolute top-0 left-[2px] -z-10 text-red-500 opacity-70 animate-glitch-1 mix-blend-screen" aria-hidden="true">
            {text}
          </span>
          <span className="absolute top-0 -left-[2px] -z-10 text-cyan-400 opacity-70 animate-glitch-2 mix-blend-screen" aria-hidden="true">
            {text}
          </span>
        </>
      )}
    </Component>
  )
}
