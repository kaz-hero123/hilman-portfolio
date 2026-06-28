import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { RFIDDiagram } from '@/components/diagrams/RFIDDiagram'
import { RaporAIDiagram } from '@/components/diagrams/RaporAIDiagram'
import { OwlBookDiagram } from '@/components/diagrams/OwlBookDiagram'

// Map slugs to diagram components
const diagrams: Record<string, React.ComponentType> = {
  'rfid-attendance': RFIDDiagram,
  'rapor-ai':        RaporAIDiagram,
  'owlbook':         OwlBookDiagram,
}

// Status label map
const statusLabel: Record<string, string> = {
  production:   'PRODUCTION',
  prototype:    'PROTOTYPE',
  'in-progress':'IN PROGRESS',
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.status !== 'in-progress')
    .map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: 'Not Found' }
  return {
    title: `${project.title} — Hilman Nidal Hamzi`,
    description: project.problem.split('.')[0] + '.',
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project || project.status === 'in-progress') notFound()

  const Diagram = diagrams[slug]

  return (
    <main id="main-content">

      {/* Back navigation */}
      <div className="bg-band-light border-b border-border-light">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-4">
          <Link
            href="/#selected-work"
            className="font-mono text-eyebrow uppercase text-text-muted-light link-underline-light link-underline focus-visible:focus-ring-light inline-flex items-center min-h-[48px]"
          >
            ← Back
          </Link>
        </div>
      </div>

      {/* ── Sections 1–3: bg-band-light ── */}

      {/* 1. CONTEXT */}
      <section className="bg-band-light">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">

          <p className="font-mono text-eyebrow uppercase text-text-muted-light tracking-widest mb-4">
            {project.functionTag}
          </p>

          <h1 className="font-mono font-bold text-text-primary-light text-display mb-3">
            {project.title}
          </h1>

          <p className="font-mono text-eyebrow text-text-muted-light mb-6">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <span className="font-mono text-eyebrow uppercase text-text-muted-light tracking-widest">
              {statusLabel[project.status]}
            </span>
            <span className="font-mono text-eyebrow text-text-muted-light">
              {project.stack.join(' · ')}
            </span>
          </div>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-eyebrow uppercase text-accent-light link-underline link-underline-light inline-flex items-center min-h-[48px] focus-visible:focus-ring-light"
            >
              View repository →
            </a>
          )}
        </div>
      </section>

      {/* 2. CONSTRAINTS */}
      <section className="bg-band-light border-t border-border-light">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <h2 className="font-mono text-eyebrow uppercase text-text-muted-light tracking-widest mb-6">
            Constraints
          </h2>
          <p className="font-sans text-body text-text-primary-light max-w-2xl">
            {project.constraints}
          </p>
        </div>
      </section>

      {/* 3. DECISION */}
      <section className="bg-band-light border-t border-border-light">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <h2 className="font-mono text-eyebrow uppercase text-text-muted-light tracking-widest mb-6">
            Decision
          </h2>
          <p className="font-sans text-body text-text-primary-light max-w-2xl">
            {project.decision}
          </p>
        </div>
      </section>

      {/* ── Section 4: DIAGRAM — bg-band-dark visual break ── */}
      <section className="bg-band-dark">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <p className="font-mono text-eyebrow uppercase text-text-muted-dark tracking-widest mb-10">
            Architecture
          </p>
          {Diagram && <Diagram />}
        </div>
      </section>

      {/* ── Sections 5–7: bg-band-light ── */}

      {/* 5. REJECTED PATH */}
      <section className="bg-band-light border-t border-border-light">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <h2 className="font-mono text-eyebrow uppercase text-text-muted-light tracking-widest mb-6">
            What Was Rejected
          </h2>
          <p className="font-sans text-body text-text-primary-light max-w-2xl">
            {project.rejectedPath}
          </p>
        </div>
      </section>

      {/* 6. OUTCOME */}
      <section className="bg-band-light border-t border-border-light">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <h2 className="font-mono text-eyebrow uppercase text-text-muted-light tracking-widest mb-6">
            Outcome
          </h2>
          <p className="font-sans text-body text-text-primary-light max-w-2xl">
            {project.outcome}
          </p>
        </div>
      </section>

      {/* 7. REFLECTION */}
      <section className="bg-band-light border-t border-border-light">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16 pb-24">
          <h2 className="font-mono text-eyebrow uppercase text-text-muted-light tracking-widest mb-6">
            Reflection
          </h2>
          <p className="font-sans text-body text-text-primary-light max-w-2xl">
            {project.reflection}
          </p>
        </div>
      </section>

    </main>
  )
}
