'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const headlineLines = [
  'I build things',
  'that work and',
  'write them',
  'clean',
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
}

const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
    >
      {/* Background Image — full bleed */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-editorial.png"
          alt="Warm-toned editorial photograph with textured fabrics and reading lamp"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Subtle dark overlay for text contrast */}
        <div
          className="absolute inset-0 bg-black/35"
          aria-hidden="true"
        />
      </div>

      {/* Nav spacer */}
      <div className="h-[60px]" />

      {/* Hero Content — flex column, content pushed to bottom half */}
      <div className="relative z-10 flex-1 flex flex-col max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-16">
        {/* Top spacer — pushes content to vertical center/lower */}
        <div className="flex-[1.2]" />

        {/* Headline Block */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 md:mb-8"
        >
          {headlineLines.map((line, i) => (
            <motion.span
              key={i}
              variants={lineVariants}
              className="block font-serif font-black text-white tracking-[-0.02em]"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                lineHeight: '1.0',
              }}
            >
              {line}
            </motion.span>
          ))}
        </motion.h1>

        {/* CTA Buttons — "Work" filled + "Contact" outlined, matching reference */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex items-center gap-4 mb-auto"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center font-body text-[14px] font-medium text-ink bg-white px-6 py-3 hover:bg-white/90 transition-colors duration-200 focus-ring"
          >
            Work
          </a>
          <a
            href="mailto:hilmannidal@gmail.com"
            className="inline-flex items-center justify-center font-body text-[14px] font-medium text-white border border-white/50 px-6 py-3 hover:bg-white/10 transition-colors duration-200 focus-ring"
          >
            Contact
          </a>
        </motion.div>

        {/* Bottom spacer + descriptor text */}
        <div className="flex-[0.6]" />

        {/* Bottom descriptor text — right-aligned */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-end pb-10 md:pb-14"
        >
          <p className="font-body text-[15px] md:text-[16px] leading-[1.65] text-white/75 max-w-[440px] text-right">
            A designer and developer focused on editorial craft and
            structural clarity. This is where the grid meets the sentence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
