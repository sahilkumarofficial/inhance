/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6610f2",
        secondry: "#007bff",
        light: "#f8f9fa",
        dark: "#0a0a0a",
        
      }
    },
  },
  plugins: [],
}

