'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import { createPortal } from 'react-dom'

interface HoverImageRevealProps {
  children: React.ReactNode
  imageSrc: string
  className?: string
  imageClassName?: string
  alt?: string
  width?: number
  height?: number
  textColor?: string
}

export function HoverImageReveal({
  children,
  imageSrc,
  className = '',
  imageClassName = '',
  alt = 'Preview image',
  width = 240,
  height = 160,
  textColor = 'text-accent',
}: HoverImageRevealProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)
  const spanRef = useRef<HTMLSpanElement>(null)

  // Motion values for coordinates
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for smooth following effect
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    // Offset the image slightly so it doesn't block the cursor
    mouseX.set(e.clientX + 20)
    mouseY.set(e.clientY - 20)
  }

  return (
    <>
      <span
        ref={spanRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className={`relative inline-block cursor-crosshair font-medium transition-colors duration-300 underline decoration-solid underline-offset-4 decoration-current/40 hover:decoration-current ${textColor} ${className}`}
      >
        {children}
      </span>

      {mounted &&
        createPortal(
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              x: springX,
              y: springY,
              // Center vertically from the mouse point, offset to the right by handleMouseMove
              translateY: '-50%',
              pointerEvents: 'none',
              zIndex: 99999, // Ensure it's above everything
            }}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
              rotate: isHovered ? 0 : -5,
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            <div
              className={`relative overflow-hidden rounded-xl shadow-2xl border border-white/20 bg-ash/10 backdrop-blur-md ${imageClassName}`}
              style={{ width, height }}
            >
              <Image
                src={imageSrc}
                alt={alt}
                fill
                unoptimized
                className="object-cover"
                sizes={`${width}px`}
              />
            </div>
          </motion.div>,
          document.body
        )}
    </>
  )
}
