/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'pn': '130px',
      'vs': '360px',
      'sm': '720px',
      'md': '1024px',
      'lg': '1280px',
      'xxl': '1800px',
    },
    extend: {
      backgroundImage: {
        // 'bg': "url('./assets/background.jpg')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
