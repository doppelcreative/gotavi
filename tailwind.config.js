/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        'pp-black': 'var(--pp-black)',
        'pp-white': 'var(--pp-white)',
        'pp-theme': 'var(--pp-theme)',
        'pp-text': 'var(--pp-text)',
        'pp-header': 'var(--pp-header)',
        'pp-border': 'var(--pp-border)',
        'pp-bg': 'var(--pp-bg)',
      },
      fontFamily: {
        'neurial-grotesk': 'var(--font-neurialGrotesk)',
      },
      boxShadow: {
        'pp': 'var(--pp-box-shadow)',
      },
    },
  },
  plugins: [],
}
