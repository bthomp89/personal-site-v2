/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
      maxWidth: {
        content: '1040px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'hero-card-swivel': {
          '0%, 100%': { transform: 'perspective(1200px) rotateY(-6deg) rotateX(2deg)' },
          '50%': { transform: 'perspective(1200px) rotateY(6deg) rotateX(-2deg)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'hero-card-swivel': 'hero-card-swivel 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
