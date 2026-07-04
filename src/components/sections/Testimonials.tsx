'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

// ─── Animation ────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote:
      'He builds with the precision of a watchmaker and the eye of an editor. There is no fat on the bone.',
    name: 'Elena Torres',
    role: 'Editor-in-Chief, The Archipelago Review',
    avatar: '/avatars/elena.png',
    stars: 5,
  },
  {
    quote:
      'The code was so clean it felt like reading a well-set book. We launched without a single hotfix.',
    name: 'David Chen',
    role: 'CTO, Field Guide Inc.',
    avatar: '/avatars/david.png',
    stars: 5,
  },
  {
    quote:
      'He understands that white space is not empty. It is a material. Our brand finally breathes.',
    name: 'Clara Mireau',
    role: 'Founder, Meridian Coffee',
    avatar: '/avatars/clara.png',
    stars: 5,
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-28">
        {/* ── Section header — centered ──────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <h2
            className="font-serif font-black italic text-ink tracking-tight mb-5"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
              lineHeight: '1.05',
            }}
          >
            Testimonials
          </h2>
          <p className="font-body text-[15px] text-dim leading-[1.65]">
            The work speaks but a few kind words never hurt.
          </p>
        </motion.div>

        {/* ── 3-column testimonial cards ──────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.name}
              variants={fadeUp}
              className="border border-ink p-8 md:p-10 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#111111"
                    stroke="none"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-[15px] leading-[1.7] text-ink mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <p className="font-body text-[14px] font-semibold text-ink leading-tight">
                    {t.name}
                  </p>
                  <p className="font-body text-[13px] text-dim leading-tight mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
