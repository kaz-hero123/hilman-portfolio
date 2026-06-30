'use client'

import { AnimateIn } from '@/components/AnimateIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

export function Projects() {
  const shippedProjects = projects.filter((p) => p.status !== 'in-progress')

  return (
    <section id="projects" className="bg-paper">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">

        <AnimateIn>
          <div className="mb-12">
            <SectionLabel>Projects</SectionLabel>
            <h2 className="font-display text-heading text-ink">
              Projects I&apos;ve shipped
            </h2>
          </div>
        </AnimateIn>

        <div className="space-y-5">
          {shippedProjects.map((project, i) => (
            <AnimateIn key={project.slug} delay={i * 0.08}>
              <ProjectCard
                title={project.title}
                role={project.subtitle}
                problem={project.problem.split('.')[0] + '.'}
                outcome={project.outcome.split('.')[0] + '.'}
                stack={project.stack}
                slug={project.slug}
                githubUrl={project.repoUrl}
                isPrivate={!project.repoUrl}
                featured={i === 0}
              />
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  )
}
