/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Asegúrate de incluir .jsx
  theme: {
    extend: {
      colors: {
        color1: '#f00',
        color2: '#00f',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'], // Asegúrate de que la fuente esté configurada aquí
      },
    },
  },
  plugins: [],
};
