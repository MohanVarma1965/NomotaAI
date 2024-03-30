module.exports = {
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        blink: 'blink 3s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,

  variants: {
    extend: {},
  },
  plugins: [],
};
