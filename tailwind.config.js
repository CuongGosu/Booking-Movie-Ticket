/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "#fff",
        "text-secondary": "#7e8eaa",
        "text-highlight": "#ff5400",
        "main-background": "#0f1d2f",
        "secondary-background": "#031327",
      },
      width: {
        1170: "1170px",
        970: "970px",
        768: "768px",
      },
    },
    minWidth: {
      320: "320px",
    },
    screens: {
      lg: "992px",
      xl: "1200px",
    },
    container: {
      padding: "1.2rem",
    },
    variants: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
