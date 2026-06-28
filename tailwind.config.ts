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
        surface2: '#222222',
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
        '2xl': '20px',
      },
      boxShadow: {
        card:        '0 0 0 1px #2a2a2a',
        cardHover:   '0 0 0 1px #F2966B',
        glow:        '0 0 24px rgba(242, 150, 107, 0.15)',
        glowStrong:  '0 0 40px rgba(242, 150, 107, 0.25)',
        glowLavender:'0 0 24px rgba(179, 160, 214, 0.15)',
        avatar:      '0 0 0 2px #F2966B, 0 0 32px rgba(242, 150, 107, 0.2)',
      },
      animation: {
        blink:        'blink 1.2s step-end infinite',
        marquee:      'marquee 28s linear infinite',
        'float':      'float 6s ease-in-out infinite',
        'slide-down': 'slideDown 0.25s ease-out forwards',
        'slide-up':   'slideUp 0.2s ease-in forwards',
        'fade-in':    'fadeIn 0.2s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        slideDown: {
          '0%':   { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%':   { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-8px)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;