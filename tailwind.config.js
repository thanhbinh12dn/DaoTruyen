/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main': '#338f75',
        'bgMain': '#f7f7ff',
        'valid': '#1ea71b',
        'borderInput': '#ccc'
      },
      boxShadow: {
        '3xl': '0 5px 15px rgb(0,0,0,0.35)'
      },
      keyframes: {
        loginFaceIn: {
          '0%': {
            transform: 'translateY(-140px)'
          },
          '100%': {
            transform: 'translateY(0)',
          },
        }
      },
      animation: {
        loginFaceIn: 'loginFaceIn ease 0.5s'
      },
    },
  },
  plugins: [],
}

