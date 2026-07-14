'use client'

import { m } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { fadeUpVariant, createStaggerContainer } from '@/lib/motion'
import { SpotlightCard } from '@/components/animations/SpotlightCard'
import { StarBorder } from '@/components/animations/StarBorder'
import { WavyDivider } from '@/components/ui/WavyDivider'


const fadeUp = fadeUpVariant
const stagger = createStaggerContainer(0.1, 0.15)


function ServerIcon({ className }: { className?: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="6" y="4" width="24" height="10" rx="2" />
      <rect x="6" y="22" width="24" height="10" rx="2" />
      <line x1="18" y1="14" x2="18" y2="22" />
      <circle cx="11" cy="9" r="1.5" fill="currentColor" />
      <circle cx="11" cy="27" r="1.5" fill="currentColor" />
      <line x1="16" y1="9" x2="25" y2="9" />
      <line x1="16" y1="27" x2="25" y2="27" />
    </svg>
  )
}

function ApiIcon({ className }: { className?: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 12H30" />
      <path d="M24 6L30 12L24 18" />
      <path d="M30 24H6" />
      <path d="M12 18L6 24L12 30" />
    </svg>
  )
}

function KanbanIcon({ className }: { className?: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="4" width="8" height="28" rx="1.5" />
      <rect x="14" y="4" width="8" height="20" rx="1.5" />
      <rect x="24" y="4" width="8" height="14" rx="1.5" />
      <line x1="6" y1="9" x2="10" y2="9" />
      <line x1="6" y1="14" x2="10" y2="14" />
      <line x1="6" y1="19" x2="10" y2="19" />
      <line x1="16" y1="9" x2="20" y2="9" />
      <line x1="16" y1="14" x2="20" y2="14" />
      <line x1="26" y1="9" x2="30" y2="9" />
    </svg>
  )
}

function ToolsIcon({ className }: { className?: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3" />
      <circle cx="24" cy="8" r="3" />
      <circle cx="18" cy="28" r="3" />
      <path d="M12 11V18C12 22 14 25 18 25" />
      <path d="M24 11V18C24 22 22 25 18 25" />
    </svg>
  )
}


const services = [
  {
    icon: ServerIcon,
    title: 'Backend development \u2014 Laravel & PHP',
    description:
      'Route design, Eloquent modeling, service classes, and state machines. Laravel is the primary tool; the goal is clean architecture that survives real usage.',
  },
  {
    icon: ApiIcon,
    title: 'Node.js & API integration',
    description:
      'Express servers, third-party API wiring (Gemini Vision), and request/response pipelines. Secondary stack, used where Laravel is not the right fit.',
  },
  {
    icon: KanbanIcon,
    title: 'Project management',
    description:
      'Concurrent PM across team projects. Task scoping, sprint coordination, and deadline tracking \u2014 not just a title, a working role.',
  },
  {
    icon: ToolsIcon,
    title: 'Tooling & workflow',
    description:
      'Git with Conventional Commits, three-tier branching, Tailwind CSS, DomPDF, and structured self-study roadmaps. Also worked with C, C++, and Python.',
  },
]


export function Craft() {
  return (
    <section id="craft" className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-24">
        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20"
        >
          <div>
            <p className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-5">
              {'// craft'}
            </p>
            <h2
              className="font-serif font-bold text-ink tracking-tight"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                lineHeight: '1.05',
              }}
            >
              What I work with and how I work
            </h2>
          </div>

          <div className="md:pt-8">
            <p className="font-body text-[16px] leading-[1.7] text-dim max-w-[480px]">
              Primary stack is Laravel/PHP. Everything else supports it.
              I also manage projects — scoping, coordinating, shipping.
            </p>
          </div>
        </m.div>

        <div className="mb-14">
          <WavyDivider />
        </div>

        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-20 group/grid"
        >
          {services.map((service) => (
            <m.div
              key={service.title}
              variants={fadeUp}
              className="h-full transition-all duration-500 group-hover/grid:scale-[0.95] group-hover/grid:opacity-50 hover:!scale-100 hover:!opacity-100 hover:z-10"
            >
              <StarBorder>
                <SpotlightCard
                  className="group p-6 bg-transparent transition-all duration-300 rounded-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] h-full"
                >
                  <service.icon className="text-accent mb-6 w-9 h-9 transition-colors duration-200" />

                  <h3 className="font-serif font-bold text-[1.35rem] leading-[1.15] tracking-tight text-ink mb-3">
                    {service.title}
                  </h3>

                  <p className="font-body text-[14px] leading-[1.7] text-dim">
                    {service.description}
                  </p>
                </SpotlightCard>
              </StarBorder>
            </m.div>
          ))}
        </m.div>

        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-6"
        >
          <a
            href="#work"
            className="inline-flex items-center justify-center font-mono text-[12px] md:text-[13px] uppercase tracking-widest font-medium text-ink border border-ink px-7 py-3 hover:bg-ink hover:text-white transition-all duration-200 focus-ring rounded-sm"
          >
            Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-mono text-[12px] md:text-[13px] uppercase tracking-widest font-medium text-dim hover:text-ink transition-colors duration-200 focus-ring group"
          >
            Contact
            <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </m.div>
      </div>
    </section>
  )
}
