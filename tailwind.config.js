/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
        white: '#FEF8EB',
        'copper-rust': '#78DCCA',
        'blood-orange': '#E76F51',
        'dark-blue':'#131011',
        'beautiful-sea-blue': '#47d3ff'
    },
    extend: {
    },
  },
  plugins: [],
};
