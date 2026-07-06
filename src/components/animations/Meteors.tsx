'use client'

import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number
  className?: string
}) => {
  const [meteors, setMeteors] = useState<number[]>([])

  useEffect(() => {
    // Generate meteor array on mount to avoid hydration mismatch
    setMeteors(new Array(number).fill(0))
  }, [number])

  if (meteors.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {meteors.map((_, idx) => {
        // Randomize spawn position across the screen width
        const left = Math.floor(Math.random() * 100) + "%"
        // Randomize delay and duration
        const delay = Math.random() * (1.5 - 0.2) + 0.2 + "s"
        const duration = Math.floor(Math.random() * (8 - 3) + 3) + "s"
        
        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
              className
            )}
            style={{
              top: -5,
              left,
              animationDelay: delay,
              animationDuration: duration,
            }}
          ></span>
        )
      })}
    </div>
  )
}
