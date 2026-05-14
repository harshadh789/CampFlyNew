import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        campfly: {
          teal: '#0D7377',
          orange: '#F4845F',
          dark: '#111827',
          light: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(to bottom right, rgba(13,115,119,0.75), rgba(17,24,39,0.85))',
      },
      boxShadow: {
        premium: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        premium: '2rem',
      },
    },
  },
  plugins: [],
}

export default config
