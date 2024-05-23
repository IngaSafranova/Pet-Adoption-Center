/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        midnight: "#001D37",
        pink: "#D660FF",
        blue: "#475AFF",
      },
      maxWidth: {
        '8xl': '1440px'
      },
      fontFamily: {
        default : ['Source Sans 3', 'san-serif']
      },
      fontSize: {
        '8.5xl': '6.25rem'
      }
    },
  },
  plugins: [],
};

