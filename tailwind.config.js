/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f6f1e6',
        soot: '#1b1f2a',
        sage: '#9baea5',
        dusk: '#2f3a56',
        sand: '#d7c6a5',
        ember: '#f17a58',
        mist: '#e5ded0',
      },
      fontFamily: {
        sans: ['"InterVariable"', '"Inter"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 10px 30px -20px rgba(24, 31, 41, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseLine: {
          '0%': { strokeDashoffset: 80 },
          '50%': { strokeDashoffset: 0 },
          '100%': { strokeDashoffset: -80 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-line': 'pulseLine 8s linear infinite',
      },
      backgroundImage: {
        noise: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"80\" height=\"80\" fill=\"none\"><filter id=\"n\"><feTurbulence baseFrequency=\"0.7\" numOctaves=\"1\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.04\"/></svg>')",
      },
    },
  },
  plugins: [],
}

