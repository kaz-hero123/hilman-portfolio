'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface NumberCounterProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export function NumberCounter({ 
  value, 
  prefix = '', 
  suffix = '', 
  duration = 2,
  className = ''
}: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  })
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest))
    })
  }, [springValue])

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}
