'use client'

import { m, useMotionValue, useMotionTemplate } from 'framer-motion'
import Image from 'next/image'

import { createStaggerContainer, fadeInVariant } from '@/lib/motion'
import { ScrambleText } from '@/components/animations/ScrambleText'
import { Magnetic } from '@/components/animations/Magnetic'
import { Particles } from '@/components/animations/Particles'


const stagger = createStaggerContainer(0.08, 0.3)

const lineUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const fadeIn = fadeInVariant

const floatUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 1.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
}


const techBadges = [
  { name: 'Laravel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
]


export function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/hero-workspace.png"
          alt="Cinematic developer workspace at night — laptop with code, amber desk lamp, books"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/65" />

        <div className="absolute inset-0 z-0 opacity-40">
          <Particles quantity={100} ease={80} />
        </div>

        <div className="absolute inset-0 dot-grid opacity-20" />

        <m.div
          className="absolute inset-0 dot-grid opacity-0 group-hover:opacity-70 transition-opacity duration-700"
          style={{
            WebkitMaskImage: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, black, transparent 80%)`,
            maskImage: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, black, transparent 80%)`,
          }}
        />
      </div>

      <div className="h-16 shrink-0" />

      <div className="relative z-10 flex-1 flex flex-col max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20">

        <div className="flex-[1.15]" />



        <m.h1
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mb-8 md:mb-10"
        >
          {[
            'Backend',
            'Developer',
          ].map((line, i) => (
            <m.span
              key={i}
              variants={lineUp}
              className="block font-serif font-black animate-gradient-text tracking-tightest"
              style={{
                fontSize: 'clamp(3rem, 7.5vw, 7.5rem)',
                lineHeight: '0.98',
              }}
            >
              <ScrambleText text={line} />
            </m.span>
          ))}
        </m.h1>

        <m.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
          className="flex items-center gap-5 mt-4"
        >
          <Magnetic>
            <a
              href="#work"
              className="inline-flex items-center justify-center font-mono text-[12px] md:text-[13px] uppercase tracking-widest font-medium text-white bg-white/5 border border-white/30 px-7 py-3 hover:bg-white/10 hover:border-white transition-all duration-200 focus-ring rounded-sm backdrop-blur-sm"
            >
              View Projects
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center justify-center font-mono text-[12px] md:text-[13px] uppercase tracking-widest font-medium text-white/60 hover:text-white transition-colors duration-200 focus-ring group"
            >
              Contact <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </Magnetic>
        </m.div>

        <div className="flex-[0.55]" />

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-10 md:pb-16">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap gap-3 order-2 md:order-1"
          >
            {techBadges.map((badge, i) => (
              <m.span
                key={badge.name}
                custom={i}
                variants={floatUp}
                initial="hidden"
                animate="visible"
                className="bg-white/5 border border-white/20 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-white/90 flex items-center gap-2 rounded-sm shadow-[0_2px_0_0_rgba(255,255,255,0.1)] backdrop-blur-sm"
              >
                <img src={badge.iconUrl} alt={badge.name} width={14} height={14} className="w-3.5 h-3.5 object-contain" />
                {badge.name}
              </m.span>
            ))}
          </m.div>

        </div>
      </div>

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
          scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent animate-scroll-bounce" />
      </m.div>
    </section>
  )
}
