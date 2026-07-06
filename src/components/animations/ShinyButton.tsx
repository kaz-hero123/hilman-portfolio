'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const ShinyButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  const Component = props.href ? 'a' : 'button'
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Component
        ref={ref as any}
        {...props}
        className={cn(
          "relative flex items-center justify-center font-mono text-[12px] md:text-[13px] uppercase tracking-widest font-medium text-white bg-ink px-8 py-3.5 overflow-hidden rounded-sm transition-all focus-ring",
          "hover:bg-ink/90 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]",
          "group",
          className
        )}
      >
        <span className="relative z-10">{children}</span>
        
        {/* Shiny Sweep effect */}
        <div 
          className="absolute inset-0 z-0 h-full w-[150%] animate-shiny-sweep opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
            top: 0,
            left: 0,
          }}
        />
      </Component>
    </motion.div>
  )
})
ShinyButton.displayName = 'ShinyButton'
