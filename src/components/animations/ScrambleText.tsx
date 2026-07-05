'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ScrambleTextProps {
  text: string
  className?: string
}

const CHARS = '!<>-_\\/[]{}—=+*^?#________'

export function ScrambleText({ text, className = '' }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text)

  useEffect(() => {
    let iteration = 0
    let interval: NodeJS.Timeout

    const startScramble = () => {
      clearInterval(interval)
      
      interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index]
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)]
            })
            .join('')
        )

        if (iteration >= text.length) {
          clearInterval(interval)
        }

        iteration += 1 / 3 // controls the speed of settling (lower is slower)
      }, 35) // speed of scramble updates
    }

    // Add a slight delay for better UX on initial load
    const timeout = setTimeout(startScramble, 200)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [text])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
    </motion.span>
  )
}
