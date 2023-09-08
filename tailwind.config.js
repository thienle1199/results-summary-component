/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightslateblue: "hsl(252, 100%, 67%)",
        lightroyalblue: "hsl(241, 81%, 54%)",
        violetblue: "hsla(256, 72%, 46%, 1)",
        persianblue: "hsla(241, 72%, 46%, 0)",
        lightblue: "#CAC9FF",
        lightblue: "hsla(241, 100%, 89%, 1)",
        verylightblue: "hsla(220, 100%, 96%, 1)",
        white: "#fff",
        red: "hsl(0, 100%, 67%)",
        yellow: "hsl(40, 100%, 56%)",
        green: "hsl(166, 100%, 37%)",
        blue: "hsl(234, 85%, 45%)",
        darknavy: "hsl(223, 30%, 27%)",
      },
    },
  },
  plugins: [],
};
