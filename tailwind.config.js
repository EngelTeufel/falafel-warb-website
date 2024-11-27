/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#4CAF50',
          brown: '#8B4513',
        },
        secondary: {
          beige: '#F5F5DC',
          white: '#FFFFFF',
        },
        accent: {
          darkGreen: '#2E7D32',
          yellow: '#FFD54F',
        },
      },
      backgroundColor: {
        base: '#F5F5DC', // beige background
      },
    },
  },
  plugins: [],
}
