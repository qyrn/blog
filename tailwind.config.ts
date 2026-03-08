import { heroui } from '@heroui/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Outfit', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#0a0a0f',
          card: '#0f0f18',
          hover: '#161620',
        },
        border: {
          DEFAULT: '#1e1e2e',
          hover: 'rgba(255, 255, 255, 0.15)',
        },
        accent: {
          DEFAULT: '#a78bfa',
          dim: '#7c3aed',
        },
        text: {
          DEFAULT: '#e2e2e8',
          dim: '#6b6b80',
          faint: '#444455',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    heroui({
      themes: {
        dark: {
          colors: {
            background: '#0a0a0f',
            foreground: '#e2e2e8',
            primary: {
              50: '#f5f3ff',
              100: '#ede9fe',
              200: '#ddd6fe',
              300: '#c4b5fd',
              400: '#a78bfa',
              500: '#8b5cf6',
              600: '#7c3aed',
              700: '#6d28d9',
              800: '#5b21b6',
              900: '#4c1d95',
              DEFAULT: '#7c3aed',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: '#6366f1',
              foreground: '#ffffff',
            },
          },
        },
      },
    }),
  ],
}

export default config
