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
          teal: '#006060',
          orange: '#faaa34',
          dark: '#111827',
          light: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(to bottom right, rgba(0,96,96,0.75), rgba(17,24,39,0.85))',
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
