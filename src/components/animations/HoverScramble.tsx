'use client'

import { useState, useRef } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#________'

export function HoverScramble({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    let iteration = 0
    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index]
            }
            // Preserve spaces
            if (text[index] === ' ') return ' '
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )

      if (iteration >= text.length) {
        clearInterval(intervalRef.current!)
        setDisplayText(text) // ensure exact match at the end
      }

      iteration += 1 / 2 // Adjust speed here
    }, 30)
  }

  const handleMouseLeave = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setDisplayText(text)
  }

  return (
    <span 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      className="inline-block whitespace-nowrap"
    >
      {displayText}
    </span>
  )
}
