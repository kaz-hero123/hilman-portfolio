'use client'

import { m } from 'framer-motion'
import { fadeUpVariant } from '@/lib/motion'
import { Magnetic } from '@/components/animations/Magnetic'
import { Particles } from '@/components/animations/Particles'
import { TimeBadge } from '@/components/animations/TimeBadge'
import { ClickConfetti } from '@/components/animations/ClickConfetti'


const fadeUp = fadeUpVariant


export function CTA() {
  return (
    <section id="contact" className="bg-ink relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" aria-hidden="true" />

      <Particles className="opacity-40" quantity={60} />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-28">
        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start"
        >
          <div>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
                <span className="font-mono text-[11px] text-emerald-400 tracking-wide uppercase">
                  Available for new projects
                </span>
              </div>
              <TimeBadge />
            </div>

            <h2
              className="font-serif font-bold text-white tracking-tight"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                lineHeight: '1.05',
              }}
            >
              Let&apos;s build something that works
            </h2>
          </div>

          <div className="md:pt-2">
            <p className="font-body text-[16px] leading-[1.7] text-white/60 mb-8">
              Looking for a backend developer or a project manager who
              actually ships? Start a conversation.
            </p>

            <div className="flex items-center gap-5">
              <Magnetic>
                <ClickConfetti>
                  <a
                    href="mailto:hilmannidal@gmail.com"
                    className="inline-flex items-center justify-center font-mono text-[12px] md:text-[13px] uppercase tracking-widest font-medium text-ink bg-white border border-transparent px-7 py-3 hover:bg-white/90 transition-all duration-200 focus-ring rounded-sm"
                  >
                    Contact
                  </a>
                </ClickConfetti>
              </Magnetic>
              <Magnetic>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center font-mono text-[12px] md:text-[13px] uppercase tracking-widest font-medium text-white border border-white/30 px-7 py-3 hover:bg-white/10 hover:border-white transition-all duration-200 focus-ring rounded-sm"
                >
                  Work
                </a>
              </Magnetic>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
