/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'monospace'],
      },
      colors: {
        'retro-purple': '#5f27cd',
        'retro-pink': '#ff6b81',
        'retro-cyan': '#34e7e4',
        'retro-dark': '#222f3e',
        'retro-light': '#feca57',
      },
      boxShadow: {
        'pixel': '4px 4px 0px #000',
        'pixel-hover': '6px 6px 0px #000',
      },
      textShadow: {
        'pixel': '3px 3px 0px #000',
      }
    },
  },
  plugins: [],
}