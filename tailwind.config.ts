// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'band-dark':           '#10231B',
        'band-light':          '#EEF0EA',

        // Text on dark band
        'text-primary-dark':   '#F2EFE6',
        'text-muted-dark':     '#9AA89E',
        'accent-dark':         '#B8862E',
        'border-dark':         '#6B7569',

        // Text on light band
        'text-primary-light':  '#10231B',
        'text-muted-light':    '#5B6258',
        'accent-light':        '#8A5E1C',
        'border-light':        '#727A6A',
      },
      fontFamily: {
        mono:  ['var(--font-mono)',  'monospace'],
        sans:  ['var(--font-sans)',  'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      fontSize: {
        'display':   ['clamp(2rem, 6vw, 4.5rem)', { lineHeight: '1.05', fontWeight: '700' }],
        'eyebrow':   ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.06em' }],
        'body':      ['1.0625rem', { lineHeight: '1.6' }],
        'editorial': ['1.3125rem', { lineHeight: '1.5' }],
      },
      animation: {
        'fade-rise': 'fadeRise 0.25s ease-out forwards',
      },
      keyframes: {
        fadeRise: {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config