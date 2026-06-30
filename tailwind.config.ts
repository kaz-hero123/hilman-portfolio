import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // v2 Design Tokens — PRD §2.1
        forest:   '#173328', // dark section band bg (Stats, Contact)
        ember:    '#E8893C', // primary accent — bg fill CTA only on paper/panel; foreground ok on forest
        gold:     '#D9A441', // tag/label bg-tint & icon accent; foreground on forest
        goldDeep: '#91681D', // tag/label TEXT on paper/panel (light-context only)
        sage:     '#7C9473', // status dot; foreground on forest (large text only)
        sageDeep: '#61755A', // status TEXT on paper/panel (light-context only)
        paper:    '#F7F3EC', // page background (warm cream)
        panel:    '#FCFAF6', // card/panel background
        line:     '#DDD5C7', // divider/border on light bg; muted-text on forest (dual-role)
        ink:      '#231F1B', // primary text on light bg
        dust:     '#756F65', // secondary/muted text on light bg only
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.08', fontWeight: '700' }],
        'heading':  ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'subhead':  ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body':     ['1.0625rem', { lineHeight: '1.65' }],
        'caption':  ['0.8125rem', { lineHeight: '1.5' }],
        'eyebrow':  ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        'mono-sm':  ['0.8125rem', { lineHeight: '1.5' }],
      },
      borderRadius: {
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        card:     '0 0 0 1px #DDD5C7',
        cardLift: '0 8px 24px -4px rgba(35, 31, 27, 0.12)',
      },
      animation: {
        blink: 'blink 1.2s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config