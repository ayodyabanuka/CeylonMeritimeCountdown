module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      animation: {
        flip: 'flip 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        flip: {
          from: { transform: 'rotateX(0deg)', transformOrigin: '50% bottom ' },
          to: { transform: 'rotateX(180deg)', transformOrigin: '50% bottom ' },
        },
      },
    },
    plugins: [],
    purge: [
      './src/**/*.{js,jsx,ts,tsx}',
      './next.config.js',
      './public/**/*.html',
    ],
  },
}
