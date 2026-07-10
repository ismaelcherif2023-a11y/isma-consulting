/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F4',
        navy: {
          DEFAULT: '#14213D',
          light: '#1F3057',
          dark: '#0C1526'
        },
        gold: {
          DEFAULT: '#E8B04B',
          light: '#F2C874',
          dark: '#C8912F'
        },
        slate: {
          DEFAULT: '#6B7C93'
        },
        whatsapp: '#25D366'
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'sans-serif']
      },
      backgroundImage: {
        'stamp-texture': "radial-gradient(circle at 1px 1px, rgba(20,33,61,0.08) 1px, transparent 0)"
      }
    }
  },
  plugins: []
}
