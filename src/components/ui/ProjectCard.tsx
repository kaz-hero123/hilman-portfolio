/**
 * ProjectCard — UI Atom
 * Ref: design-system.md §8.6
 *
 * Elemen terpenting di portfolio — menyampaikan problem statement,
 * bukan hanya nama proyek + tech list.
 *
 * Scaffold Checklist §15:
 * ✅ File di folder ui/
 * ✅ Props interface (ProjectCardProps)
 * ✅ cn() untuk semua className
 * ✅ font-display, font-body, font-mono class eksplisit
 * ✅ strokeWidth={1.5} pada semua icons
 * ✅ aria-label deskriptif pada external links
 * ✅ rel="noopener noreferrer" pada external links
 * ✅ Exported dari barrel index.ts
 */

import { cn } from '@/lib/utils';
import { Tag } from './Tag';
import { ExternalLink, Lock } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import type { Project } from '@/types';

export type ProjectCardProps = Project;

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
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        'group p-6 md:p-8 rounded-lg border border-border bg-surface',
        'transition-all duration-200',
        'hover:border-coral/50 hover:shadow-glow',
        featured && 'border-coral/30',
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-display text-xl text-text mb-1">{title}</h3>
          <p className="font-mono text-xs text-muted">{role}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {isPrivate && (
            <span className="flex items-center gap-1 font-mono text-xs text-muted">
              <Lock size={12} strokeWidth={1.5} aria-hidden="true" />
              private repo
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

      {/* Problem + Outcome */}
      <p className="font-body text-sm text-muted mb-1 leading-relaxed">
        <span className="text-text/80">Problem: </span>{problem}
      </p>
      <p className="font-body text-sm text-muted mb-5 leading-relaxed">
        <span className="text-text/80">Outcome: </span>{outcome}
      </p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Tag key={tech} color="lavender">{tech}</Tag>
        ))}
      </div>
    </article>
  );
}
