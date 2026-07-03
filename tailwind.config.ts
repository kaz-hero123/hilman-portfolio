import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Design tokens
        paper:    '#F7F3EC',
        panel:    '#FCFAF6',
        line:     '#DDD5C7',
        ink:      '#231F1B',
        dust:     '#756F65',
        forest:   '#173328',
        ember:    '#E8893C',
        gold:     '#D9A441',
        goldDeep: '#91681D',
        sage:     '#7C9473',
        sageDeep: '#61755A',
      },
      fontFamily: {
        serif:   ['var(--font-serif)', 'Georgia', 'serif'],
        display: ['var(--font-serif)', 'Georgia', 'serif'],
        script:  ['var(--font-script)', 'cursive'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
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