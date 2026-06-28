'use client'

/**
 * Contact — Section 7 (dark band)
 * PRD §6.7
 *
 * Primary action: email as large Mono display link in accent-dark
 * Secondary: GitHub / LinkedIn as plain text links, NOT icon buttons
 * Layout: asymmetric — email dominates left, secondary links right/below
 *
 * FORBIDDEN:
 * - Three equal-weight icon buttons
 * - Contact form (input/textarea)
 * - "Let's work together" heading
 */

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-band-dark"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32">

        {/* Section eyebrow */}
        <p className="font-mono text-eyebrow uppercase text-text-muted-dark tracking-widest mb-12">
          Contact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-16 items-end">

          {/* LEFT — primary email link (dominant) */}
          <div>
            <p className="font-mono text-eyebrow uppercase text-text-muted-dark tracking-widest mb-6">
              The best way to reach me
            </p>
            <a
              href="mailto:hilmannidal@gmail.com"
              className="font-mono font-bold text-accent-dark link-underline focus-visible:focus-ring block"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)', lineHeight: '1.1' }}
              aria-label="Send email to hilmannidal@gmail.com"
            >
              hilmannidal@gmail.com
            </a>
          </div>

          {/* RIGHT — secondary text links (quiet) */}
          <div className="flex flex-col gap-4">
            <a
              href="https://github.com/kaz-hero123"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-eyebrow text-text-muted-dark link-underline min-h-[48px] inline-flex items-center focus-visible:focus-ring"
              aria-label="GitHub profile — kaz-hero123"
            >
              github.com/kaz-hero123
            </a>
            <a
              href="https://linkedin.com/in/hilman-nidal"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-eyebrow text-text-muted-dark link-underline min-h-[48px] inline-flex items-center focus-visible:focus-ring"
              aria-label="LinkedIn profile — hilman-nidal"
            >
              linkedin.com/in/hilman-nidal
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
