import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Editorial design tokens
        ink:     '#111111',
        white:   '#ffffff',
        mist:    '#f5f5f5',   // light section bg
        ash:     '#e5e5e5',   // hairline / border
        dust:    '#8a8a8a',   // muted text
        dim:     '#555555',   // secondary text
      },
      fontFamily: {
        serif:  ['var(--font-serif)', 'Georgia', 'serif'],
        script: ['var(--font-script)', 'cursive'],
        body:   ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono:   ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        // Editorial scale
        '2xs':  ['0.625rem',  { lineHeight: '1' }],
        xs:     ['0.75rem',   { lineHeight: '1.4' }],
        sm:     ['0.875rem',  { lineHeight: '1.5' }],
        base:   ['1rem',      { lineHeight: '1.6' }],
        lg:     ['1.125rem',  { lineHeight: '1.5' }],
        xl:     ['1.25rem',   { lineHeight: '1.4' }],
        '2xl':  ['1.5rem',    { lineHeight: '1.25' }],
        '3xl':  ['1.875rem',  { lineHeight: '1.15' }],
        '4xl':  ['2.25rem',   { lineHeight: '1.1' }],
        '5xl':  ['3rem',      { lineHeight: '1.05' }],
        '6xl':  ['3.75rem',   { lineHeight: '1.0' }],
        '7xl':  ['4.5rem',    { lineHeight: '1.0' }],
        '8xl':  ['6rem',      { lineHeight: '0.96' }],
        '9xl':  ['8rem',      { lineHeight: '0.9' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.03em',
        tight:    '-0.02em',
        normal:   '0em',
        wide:     '0.04em',
        wider:    '0.08em',
        widest:   '0.12em',
      },
      borderRadius: {
        DEFAULT: '0px', // editorial = square corners by default
        sm: '2px',
        md: '4px',
      },
      animation: {
        'fade-up':  'fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in':  'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config