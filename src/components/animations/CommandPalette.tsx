'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Command, ArrowRight, CornerDownLeft } from 'lucide-react'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

interface CommandItem {
  id: string
  title: string
  subtitle?: string
  icon?: React.ReactNode
  action: () => void
}

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  // Toggle on Cmd+K / Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  // Lock scroll when open
  useLockBodyScroll(open)

  const items: CommandItem[] = [
    {
      id: 'home',
      title: 'Home',
      subtitle: 'Go to Hero section',
      action: () => { window.location.hash = '#hero'; setOpen(false) }
    },
    {
      id: 'work',
      title: 'Work',
      subtitle: 'View my projects',
      action: () => { window.location.hash = '#work'; setOpen(false) }
    },
    {
      id: 'about',
      title: 'About',
      subtitle: 'Read about me',
      action: () => { window.location.hash = '#about'; setOpen(false) }
    },
    {
      id: 'craft',
      title: 'Skills & Craft',
      subtitle: 'What I work with',
      action: () => { window.location.hash = '#craft'; setOpen(false) }
    },
    {
      id: 'contact',
      title: 'Contact',
      subtitle: 'Get in touch',
      action: () => { window.location.hash = '#contact'; setOpen(false) }
    },
    {
      id: 'email',
      title: 'Send Email',
      subtitle: 'hilmannidal@gmail.com',
      action: () => { window.location.href = 'mailto:hilmannidal@gmail.com'; setOpen(false) }
    },
    {
      id: 'github',
      title: 'GitHub',
      subtitle: 'View source code',
      action: () => { window.open('https://github.com/kaz-hero123', '_blank'); setOpen(false) }
    }
  ]

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase()))
  )

  // Handle keyboard navigation
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (!open) return
      
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
      } else if (e.key === 'Enter' && filteredItems.length > 0) {
        e.preventDefault()
        filteredItems[selectedIndex].action()
      } else if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
      }
    }
    
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [open, filteredItems, selectedIndex])

  // Reset index when query changes
  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden border border-ash flex flex-col"
          >
            {/* Search Input */}
            <div className="flex items-center px-4 border-b border-ash">
              <Search className="w-5 h-5 text-dim shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent px-4 py-4 text-[15px] font-body text-ink placeholder-dim outline-none"
              />
              <div className="flex items-center gap-1.5 bg-mist px-2 py-1 rounded text-[10px] font-mono text-dim shrink-0 uppercase tracking-widest border border-ash/50">
                <Command className="w-3 h-3" />
                <span>K</span>
              </div>
            </div>

            {/* Results List */}
            <div className="max-h-[300px] overflow-y-auto p-2 scrollbar-none">
              {filteredItems.length === 0 ? (
                <div className="py-14 text-center">
                  <p className="font-body text-[14px] text-dim">No results found.</p>
                </div>
              ) : (
                <ul role="listbox">
                  {filteredItems.map((item, index) => (
                    <li
                      key={item.id}
                      role="option"
                      aria-selected={selectedIndex === index}
                      onMouseEnter={() => setSelectedIndex(index)}
                      onClick={() => item.action()}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors duration-150 ${
                        selectedIndex === index ? 'bg-accent/10' : 'hover:bg-mist'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className={`font-body text-[14px] ${selectedIndex === index ? 'text-accent font-medium' : 'text-ink'}`}>
                          {item.title}
                        </span>
                        {item.subtitle && (
                          <span className="font-body text-[12px] text-dim">
                            {item.subtitle}
                          </span>
                        )}
                      </div>
                      
                      {selectedIndex === index && (
                        <CornerDownLeft className="w-4 h-4 text-accent" />
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            <div className="bg-mist px-4 py-3 border-t border-ash flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-dim flex items-center gap-2">
                Use <span className="inline-flex bg-white border border-ash rounded px-1.5 py-0.5 shadow-sm">↑</span> <span className="inline-flex bg-white border border-ash rounded px-1.5 py-0.5 shadow-sm">↓</span> to navigate
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-dim flex items-center gap-2">
                <span className="inline-flex bg-white border border-ash rounded px-1.5 py-0.5 shadow-sm">Enter</span> to select
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
