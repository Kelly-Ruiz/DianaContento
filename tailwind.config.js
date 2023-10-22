/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        MainColor: "#00B2AA",
        DarkColor: "#0b5f5b",
        TransparentColor: "#0b5f5b90",
        LightColor: "#D9F3F1",
        
      },
    },
  },
  plugins: [],
}

