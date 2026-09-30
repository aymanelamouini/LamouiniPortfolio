/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crimson': '#e8dcdf',
        'pitch-black': '#08080a',
        'slate-noir': '#0f0f13',
        'border-gray': '#22222a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
      },
    },
  },
  plugins: [],
}
