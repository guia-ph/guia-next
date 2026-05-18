/** @type {import('tailwindcss').Config} */

const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

module.exports = {
  darkMode: 'class',
  content: ['src/components/**/*.{ts,tsx}', 'app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        md: { max: '600px' },
      },
      colors: {
        primary: '#A8C5E8',
        'primary-light': '#2563EB',
        'bg-1': '#0F1419',
        'bg-1-light': '#FFFFFF',
        'bg-2': '#1E293B',
        'bg-2-light': '#EFF6FF',
        'text-1': '#E2E8F0',
        'text-1-light': '#1E293B',
        'gray-1': '#334155',
        'gray-1-light': '#E2E8F0',
        stroke: '#475569',
        'stroke-light': '#CBD5E1',
      },

      animation: {
        aurora: 'aurora 60s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
      backgroundImage: {
        'grid-light': 'linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)',
        'grid-dark': 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
        'grid-small-light': 'linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)',
        'grid-small-dark': 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
        'dot-light': 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
        'dot-dark': 'radial-gradient(circle, #475569 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-light': '80px 80px',
        'grid-dark': '80px 80px',
        'grid-small-light': '40px 40px',
        'grid-small-dark': '40px 40px',
        'dot-light': '20px 20px',
        'dot-dark': '20px 20px',
      },
    },
  },
  plugins: [addVariablesForColors, require('tailwindcss-animate')],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ':root': newVars,
  });
}
