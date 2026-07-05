'use client'

import { motion } from 'framer-motion'
import { fadeUpSmallVariant, createStaggerContainer } from '@/lib/motion'

// ─── Animation ────────────────────────────────────────────────────────────────

const fadeUp = fadeUpSmallVariant
const stagger = createStaggerContainer(0.04, 0.1)

// ─── Technology data with actual brand colors ─────────────────────────────────

const technologies = [
  { name: 'Laravel',     iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'PHP',         iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'MySQL',       iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Node.js',     iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express',     iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
  { name: 'JavaScript',  iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind CSS',iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Git',         iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Python',      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Livewire',    color: '#FB70A9', icon: LivewireLogo },
  { name: 'REST API',    color: '#0ea5e9', icon: ApiLogo },
  { name: 'DomPDF',      color: '#E34F26', icon: PdfLogo },
]

// ─── SVG Logo Icons ───────────────────────────────────────────────────────────



function LivewireLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.001 0C6.174 0 1.448 4.957 1.448 11.07c0 3.806 1.789 7.181 4.57 9.214.074.055.164.044.225-.026l1.376-1.586c.06-.07.05-.175-.022-.235a8.196 8.196 0 01-3.103-6.44c0-4.513 3.488-8.185 7.507-8.185s7.507 3.672 7.507 8.186a8.197 8.197 0 01-3.103 6.44c-.072.059-.082.164-.022.234l1.376 1.586c.06.07.15.081.224.027 2.782-2.034 4.571-5.41 4.571-9.215C22.554 4.957 17.828 0 12.001 0z" />
    </svg>
  )
}

function ApiLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h16" />
      <path d="M14 6l6 6-6 6" />
      <circle cx="4" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function PdfLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3.5c0 .28-.22.5-.5.5H19v1h1.5V11H19v2h-1.5V7h3c.28 0 .5.22.5.5v.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z" />
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function LogoCloud() {
  const renderTechCards = (keyPrefix: string) => (
    technologies.map((tech) => (
      <div
        key={`${keyPrefix}-${tech.name}`}
        className="flex items-center gap-2.5 px-5 py-3.5 bg-white border border-ash/60 hover:border-accent/40 hover:shadow-sm transition-all duration-200 card-lift group/item cursor-default min-w-[170px]"
      >
        <div className="shrink-0 transition-transform duration-200 group-hover/item:scale-110 flex items-center justify-center w-5 h-5">
          {'iconUrl' in tech && tech.iconUrl ? (
            <img src={tech.iconUrl} alt={tech.name} className="w-full h-full object-contain" />
          ) : (
            <span style={{ color: 'color' in tech ? tech.color : 'inherit' }} className="w-full h-full flex items-center justify-center">
              {'icon' in tech && tech.icon && <tech.icon />}
            </span>
          )}
        </div>
        <span className="font-mono text-[13px] font-medium tracking-tight text-ink truncate">
          {tech.name}
        </span>
      </div>
    ))
  )

  return (
    <section id="trusted" className="bg-mist overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20">
        {/* ── Heading ─────────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-12"
        >
          <p className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-3">
            {'// stack'}
          </p>
          <p className="font-body text-[15px] font-semibold text-ink">
            Technologies & tools I work with
          </p>
        </motion.div>

        {/* ── Marquee container ───────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="relative flex overflow-hidden w-full group py-4 -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20"
        >
          {/* Edge gradients for smooth fade in/out */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-mist to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-mist to-transparent z-10 pointer-events-none" />

          {/* Marquee Track 1 */}
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap gap-4 shrink-0 px-2">
            {renderTechCards('m1')}
          </div>

          {/* Marquee Track 2 */}
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap gap-4 shrink-0 px-2">
            {renderTechCards('m2')}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
