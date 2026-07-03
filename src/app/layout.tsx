import type { Metadata } from 'next'
import { playfair, pacifico, inter, jetbrainsMono } from '@/lib/fonts'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
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
      className={`${playfair.variable} ${pacifico.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-ink focus:text-paper focus:font-mono focus:text-xs focus:uppercase focus:outline-none focus:rounded"
        >
          Skip to main content
        </a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
