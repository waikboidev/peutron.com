/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This needs to match the font-family name from your @font-face rule in index.css
        'minecraft': ['"Minecraft"', 'cursive'],
      },
    },
  },
  plugins: [],
}
