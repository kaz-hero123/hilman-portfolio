'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

// ─── Animation ────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

// ─── Tool / Stack icons ───────────────────────────────────────────────────────

function LaravelIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934c0 .135-.073.26-.189.327l-9.03 5.2a.32.32 0 01-.085.042l-.033.009a.358.358 0 01-.183 0l-.033-.009a.3.3 0 01-.086-.042L.474 18.756a.378.378 0 01-.189-.327V8.082c0-.036.005-.07.014-.1l.007-.027a.336.336 0 01.04-.08l.016-.023a.338.338 0 01.063-.064l.02-.016a.334.334 0 01.078-.046L4.838 5.24a.378.378 0 01.378 0l4.315 2.487a.381.381 0 01.063.064l.02.016.015.023c.018.025.032.052.04.08l.008.027c.009.032.013.065.013.1v9.652l3.76-2.164V10.58c0-.036.005-.07.014-.1l.007-.028a.345.345 0 01.04-.08l.016-.022a.35.35 0 01.063-.065l.02-.015a.334.334 0 01.078-.047l4.315-2.487a.378.378 0 01.378 0l4.315 2.487a.34.34 0 01.078.047l.02.015a.35.35 0 01.063.065l.015.022c.018.026.032.053.04.08zM23.094 10.48V6.035l-1.58.91-2.18 1.255v4.446zm-4.322 7.428V13.46l-2.145 1.228-6.126 3.498v4.505zM1.037 8.58v9.576l8.468 4.88v-4.505l-4.43-2.504-.002-.003-.003-.001a.376.376 0 01-.062-.063l-.017-.02a.33.33 0 01-.04-.075l-.01-.026a.333.333 0 01-.013-.095V9.834L3.18 8.58l-1.58-.91v.91zm3.99-2.848L1.276 7.738l3.749 2.159 3.75-2.159-3.75-2.006zm1.958 11.292l2.18-1.256V6.035L7.584 6.946l-2.18 1.255v9.733zm8.84-12.452l-3.75 2.006 3.75 2.159 3.748-2.16-3.748-2.005zm-.567 4.645l-2.18-1.256-1.58-.91v4.446l2.18 1.256 1.58.91V9.217zm-8.468 8.756l5.657-3.23 2.41-1.378-3.744-2.157-4.321 2.49-3.547 2.044 3.545 2.231z" />
    </svg>
  )
}

function NodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 00.272 0l8.795-5.076a.277.277 0 00.134-.238V6.921a.28.28 0 00-.137-.242l-8.791-5.072a.278.278 0 00-.271 0L3.075 6.68a.282.282 0 00-.139.241v10.15a.274.274 0 00.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.55l-2.307-1.33A1.85 1.85 0 011.36 17.07V6.921c0-.654.35-1.266.922-1.585L11.076.255a1.918 1.918 0 011.844 0l8.794 5.08c.572.32.922.932.922 1.586v10.15c0 .653-.35 1.264-.922 1.583l-8.794 5.08c-.28.163-.6.247-.922.247zm2.71-6.997c-3.844 0-4.65-1.764-4.65-3.244 0-.142.114-.253.255-.253h1.14c.127 0 .234.093.252.218.172 1.161.684 1.748 3.003 1.748 1.848 0 2.632-.418 2.632-1.398 0-.566-.223-.985-3.095-1.268-2.4-.236-3.885-.768-3.885-2.69 0-1.77 1.493-2.827 3.994-2.827 2.81 0 4.199.975 4.374 3.07a.257.257 0 01-.066.194.261.261 0 01-.187.08h-1.146a.253.253 0 01-.246-.203c-.273-1.215-.938-1.603-2.729-1.603-2.009 0-2.243.7-2.243 1.224 0 .636.276.821 2.998 1.18 2.697.356 3.983.859 3.983 2.764 0 1.912-1.594 3.008-4.384 3.008z" />
    </svg>
  )
}

function GitIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.66 2.66a1.838 1.838 0 11-1.103 1.03l-2.48-2.48v6.53a1.838 1.838 0 11-1.513-.066V8.714a1.838 1.838 0 01-.998-2.41L7.636 3.58.45 10.767a1.55 1.55 0 000 2.188l10.48 10.48a1.55 1.55 0 002.186 0l10.43-10.43a1.55 1.55 0 000-2.075z" />
    </svg>
  )
}

function TailwindIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

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
          {/* ── Left: Photo placeholder ───────────────────────────────────── */}
          <div className="relative w-full aspect-[4/3] bg-[#e8e8e8] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="48"
                height="42"
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
          </div>

          {/* ── Right: About content ──────────────────────────────────────── */}
          <div>
            {/* Label */}
            <p className="font-body text-[11px] font-semibold tracking-[0.12em] uppercase text-ink mb-5">
              About
            </p>

            {/* Heading */}
            <h2
              className="font-serif font-black italic text-ink tracking-tight mb-6"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                lineHeight: '1.05',
              }}
            >
              The man behind the machine
            </h2>

            {/* Body text */}
            <p className="font-body text-[16px] leading-[1.7] text-dim mb-8">
              I found my way into software through a fascination with how things work.
              The clean logic of a well-structured function is a beautiful thing. I believe
              good code is invisible to the user.
            </p>

            {/* ── Tool icons row ────────────────────────────────────────── */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-ink">
                <LaravelIcon />
                <span className="font-body text-[14px] font-semibold tracking-tight">Laravel</span>
              </div>
              <div className="flex items-center gap-2 text-ink">
                <NodeIcon />
                <span className="font-body text-[14px] font-semibold tracking-tight">Node.js</span>
              </div>
              <div className="flex items-center gap-2 text-ink">
                <GitIcon />
                <span className="font-body text-[14px] font-semibold tracking-tight">Git</span>
              </div>
              <div className="flex items-center gap-2 text-ink">
                <TailwindIcon />
                <span className="font-body text-[14px] font-semibold tracking-tight">Tailwind</span>
              </div>
            </div>

            {/* ── CTA row ──────────────────────────────────────────────── */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="font-body text-[14px] font-medium text-ink border border-ink px-8 py-3 hover:bg-ink hover:text-white transition-colors duration-200 focus-ring"
              >
                Resume
              </a>
              <a
                href="https://linkedin.com/in/hilman-nidal-hamzi-997969415"
                className="inline-flex items-center gap-1.5 font-body text-[14px] font-medium text-ink hover:text-dim transition-colors duration-150 focus-ring"
              >
                LinkedIn
                <ChevronRight size={14} strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Hairline separator ───────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <hr className="border-0 border-t border-[#E5E5E5]" />
      </div>
    </section>
  )
}
