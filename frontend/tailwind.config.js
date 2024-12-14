/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F9FAFB',
          DEFAULT: '#FFFFFF',
          dark: '#1F2937',
        },
        text: {
          primary: '#111827',
          secondary: '#6B7280',
          muted: '#9CA3AF',
        },
        container: {
          light: '#FFFFFF',
          DEFAULT: '#F3F4F6',
          dark: '#374151',
        },
        accent: {
          light: '#198a28',
          DEFAULT: '#136b1f',
          dark: '#0d4a15',
        },
      },
    },
    screens: {
      md: '640px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}
