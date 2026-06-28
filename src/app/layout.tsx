import type { Metadata } from 'next'
import { plexMono, plexSans, plexSerif } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hilman Nidal Hamzi — Backend Developer',
  description:
    'Backend engineer. 3 systems in production. Internship-ready for Aug 2026.',
  keywords: ['Backend Developer', 'Laravel', 'PHP', 'Node.js', 'Hilman Nidal Hamzi'],
  authors: [{ name: 'Hilman Nidal Hamzi' }],
  openGraph: {
    title: 'Hilman Nidal Hamzi — Backend Developer',
    description:
      'Backend engineer. 3 systems in production. Internship-ready for Aug 2026.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${plexMono.variable} ${plexSans.variable} ${plexSerif.variable}`}
    >
      <body>
        {/* Skip to main content — accessibility first DOM element per PRD §10 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-dark focus:text-text-primary-dark focus:font-mono focus:text-eyebrow focus:uppercase focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
