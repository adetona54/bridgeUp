import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1C3A2E',
        moss: '#2D5A40',
        cream: {
          DEFAULT: '#F5F0E8',
          dark: '#EDE7D9',
        },
        amber: {
          DEFAULT: '#E8A830',
          light: '#F5C85A',
        },
        earth: {
          DEFAULT: '#3A2E22',
          light: '#6B5744',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '20px',
        xl: '32px',
      },
      boxShadow: {
        card: '0 2px 12px rgba(28,58,46,0.10), 0 1px 3px rgba(28,58,46,0.06)',
        lift: '0 8px 32px rgba(28,58,46,0.16), 0 2px 8px rgba(28,58,46,0.08)',
      },
    },
  },
  plugins: [],
}

export default config
