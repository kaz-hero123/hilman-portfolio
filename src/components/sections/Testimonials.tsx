'use client'

import { m } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { fadeUpVariant, createStaggerContainer } from '@/lib/motion'


const fadeUp = fadeUpVariant
const stagger = createStaggerContainer(0.12, 0.15)


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


export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-28">
        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-4">
            {'// testimonials'}
          </p>
          <h2
            className="font-serif font-bold text-ink tracking-tight mb-5"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
              lineHeight: '1.05',
            }}
          >
            Kind words
          </h2>
          <p className="font-body text-[15px] text-dim leading-[1.65]">
            The work speaks but a few kind words never hurt.
          </p>
        </m.div>

        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <m.article
              key={t.name}
              variants={fadeUp}
              className="relative border border-ash p-8 md:p-10 flex flex-col hover:border-accent/30 hover:shadow-sm transition-all duration-200"
            >
              <span
                className="absolute top-5 right-6 font-serif text-[4rem] leading-none text-accent/10 select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#0ea5e9"
                    stroke="none"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="font-body text-[15px] leading-[1.7] text-ink mb-8 flex-1 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-accent/20 bg-mist">
                  {t.avatar ? (
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center font-mono text-[13px] font-bold text-dim">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
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
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  )
}
