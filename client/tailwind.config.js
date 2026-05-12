/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        red: '#C8372D',
        ink: '#0D0D0D',
        paper: '#F5F0EB',
        ash: '#8A8580',
      },
      fontFamily: {
        dela: ['Dela Gothic One', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}