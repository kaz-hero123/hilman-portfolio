import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hilman Nidal Hamzi — Backend Developer',
  description:
    'Backend Developer specializing in Laravel & Full-Stack engineering. Building reliable systems and clean APIs. Available for internship.',
  keywords: ['Backend Developer', 'Laravel', 'PHP', 'Full-Stack', 'Hilman Nidal Hamzi'],
  authors: [{ name: 'Hilman Nidal Hamzi' }],
  openGraph: {
    title: 'Hilman Nidal Hamzi — Backend Developer',
    description:
      'Backend Developer specializing in Laravel & Full-Stack engineering. Building reliable systems and clean APIs.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {/* Skip to main content — accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-coral focus:text-bg focus:font-body focus:text-sm focus:rounded-md focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
