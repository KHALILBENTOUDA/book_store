/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },

      colors: {
        'full': ' rgba(59 130 246 / var(--tw-text-opacity)',
        'grn':'#ff6320',
        'wive':'#181F2B',
        'bls':'rgb(53, 189, 242)',
        'Top':'#848786',
        'kfif':'#f9fcfb',
        'tex':'#383a3a',
        'lgrn':'#ffa114',
        'offer':'#c1e5db',
       

      },

      keyframes:{
        maveRight:{
          '0%':{transform:'translateX(0)',},
          '50%':{transform:'translateX(15px)'},
          '0%':{transform:'translateX(0)'}
        }

      },
      animation:{
        maveRight:'maveRight 1.5s ease-in-out infinite'
      }

    },

  },
  plugins: [],
}