// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coral:    '#F2966B',
        lavender: '#B3A0D6',
        mint:     '#7FCBA0',
        bg:       '#0f0f0f',
        surface:  '#1a1a1a',
        border:   '#2a2a2a',
        text:     '#f0ece4',
        muted:    '#6b6b6b',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
      },
      borderRadius: {
        DEFAULT: '6px',
        md:  '8px',
        lg:  '12px',
        xl:  '16px',
      },
      boxShadow: {
        card:       '0 0 0 1px #2a2a2a',
        cardHover:  '0 0 0 1px #F2966B',
        glow:       '0 0 24px rgba(242, 150, 107, 0.15)',
        glowStrong: '0 0 40px rgba(242, 150, 107, 0.25)',
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
};

export default config;