/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#444",
          hover: "",
          border: "",
        },
        secondary: {
          DEFAULT: "#444",
          hover: "",
          border: "",
        },
        active: {
          DEFAULT: "#999",
          hover: "",
          border: "",
        },
        alternate: {
          DEFAULT: "#444",
          hover: "",
          border: "",
        },
      },
      boxShadow: {
        primary: "3px 8px 19px rgba(0, 0, 0, 0.3)",
        secondary: "20px 30px 40px rgba(0,0,0,1)",
      },
      border: {
        primary: {
          DEFAULT: "2px solid red",
        },
      },
      gridTemplateColumns: {
        prime: "repeat(auto-fit,minmax(150px,1fr))",
      },
      gridTemplateRows: {
        prime: "repeat(auto-fit,minmax(150px,1fr))",
      },
    },
  },
  plugins: [],
};
