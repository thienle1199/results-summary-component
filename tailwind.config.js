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
        verylightblue: "hsla(220, 100%, 96%, 1)",
        white: "#fff",
        red: "hsl(0, 100%, 67%)",
        yellow: "hsl(40, 100%, 56%)",
        green: "hsl(166, 100%, 37%)",
        blue: "hsl(234, 85%, 45%)",
        darknavy: "hsl(223, 30%, 27%)",
        "red-95-white": "#FFF6F6",
        "yellow-95-white": "#FFFBF4",
        "blue-95-white": "#F3F4FD",
        "green-95-white": "#F2FCF9",
      },
      backgroundImage: {
        gradient1:
          "linear-gradient(180deg, #7755ff 0%, #6943ff 0.01%, #2f2ce9 100%)",

        gradient2:
          "linear-gradient(180deg, #4d21c9 0%, #2521c900 100%, #2521c900 100%)",
      },
    },
    screens: {
      full: "736px",
    },
    fontSize: {
      "heading-xl": "72px",
      "heading-l": "32px",
      "heading-m": "24px",
      body: "18px",
      "body-sm": "16px",
      "heading-m-sm": "18px",
      "heading-xl-sm": "56px",
      "heading-l-sm": "24px",
    },
  },
  plugins: [],
};
