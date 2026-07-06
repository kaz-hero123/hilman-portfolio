'use client'

import { motion } from 'framer-motion'
import { fadeUpVariant } from '@/lib/motion'
import { BlurReveal } from '@/components/animations/BlurReveal'
const fadeUp = fadeUpVariant

const techStack = [
  { name: 'Laravel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Tailwind', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
]

export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start"
        >
          {/* Image Placeholder Slot */}
          <div className="relative w-full aspect-[4/3] bg-ash/20 border-2 border-dashed border-ash flex flex-col items-center justify-center text-dim group">
            <span className="font-mono text-[13px] tracking-widest uppercase mb-2">Image Slot</span>
            <span className="font-body text-[12px] opacity-60">Replace with your portrait</span>
            <div className="absolute inset-0 border border-transparent group-hover:border-accent/30 transition-colors duration-300" />
          </div>

          <div>
            <p className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-5">
              {'THIS IS'}
            </p>

            <h2
              className="font-serif font-bold text-ink tracking-tight mb-6"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                lineHeight: '1.05',
              }}
            >
              The man behind the machine
            </h2>

            <BlurReveal delay={0.1}>
              <p className="font-body text-[16px] leading-[1.7] text-dim mb-8">
                I found my way into software through a fascination with how things work.
                The clean logic of a well-structured function is a beautiful thing. I believe
                good code is invisible to the user.
              </p>
            </BlurReveal>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2.5 px-3 py-1.5 border border-ash/80 bg-white hover:border-ink/20 transition-all duration-200 cursor-default rounded-sm shadow-sm"
                >
                  <img src={tech.iconUrl} alt={tech.name} className="w-4 h-4 object-contain" />
                  <span className="font-mono text-[12px] font-medium tracking-tight text-ink uppercase">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <a
                href="#"
                className="inline-flex items-center justify-center font-mono text-[12px] md:text-[13px] uppercase tracking-widest font-medium text-ink border border-ink px-7 py-3 hover:bg-ink hover:text-white transition-all duration-200 focus-ring rounded-sm"
              >
                Resume
              </a>
              <a
                href="https://linkedin.com/in/hilman-nidal-hamzi-997969415"
                className="inline-flex items-center gap-1.5 font-mono text-[12px] md:text-[13px] uppercase tracking-widest font-medium text-dim hover:text-ink transition-colors duration-200 focus-ring group"
              >
                LinkedIn
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <hr className="border-0 border-t border-[#E5E5E5]" />
      </div>
    </section>
  )
}
