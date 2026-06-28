import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'surface-dark':       '#0F1F18',
        'surface-light':      '#EBF0E6',
        'surface-elevated':   '#1A2E24',

        'text-primary':       '#F0EDE4',
        'text-secondary':     '#97A89C',
        'text-primary-inv':   '#0F1F18',
        'text-secondary-inv': '#5B6258',

        'accent':             '#C89434',
        'accent-hover':       '#D9A642',
      },
      fontFamily: {
        mono:  ['var(--font-mono)',  'monospace'],
        sans:  ['var(--font-sans)',  'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      fontSize: {
        'display':   ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.08', fontWeight: '700' }],
        'heading':   ['1.75rem', { lineHeight: '1.25', fontWeight: '600' }],
        'eyebrow':   ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
        'body':      ['1.0625rem', { lineHeight: '1.65' }],
        'editorial': ['1.25rem', { lineHeight: '1.55' }],
        'caption':   ['0.8125rem', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
}

export default config