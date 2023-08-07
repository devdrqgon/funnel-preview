/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'inter': 'Inter Variable'
    },
    colors: {
        black: 'black',
        white: '#FEF8EB',
        'copper-rust': '#78DCCA',
        'blood-orange': '#E76F51',
        'dark-blue':'#131011',
        blue: '#0076ff',



    },
    extend: {
       keyframes: {
        'pulse-slow': {
          '0%, 100%': { transform: 'none' },
          '50%': { transform: 'scale(.85)' },
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 2s 1s ease-out infinite',
      }
    },
  },
  plugins: [],
};
