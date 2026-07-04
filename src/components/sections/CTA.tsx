'use client'

import { motion } from 'framer-motion'

// ─── Animation ────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

// ─── Component ────────────────────────────────────────────────────────────────

export function CTA() {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start"
        >
          {/* Left: Big serif heading */}
          <h2
            className="font-serif font-black italic text-ink tracking-tight"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
              lineHeight: '1.05',
            }}
          >
            Let&apos;s build something that works
          </h2>

          {/* Right: Paragraph + buttons */}
          <div className="md:pt-2">
            <p className="font-body text-[16px] leading-[1.7] text-dim mb-8">
              Looking for a backend developer or a project manager who
              actually ships? Start a conversation.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="mailto:hilmannidal@gmail.com"
                className="font-body text-[14px] font-medium text-white bg-ink px-8 py-3 hover:bg-ink/80 transition-colors duration-200 focus-ring"
              >
                Contact
              </a>
              <a
                href="#work"
                className="font-body text-[14px] font-medium text-ink border border-ink px-8 py-3 hover:bg-ink hover:text-white transition-colors duration-200 focus-ring"
              >
                Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
