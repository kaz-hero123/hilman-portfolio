'use client'

import { useState, useEffect } from 'react'

export function TimeBadge() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // format: HH:MM:SS
      const formatter = new Intl.DateTimeFormat('en-ID', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })
      setTime(formatter.format(now))
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!time) return null

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ash/80 bg-mist shadow-sm font-mono text-[10px] uppercase tracking-widest text-dim backdrop-blur-sm group cursor-default">
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      <span>IDN • {time}</span>
    </div>
  )
}
