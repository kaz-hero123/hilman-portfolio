import { capabilities } from '@/data/capabilities'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const confidentItems = capabilities.find((g) => g.tier === 'confident')?.items ?? []

  return (
    <footer className="bg-forest border-t border-line/10">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div className="space-y-2">
            <p className="font-display text-sm font-bold text-paper">
              Hilman Nidal Hamzi
            </p>
            <p className="font-body text-caption text-line/70">
              Built with Next.js, TypeScript &amp; attention to detail.
            </p>
            <p className="font-mono text-xs text-line/40">
              &copy; {currentYear} — All rights reserved.
            </p>
          </div>

          <div className="max-w-xs">
            <p className="font-mono text-[0.6875rem] text-line/50 uppercase tracking-widest mb-3">
              Core stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {confidentItems.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[0.6875rem] text-line/60 px-2 py-0.5 border border-line/15 rounded-sm"
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
