/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple:  '#7e22ce',
          magenta: '#db2777',
          cyan:    '#0891b2',
          lime:    '#65a30d',
          orange:  '#ea580c',
          yellow:  '#facc15',
        }
      },
      fontFamily: {
        display: ['"Fredoka One"', 'cursive'],
        body:    ['"Nunito"', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':       { transform: 'translateY(-20px) rotate(5deg)' },
        },
        pulse_glow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(219,39,119,0.7)' },
          '70%':       { boxShadow: '0 0 0 14px rgba(219,39,119,0)' },
        },
        confetti_fall: {
          '0%':   { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
        },
        balloon_rise: {
          '0%':   { transform: 'translateY(0) scale(0)', opacity: '0' },
          '20%':  { opacity: '1', transform: 'translateY(-10px) scale(1)' },
          '100%': { transform: 'translateY(-200px) scale(0.7)', opacity: '0' },
        },
        fade_out: {
          '0%':   { opacity: '1', visibility: 'visible' },
          '100%': { opacity: '0', visibility: 'hidden' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      },
      animation: {
        float:         'float 4s ease-in-out infinite',
        float_slow:    'float 6s ease-in-out infinite',
        float_slower:  'float 8s ease-in-out infinite',
        pulse_glow:    'pulse_glow 2s infinite',
        confetti_fall: 'confetti_fall linear infinite',
        balloon_rise:  'balloon_rise ease-out forwards',
        fade_out:      'fade_out 0.8s ease forwards',
        shimmer:       'shimmer 3s linear infinite',
      }
    },
  },
  plugins: [],
}
