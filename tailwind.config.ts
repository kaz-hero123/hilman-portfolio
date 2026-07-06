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
        // Developer accent palette
        accent:  '#0ea5e9',   // sky-500 — primary accent
        'accent-light': '#e0f2fe', // sky-100 — subtle bg tint
        'accent-dark':  '#0369a1', // sky-700 — hover/pressed
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
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'meteor-effect': 'meteor 5s linear infinite',
        'shiny-sweep': 'shinySweep 2s ease-in-out infinite',
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
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%':      { transform: 'translateY(8px)', opacity: '0.4' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.5', transform: 'scale(1.3)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-800px)',
            opacity: '0',
          },
        },
        shinySweep: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(200%) skewX(-15deg)' },
        }
      },
    },
  },
  plugins: [],
}

export default config