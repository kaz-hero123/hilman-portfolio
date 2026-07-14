'use client'

import { cn } from '@/lib/utils'
import { m } from 'framer-motion'
import React from 'react'

export function StarBorder({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('relative inline-block overflow-hidden rounded-sm p-[1px] w-full h-full group/star bg-ash/50', className)}>
      <m.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-100%] z-0 opacity-0 group-hover/star:opacity-100 transition-opacity duration-500"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0 340deg, #0ea5e9 360deg)',
        }}
      />
      <div className="relative z-10 w-full h-full bg-white rounded-sm">
        {children}
      </div>
    </div>
  )
}
