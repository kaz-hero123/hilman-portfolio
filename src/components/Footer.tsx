import { capabilities } from '@/data/capabilities'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const allSkills = capabilities.flatMap((g) => g.items)

  return (
    <footer className="bg-surface-dark border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left — branding */}
          <div className="space-y-3">
            <p className="font-sans text-caption text-text-secondary">
              Built with Next.js, TypeScript & attention to detail.
            </p>
            <p className="font-mono text-[0.6875rem] text-text-secondary/60">
              &copy; {currentYear} Hilman Nidal Hamzi
            </p>
          </div>

          {/* Right — capabilities as inline tags */}
          <div className="max-w-sm">
            <p className="font-mono text-[0.6875rem] text-text-secondary/50 uppercase tracking-wider mb-3">
              Technologies
            </p>
            <div className="flex flex-wrap gap-1.5">
              {allSkills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[0.6875rem] text-text-secondary/70 px-2 py-0.5 border border-white/[0.06] rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
