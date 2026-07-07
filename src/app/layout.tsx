import type { Metadata } from 'next'
import { playfair, pacifico, inter, jetbrainsMono } from '@/lib/fonts'
import { Nav } from '@/components/Nav'
import { SmoothScroll } from '@/components/providers/SmoothScroll'
import { Noise } from '@/components/ui/Noise'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { CommandPalette } from '@/components/animations/CommandPalette'
import { PageTransition } from '@/components/animations/PageTransition'
import { KonamiCode } from '@/components/animations/KonamiCode'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hilman Nidal Hamzi — Backend Developer',
  description:
    'Laravel backend developer and project manager. Building structured systems with clean architecture.',
  keywords: [
    'Backend Developer',
    'Laravel',
    'PHP',
    'Project Manager',
    'Hilman Nidal Hamzi',
  ],
  authors: [{ name: 'Hilman Nidal Hamzi' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Hilman Nidal Hamzi — Backend Developer',
    description:
      'Laravel backend developer and project manager. Building structured systems with clean architecture.',
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
        <PageTransition />
        <SmoothScroll>
          <Noise />
          <CustomCursor />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-ink focus:text-white focus:font-mono focus:text-xs focus:uppercase focus:outline-none"
          >
            Skip to main content
          </a>
          <Nav />
          {children}
          <ScrollToTop />
          <CommandPalette />
          <KonamiCode />
        </SmoothScroll>
      </body>
    </html>
  )
}
