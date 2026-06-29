'use client'

import { AnimateIn } from '@/components/AnimateIn'

export function Contact() {
  return (
    <section id="contact" className="bg-surface-light">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 md:gap-16 items-end">

          <AnimateIn>
            <div className="space-y-5">
              <p className="font-mono text-eyebrow uppercase text-text-secondary-inv/50 tracking-wider">
                Get in touch
              </p>
              <h2 className="font-sans text-heading text-text-primary-inv">
                Let&apos;s talk.
              </h2>
              <p className="font-sans text-body text-text-secondary-inv max-w-md">
                I&apos;m looking for a backend internship starting August 2026.
                If you have an interesting problem to solve, I&apos;d love to hear about it.
              </p>
              <a
                href="mailto:hilmannidal@gmail.com"
                className="inline-block font-mono font-semibold text-accent hover:text-accent-hover transition-colors focus-ring"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}
              >
                hilmannidal@gmail.com
              </a>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="flex flex-col gap-3 md:border-l md:border-black/[0.06] md:pl-10 pb-1">
              <p className="font-mono text-[0.6875rem] text-text-secondary-inv/40 uppercase tracking-wider mb-1">
                Elsewhere
              </p>
              <a
                href="https://github.com/kaz-hero123"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-caption text-text-secondary-inv hover:text-text-primary-inv link-draw transition-colors focus-ring inline-flex items-center gap-2 min-h-[44px]"
              >
                GitHub
                <span className="text-[0.625rem] text-text-secondary-inv/30">&nearr;</span>
              </a>
              <a
                href="https://linkedin.com/in/hilman-nidal"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-caption text-text-secondary-inv hover:text-text-primary-inv link-draw transition-colors focus-ring inline-flex items-center gap-2 min-h-[44px]"
              >
                LinkedIn
                <span className="text-[0.625rem] text-text-secondary-inv/30">&nearr;</span>
              </a>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
