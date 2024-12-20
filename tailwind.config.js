/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }, // Moves out from right to left
        },
      },
      animation: {
        slide: 'slide 8s linear infinite',
        delay: 'slide 8s linear 4s infinite' // Delay animation start by 4s
      },
    },
  },
  plugins: [],
}
