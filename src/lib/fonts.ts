// src/lib/fonts.ts
// PRD §2.2 — Space Grotesk (display) + Inter (body) + JetBrains Mono (mono)
// Loaded via next/font/google — no CDN <link> per PRD §1 constraint
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})
