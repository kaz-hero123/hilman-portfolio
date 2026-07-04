import type { Metadata } from 'next'
import { playfair, pacifico, inter, jetbrainsMono } from '@/lib/fonts'
import { Nav } from '@/components/Nav'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hilman Nidal Hamzi — Designer & Developer',
  description:
    'A designer and developer focused on editorial craft and structural clarity. This is where the grid meets the sentence.',
  keywords: [
    'Designer',
    'Developer',
    'Editorial Design',
    'Frontend',
    'Hilman Nidal Hamzi',
  ],
  authors: [{ name: 'Hilman Nidal Hamzi' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Hilman Nidal Hamzi — Designer & Developer',
    description:
      'A designer and developer focused on editorial craft and structural clarity.',
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
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-ink focus:text-white focus:font-mono focus:text-xs focus:uppercase focus:outline-none"
        >
          Skip to main content
        </a>
        <Nav />
        {children}
      </body>
    </html>
  )
}
