/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: 'var(--color-bg-dark)',
          light: 'var(--color-bg-light)',
        },
        panel: {
          dark: 'var(--color-panel-dark)',
        },
        primary: {
          dark: 'var(--color-text-dark)',
          light: 'var(--color-text-light)',
        },
        muted: 'var(--color-text-muted)',
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        body: ['Archivo', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
