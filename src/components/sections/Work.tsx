'use client'

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import type { Project } from '@/data/projects'

// ─── Animation ────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

// ─── Sub-components ───────────────────────────────────────────────────────────

/**
 * Hero card — left column, larger image (4:3), text below. Completely unboxed.
 */
function HeroCard({ project }: { project: Project }) {
  return (
    <article className="group">
      {/* Image container — no border, image flush */}
      <div className="relative w-full aspect-[4/3] bg-[#e8e8e8] overflow-hidden mb-5">
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

      {/* Metadata — completely unboxed, no card border */}
      <h3 className="font-serif font-bold text-[1.5rem] leading-[1.1] tracking-tight text-ink mb-2">
        {project.title}
      </h3>
      <p className="font-body text-[14px] leading-[1.6] text-dim mb-4">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-body text-[12px] text-ink border border-[#d4d4d4] px-2.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={project.href ?? '#'}
        className="inline-flex items-center gap-1.5 font-body text-[13px] text-ink hover:text-dim transition-colors duration-150 focus-ring"
      >
        View project
        <ChevronRight size={13} strokeWidth={1.75} />
      </a>
    </article>
  )
}

/**
 * Standard card — center/right columns. Smaller image (3:2), same unboxed layout.
 */
function StandardCard({ project }: { project: Project }) {
  return (
    <article className="group">
      {/* Image — no border */}
      <div className="relative w-full aspect-[3/2] bg-[#e8e8e8] overflow-hidden mb-5">
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

      {/* Metadata */}
      <h3 className="font-serif font-bold text-[1.35rem] leading-[1.1] tracking-tight text-ink mb-2">
        {project.title}
      </h3>
      <p className="font-body text-[14px] leading-[1.6] text-dim mb-4">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-body text-[12px] text-ink border border-[#d4d4d4] px-2.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={project.href ?? '#'}
        className="inline-flex items-center gap-1.5 font-body text-[13px] text-ink hover:text-dim transition-colors duration-150 focus-ring"
      >
        View project
        <ChevronRight size={13} strokeWidth={1.75} />
      </a>
    </article>
  )
}

/** Gray placeholder with subtle image icon — no border */
function PlaceholderImg() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#e8e8e8]">
      <svg
        width="40"
        height="36"
        viewBox="0 0 40 36"
        fill="none"
        aria-hidden="true"
        className="opacity-30"
      >
        <rect x="0" y="0" width="40" height="28" rx="2" fill="#aaa" />
        <circle cx="13" cy="10" r="4" fill="#888" />
        <path d="M0 20 L12 12 L22 20 L30 14 L40 20 V28 H0 Z" fill="#999" />
      </svg>
    </div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function Work() {
  const leftProjects = projects.filter((p) => p.col === 0)
  const centerProjects = projects.filter((p) => p.col === 1)
  const rightProjects = projects.filter((p) => p.col === 2)

  return (
    <section id="work" className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* ── Section header ─────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="pt-28 pb-16 text-center"
        >
          <p className="font-body text-[11px] font-semibold tracking-[0.12em] uppercase text-ink mb-4">
            Work
          </p>
          <h2
            className="font-serif font-black text-ink tracking-tight mb-5"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              lineHeight: '1.05',
            }}
          >
            Selected projects with backbone
          </h2>
          <p className="font-body text-[15px] text-dim leading-[1.65]">
            A few things I have built, structured, and shipped.
          </p>
        </motion.div>

        {/* ── 3-column masonry grid ──────────────────────────────────────── */}
        {/* Center + Right columns have top padding to create the staggered
            masonry offset visible in the design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14 pb-16">
          {/* Left column — hero cards (taller images) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-14"
          >
            {leftProjects.map((p) => (
              <HeroCard key={p.slug} project={p} />
            ))}
          </motion.div>

          {/* Center column — offset down, standard cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-10 md:pt-24"
          >
            {centerProjects.map((p) => (
              <StandardCard key={p.slug} project={p} />
            ))}
          </motion.div>

          {/* Right column — slight offset, standard cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-10 md:pt-8"
          >
            {rightProjects.map((p) => (
              <StandardCard key={p.slug} project={p} />
            ))}
          </motion.div>
        </div>

        {/* ── View all CTA ───────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center pb-28"
        >
          <a
            href="#"
            className="font-body text-[14px] font-medium text-ink border border-ink px-8 py-3 hover:bg-ink hover:text-white transition-colors duration-200 focus-ring"
          >
            View all
          </a>
        </motion.div>
      </div>

      {/* ── Hairline separator — exactly centred between S2 → S3 ─────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <hr className="border-0 border-t border-[#E5E5E5]" />
      </div>
    </section>
  )
}
