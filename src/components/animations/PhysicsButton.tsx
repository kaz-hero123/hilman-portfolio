'use client'

import { m, HTMLMotionProps } from 'framer-motion'
import { playPopSound } from '@/lib/sound'

interface PhysicsButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode
  href?: string
}

export function PhysicsButton({ children, href, onClick, ...props }: PhysicsButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playPopSound()
    if (onClick) onClick(e)
    if (href) {
      if (href.startsWith('#')) {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = href
      }
    }
  }

  return (
    <m.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9, rotate: 2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      onClick={handleClick}
      {...props}
    >
      {children}
    </m.button>
  )
}
