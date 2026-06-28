'use client'

/**
 * HowIBuild — Section 2 (light band)
 * PRD §6.2
 *
 * Opening line: IBM Plex Serif editorial — ONLY place serif is used
 * Body: IBM Plex Sans, no bullets, no "passionate about" language
 */

export function HowIBuild() {
  return (
    <section
      id="how-i-build"
      className="bg-band-light"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-32">

        {/* Section eyebrow */}
        <p className="font-mono text-eyebrow uppercase text-text-muted-light tracking-widest mb-10">
          How I Build
        </p>

        {/* Opening line — Serif, used EXACTLY once on this site */}
        <p className="font-serif text-editorial text-text-primary-light mb-6">
          Backend engineering, for me, is mostly about what happens after you ship.
        </p>

        {/* Body paragraphs — Sans only */}
        <p className="font-sans text-body text-text-primary-light mb-6">
          At HummaTech, I learned what it means to build something schools depend on daily.
          That experience shaped how I think about architecture: not &ldquo;what&apos;s the simplest
          thing that could work&rdquo; but &ldquo;what&apos;s the simplest thing that stays maintainable
          when someone else touches it at 2am.&rdquo;
        </p>

        <p className="font-sans text-body text-text-primary-light">
          I hold a backend developer and project manager role on team projects — not
          because I had to, but because the systems thinking that makes good backend work
          also makes good coordination. The same instinct that tells you to separate
          concerns in code tells you to separate concerns in a team.
        </p>

      </div>
    </section>
  )
}
