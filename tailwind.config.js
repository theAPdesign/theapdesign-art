/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#111111',
        paper: '#faf8f5',
        smoke: '#ffffff',
        mist: '#e8e3db',
        electric: '#7c9bff',
        violet: '#a78bfa',
        rose: '#f4b7c6',
        sky: '#a9d3ff',
        mint: '#bce9ce',
      },
      boxShadow: {
        glow: '0 24px 90px rgba(124, 155, 255, 0.16)',
        soft: '0 18px 50px rgba(17, 17, 17, 0.08)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        sheen: 'sheen 7s ease-in-out infinite',
        marquee: 'marquee 22s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
        sheen: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
