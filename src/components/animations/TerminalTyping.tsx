'use client'

import { useState, useEffect } from 'react'
import { m } from 'framer-motion'

interface TerminalTypingProps {
  lines: string[]
  typingSpeed?: number
}

export function TerminalTyping({ lines, typingSpeed = 50 }: TerminalTypingProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const isTyping = currentLineIndex < lines.length

  useEffect(() => {
    if (!isTyping) return

    const targetText = lines[currentLineIndex]
    
    if (currentText.length < targetText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(targetText.slice(0, currentText.length + 1))
      }, typingSpeed + (Math.random() * 50)) // Add random variance to typing
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1)
        setCurrentText('')
      }, 800) // Pause between lines
      return () => clearTimeout(timeout)
    }
  }, [currentText, currentLineIndex, lines, typingSpeed, isTyping])

  return (
    <div className="w-full max-w-sm rounded-md overflow-hidden border border-ash/50 bg-[#1a1a1a] shadow-2xl font-mono text-xs">
      <div className="flex items-center px-3 py-2 bg-[#2d2d2d] border-b border-ash/30">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 text-center text-dim/60 text-[10px]">guest@hilman: ~</div>
      </div>
      
      <div className="p-4 text-green-400 min-h-[120px] flex flex-col gap-1">
        {lines.slice(0, currentLineIndex).map((line, i) => (
          <div key={i} className="flex">
            <span className="text-dim/50 mr-2">$</span>
            <span>{line}</span>
          </div>
        ))}
        {currentLineIndex < lines.length && (
          <div className="flex">
            <span className="text-dim/50 mr-2">$</span>
            <span>
              {currentText}
              <m.span 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-1.5 h-3 bg-green-400 ml-1 translate-y-0.5"
              />
            </span>
          </div>
        )}
        {!isTyping && (
          <div className="flex">
            <span className="text-dim/50 mr-2">$</span>
            <m.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1.5 h-3 bg-green-400 translate-y-0.5"
            />
          </div>
        )}
      </div>
    </div>
  )
}
