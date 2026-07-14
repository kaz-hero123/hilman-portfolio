'use client'

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { m } from 'framer-motion'
import { projects } from '@/data/projects'
import type { Project } from '@/data/projects'
import { fadeUpVariant, createStaggerContainer } from '@/lib/motion'
import { TiltCard } from '@/components/animations/TiltCard'
import { ImageTrail } from '@/components/animations/ImageTrail'
import { WavyDivider } from '@/components/ui/WavyDivider'


const fadeUp = fadeUpVariant
const stagger = createStaggerContainer(0.1, 0.15)


/**
 * Hero card — left column, larger image (4:3), text below.
 */
function HeroCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col">
      <TiltCard>
        <div className="relative w-full aspect-[4/3] bg-[#f0f0f0] overflow-hidden mb-5 border border-ash/50 card-lift">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <PlaceholderImg />
          )}
        </div>
      </TiltCard>

      <div className="flex flex-col flex-1">
        <h3 className="font-serif font-bold text-[1.5rem] leading-[1.1] tracking-tight text-ink mb-2">
          {project.title}
        </h3>
        <p className="font-body text-[14px] leading-[1.6] text-dim mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-ash/80 bg-white text-dim rounded-sm shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.href ?? '#'}
          className="inline-flex items-center gap-1.5 font-body text-[13px] text-ink hover:text-accent transition-colors duration-150 focus-ring mt-auto"
        >
          View project
          <ChevronRight size={13} strokeWidth={1.75} />
        </a>
      </div>
    </article>
  )
}

/**
 * Standard card — center/right columns.
 */
function StandardCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col">
      <TiltCard>
        <div className="relative w-full aspect-[3/2] bg-[#f0f0f0] overflow-hidden mb-5 border border-ash/50 card-lift">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          ) : (
            <PlaceholderImg />
          )}
        </div>
      </TiltCard>

      <div className="flex flex-col flex-1">
        <h3 className="font-serif font-bold text-[1.35rem] leading-[1.1] tracking-tight text-ink mb-2">
          {project.title}
        </h3>
        <p className="font-body text-[14px] leading-[1.6] text-dim mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-ash/80 bg-white text-dim rounded-sm shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.href ?? '#'}
          className="inline-flex items-center gap-1.5 font-body text-[13px] text-ink hover:text-accent transition-colors duration-150 focus-ring mt-auto"
        >
          View project
          <ChevronRight size={13} strokeWidth={1.75} />
        </a>
      </div>
    </article>
  )
}

/** Wireframe placeholder for project image */
function PlaceholderImg() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-ash/10 border-2 border-dashed border-ash/50 group">
      <span className="font-mono text-[12px] tracking-widest uppercase mb-1 text-dim">Project Image</span>
      <span className="font-body text-[11px] text-dim/60">Upload screenshot here</span>
    </div>
  )
}


export function Work() {
  const leftProjects = projects.filter((p) => p.col === 0)
  const centerProjects = projects.filter((p) => p.col === 1)
  const rightProjects = projects.filter((p) => p.col === 2)

  return (
    <section id="work" className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="pt-28 pb-16 text-center"
        >
          <p className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-4">
            {'// work'}
          </p>
          <h2
            className="font-serif font-bold text-ink tracking-tight mb-5"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              lineHeight: '1.05',
            }}
          >
            Projects I have built
          </h2>
          <p className="font-body text-[15px] text-dim leading-[1.65]">
            Real systems, real decisions, real constraints.
          </p>
        </m.div>

        <ImageTrail images={projects.map(p => p.image).filter(img => img !== undefined) as string[]}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14 pb-16">
          <m.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-14"
          >
            {leftProjects.map((p) => (
              <m.div key={p.slug} variants={fadeUp}>
                <HeroCard project={p} />
              </m.div>
            ))}
          </m.div>

          <m.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-10 md:pt-24"
          >
            {centerProjects.map((p) => (
              <m.div key={p.slug} variants={fadeUp}>
                <StandardCard project={p} />
              </m.div>
            ))}
          </m.div>

            <m.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col gap-10 md:pt-8"
            >
              {rightProjects.map((p) => (
                <m.div key={p.slug} variants={fadeUp}>
                  <StandardCard project={p} />
                </m.div>
              ))}
            </m.div>
          </div>
        </ImageTrail>

        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center pb-28"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center font-mono text-[12px] md:text-[13px] uppercase tracking-widest font-medium text-ink border border-ink px-7 py-3 hover:bg-ink hover:text-white transition-all duration-200 focus-ring rounded-sm"
          >
            View all
          </a>
        </m.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <WavyDivider />
      </div>
    </section>
  )
}
