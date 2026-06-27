import { cn } from '@/lib/utils';
import { Tag } from './Tag';
import { ExternalLink, Lock } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import type { Project } from '@/types';

export type ProjectCardProps = Project & { index?: number };

export function ProjectCard({
  title,
  role,
  problem,
  outcome,
  stack,
  githubUrl,
  liveUrl,
  isPrivate,
  featured,
  index = 0,
}: ProjectCardProps) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <article
      className={cn(
        'group relative p-6 md:p-8 rounded-lg bg-surface',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:shadow-glowStrong',
        featured
          ? 'border border-coral/30 hover:border-coral/60'
          : 'border border-border hover:border-coral/40',
      )}
    >
      {featured && (
        <div
          className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-coral opacity-70 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />
      )}

      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl text-text mb-1">{title}</h3>
          <p className="font-mono text-xs text-muted">{role}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span
            className="font-mono text-xs text-muted/40 group-hover:text-coral/40 transition-colors select-none"
            aria-hidden="true"
          >
            {num}
          </span>
          {isPrivate && (
            <span className="flex items-center gap-1 font-mono text-xs text-muted">
              <Lock size={12} strokeWidth={1.5} aria-hidden="true" />
              private
            </span>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
              className="text-muted hover:text-coral transition-colors min-h-[48px] inline-flex items-center"
            >
              <GitHubIcon size={18} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
              className="text-muted hover:text-coral transition-colors min-h-[48px] inline-flex items-center"
            >
              <ExternalLink size={18} strokeWidth={1.5} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <p className="font-body text-sm text-muted mb-1 leading-relaxed">
        <span className="text-text/80 font-medium">Problem: </span>{problem}
      </p>
      <p className="font-body text-sm text-muted mb-5 leading-relaxed">
        <span className="text-text/80 font-medium">Outcome: </span>{outcome}
      </p>

      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Tag key={tech} color="lavender">{tech}</Tag>
        ))}
      </div>
    </article>
  );
}
