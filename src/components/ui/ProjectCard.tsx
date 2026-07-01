import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Tag } from './Tag'

interface ProjectCardProps {
  title: string
  role: string
  problem: string
  outcome: string
  stack: string[]
  slug?: string
  githubUrl?: string
  liveUrl?: string
  isPrivate?: boolean
  featured?: boolean
}

export function ProjectCard({
  title,
  role,
  problem,
  outcome,
  stack,
  slug,
  githubUrl,
  liveUrl,
  isPrivate,
  featured,
}: ProjectCardProps) {
  const cardClass = cn(
    'group p-6 md:p-8 rounded-lg border border-line bg-panel',
    'transition-all duration-200',
    'hover:border-ember/50 hover:shadow-cardLift',
    featured && 'border-ember/30',
  )

  const inner = (
    <>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-display text-xl text-ink mb-1">{title}</h3>
          <p className="font-mono text-xs text-dust">{role}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {isPrivate && (
            <span className="font-mono text-xs text-dust">private repo</span>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
              className="text-dust hover:text-ink transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} strokeWidth={1.5} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live`}
              className="text-dust hover:text-ink transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      <p className="font-body text-sm text-dust mb-1 leading-relaxed">
        <span className="text-ink/80">Problem: </span>{problem}
      </p>
      <p className="font-body text-sm text-dust mb-5 leading-relaxed">
        <span className="text-ink/80">Outcome: </span>{outcome}
      </p>

      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Tag key={tech} color="gold">{tech}</Tag>
        ))}
      </div>
    </>
  )

  if (slug) {
    return (
      <Link href={`/work/${slug}`} className={cn(cardClass, 'block')}>
        {inner}
      </Link>
    )
  }

  return <article className={cardClass}>{inner}</article>
}
