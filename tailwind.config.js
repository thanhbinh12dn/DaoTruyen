/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main': '#338f75',
        'valid': '#1ea71b'
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

