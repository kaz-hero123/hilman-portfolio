'use client'

import { motion } from 'framer-motion'
import { fadeUpVariant } from '@/lib/motion'
import { TextReveal } from '@/components/animations/TextReveal'
import { BlurReveal } from '@/components/animations/BlurReveal'
import { HoverImageReveal } from '@/components/animations/HoverImageReveal'
import { HighlightText } from '@/components/animations/HighlightText'
import { ShinyButton } from '@/components/animations/ShinyButton'
import { PhysicsButton } from '@/components/animations/PhysicsButton'
import { Marquee } from '@/components/animations/Marquee'
import { WavyDivider } from '@/components/ui/WavyDivider'
import { TiltCard } from '@/components/animations/TiltCard'
import Image from 'next/image'
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
          {/* Portrait Image */}
          <TiltCard>
            <div className="relative w-full aspect-[4/3] bg-ash/10 overflow-hidden group">
              <Image
                src="/hilman.jpg"
                alt="Hilman"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border border-transparent group-hover:border-accent/30 transition-colors duration-300 pointer-events-none" />
            </div>
          </TiltCard>

          <div>
            <p className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-5">
              {'THIS IS'}
            </p>

            <h2
              className="font-serif font-bold text-ink tracking-tight mb-6 flex flex-wrap items-center gap-2"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                lineHeight: '1.05',
              }}
            >
              <span className="opacity-90">Hi, I'm</span>
              <HoverImageReveal imageSrc="/hilman.jpg" textColor="text-accent">
                Hilman Nidal Hamzi
              </HoverImageReveal>
            </h2>

            <BlurReveal delay={0.1}>
              <p className="font-body text-[16px] leading-[1.7] text-dim mb-8">
                I found my way into{' '}
                <HoverImageReveal imageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop">
                  software
                </HoverImageReveal>{' '}
                through a fascination with how things work. The{' '}
                <HoverImageReveal imageSrc="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop" textColor="text-ink">
                  clean logic
                </HoverImageReveal>{' '}
                of a well-structured function is a beautiful thing. I believe{' '}
                <HoverImageReveal imageSrc="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=600&auto=format&fit=crop" textColor="text-ink">
                  good code
                </HoverImageReveal>{' '}
                is <HighlightText color="#bae6fd" delay={0.3}>invisible</HighlightText> to the user.
              </p>
            </BlurReveal>

            <div className="mb-10 w-full overflow-hidden">
              <Marquee baseVelocity={-2}>
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2.5 px-4 py-2 border border-ash/80 bg-white hover:border-ink/20 transition-all duration-200 cursor-default rounded-sm shadow-sm flex-shrink-0"
                  >
                    <img src={tech.iconUrl} alt={tech.name} className="w-4 h-4 object-contain" />
                    <span className="font-mono text-[12px] font-medium tracking-tight text-ink uppercase">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </Marquee>
            </div>

            <div className="flex items-center gap-5">
              <PhysicsButton>
                <ShinyButton href="#">
                  Resume
                </ShinyButton>
              </PhysicsButton>
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
        <WavyDivider />
      </div>
    </section>
  )
}
