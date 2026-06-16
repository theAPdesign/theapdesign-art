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
        ink: '#050505',
        smoke: '#f5f3ef',
        mist: '#d8d8d8',
        electric: '#2f6bff',
        violet: '#8b5cf6',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(47, 107, 255, 0.22)',
        soft: '0 20px 60px rgba(0, 0, 0, 0.12)',
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
