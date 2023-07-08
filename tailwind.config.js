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
        "world": "url(/world-map.png)",
      },
      boxShadow: {
        box: '1px 1px 3px solid black'
      },
      colors: {
        aero_c1: '#590BD8',
        aero_c2: '#312A4F',
        aero_c3: '#DDD5EA',
        aero_c4: '#F5F5F5',
        aero_c5: '#717171'
      },
      textColor: {
        aero_t1: '#F5F5F5',
        aero_t2: '#BBBFBF',
        aero_t3: '#717171',
        aero_t4: '#312A4F'
      }
    },
  },
  plugins: [],
}
