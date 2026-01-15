/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        dark: '#0a0a0a',
        darkLight: '#1a1a1a',
        darkLighter: '#2a2a2a',
        // Light theme colors
        light: '#fafaf7',
        lightDark: '#f5f5f2',
        lightDarker: '#e8e8e5',
        // Shared colors
        charcoal: '#1a1a1a',
        lightGray: '#a1a1aa',
        darkGray: '#52525b',
        accent: '#06b6d4',
        accentDark: '#0891b2',
        accentLight: '#22d3ee',
      },
      fontFamily: {
        display: ['var(--font-syne)'],
        body: ['var(--font-manrope)'],
        mono: ['var(--font-jetbrains)'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
