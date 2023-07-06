/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        aero_c1: '#590BD8',
        aero_c2: '#312A4F',
        aero_c3: '#DDD5EA'
      },
      textColor: {
        aero_t1: '#F5F5F5',
        aero_t2: '#BBBFBF',
        aero_t3: '#717171'
      }
    },
  },
  plugins: [],
}
