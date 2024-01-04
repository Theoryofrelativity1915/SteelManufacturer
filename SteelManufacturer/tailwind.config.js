/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('./src/assets/testimonials/ant-rozetsky-SLIFI67jv5k-unsplash-darkened.jpg')"
      })
    }
  },
  plugins: [],
}

