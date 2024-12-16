/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Ser till att Tailwind genomsöker dessa filer för klasser
  theme: {
    extend: {
      colors: {
        coolBlue: '#00053D', // Din nya färg
      },
    },
  },
  plugins: [],
};
