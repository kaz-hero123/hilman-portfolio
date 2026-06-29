import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { RFIDDiagram } from '@/components/diagrams/RFIDDiagram'
import { RaporAIDiagram } from '@/components/diagrams/RaporAIDiagram'
import { OwlBookDiagram } from '@/components/diagrams/OwlBookDiagram'

const diagrams: Record<string, React.ComponentType> = {
  'rfid-attendance': RFIDDiagram,
  'rapor-ai':        RaporAIDiagram,
  'owlbook':         OwlBookDiagram,
}

const statusLabel: Record<string, string> = {
  production:   'Production',
  prototype:    'Prototype',
  'in-progress':'In Progress',
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

function SectionBlock({
  label,
  children,
  dark = false,
}: {
  label: string
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <section className={dark ? 'bg-surface-dark' : 'bg-surface-light border-t border-black/[0.04]'}>
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <p className={`font-mono text-eyebrow uppercase tracking-wider mb-5 ${
          dark ? 'text-text-secondary/50' : 'text-text-secondary-inv/50'
        }`}>
          {label}
        </p>
        <div className={`font-sans text-body leading-relaxed max-w-2xl ${
          dark ? 'text-text-primary' : 'text-text-primary-inv'
        }`}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project || project.status === 'in-progress') notFound()

  const Diagram = diagrams[slug]

  // Find next project for navigation
  const shippedProjects = projects.filter((p) => p.status !== 'in-progress')
  const currentIndex = shippedProjects.findIndex((p) => p.slug === slug)
  const nextProject = shippedProjects[(currentIndex + 1) % shippedProjects.length]

  return (
    <main id="main-content">

      <div className="bg-surface-light border-b border-black/[0.04]">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-3">
          <Link
            href="/#work"
            className="font-sans text-caption text-text-secondary-inv/60 hover:text-text-primary-inv link-draw transition-colors focus-ring inline-flex items-center gap-1.5 min-h-[44px]"
          >
            &larr; Back to projects
          </Link>
        </div>
      </div>

      <section className="bg-surface-light">
        <div className="max-w-3xl mx-auto px-6 md:px-10 pt-10 pb-14 md:pt-14 md:pb-20">
          <p className="font-mono text-eyebrow uppercase text-text-secondary-inv/50 tracking-wider mb-3">
            {project.functionTag}
          </p>

          <h1 className="font-sans font-bold text-text-primary-inv text-display mb-4">
            {project.title}
          </h1>

          <p className="font-sans text-caption text-text-secondary-inv mb-6">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[0.6875rem] uppercase text-text-secondary-inv/50 tracking-wider">
              {statusLabel[project.status]}
            </span>
            <span className="font-mono text-[0.6875rem] text-text-secondary-inv/40">
              {project.stack.join(' · ')}
            </span>
          </div>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-caption text-accent hover:text-accent-hover link-draw transition-colors focus-ring mt-5 min-h-[44px]"
            >
              View repository &nearr;
            </a>
          )}
        </div>
      </section>

      {Diagram && (
        <section className="bg-surface-dark">
          <div className="max-w-3xl mx-auto px-6 md:px-10 py-14 md:py-20">
            <p className="font-mono text-eyebrow uppercase text-text-secondary/50 tracking-wider mb-8">
              Architecture
            </p>
            <Diagram />
          </div>
        </section>
      )}

      <SectionBlock label="Problem">
        <p className="font-serif text-editorial">{project.problem}</p>
      </SectionBlock>

      <SectionBlock label="Constraints">
        <p>{project.constraints}</p>
      </SectionBlock>

      <SectionBlock label="Decision">
        <p>{project.decision}</p>
      </SectionBlock>

      <SectionBlock label="What was rejected">
        <p>{project.rejectedPath}</p>
      </SectionBlock>

      <SectionBlock label="Outcome">
        <p>{project.outcome}</p>
      </SectionBlock>

      <SectionBlock label="Reflection">
        <p>{project.reflection}</p>
      </SectionBlock>

      {nextProject && nextProject.slug !== slug && (
        <section className="bg-surface-dark border-t border-white/[0.04]">
          <div className="max-w-3xl mx-auto px-6 md:px-10 py-12">
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center justify-between hover:bg-surface-elevated/40 -mx-4 px-4 py-4 rounded-lg transition-colors"
            >
              <div>
                <p className="font-mono text-[0.6875rem] text-text-secondary/40 uppercase tracking-wider mb-1">
                  Next project
                </p>
                <p className="font-sans text-body font-medium text-text-primary group-hover:text-accent transition-colors">
                  {nextProject.title}
                </p>
              </div>
              <span className="text-text-secondary/30 group-hover:text-accent group-hover:translate-x-1 transition-all text-lg">
                &rarr;
              </span>
            </Link>
          </div>
        </section>
      )}

    </main>
  )
}
