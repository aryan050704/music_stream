/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#121212',
          light: '#1E1E1E'
        },
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#7ac5fb',
          400: '#36a3f7',
          500: '#0c87e8',
          600: '#0068c7',
          700: '#0153a2',
          800: '#064786',
          900: '#0a3c70',
          950: '#07254a',
        },
        secondary: {
          50: '#f5f6fa',
          100: '#ebedf3',
          200: '#d2d6e6',
          300: '#aab5d0',
          400: '#7c8db6',
          500: '#5b6e9d',
          600: '#465582',
          700: '#38446a',
          800: '#303b59',
          900: '#2b334d',
          950: '#1a1e2f',
        },
        accent: {
          50: '#fef3f2',
          100: '#fee5e3',
          200: '#fdd0cb',
          300: '#fcafa7',
          400: '#f8786c',
          500: '#f24e3f',
          600: '#e12d1c',
          700: '#bd2215',
          800: '#9c2016',
          900: '#802219',
          950: '#450e0a',
        },
        success: {
          50: '#ecfdf5',
          500: '#10b981',
          900: '#064e3b',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          900: '#7f1d1d',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
};