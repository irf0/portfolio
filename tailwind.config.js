/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(200px)",
            transform: "translateX(200px)",
          },
          "100%": {
            "-webkit-transform": "translateX(0px)",
            transform: "translateX(0px)",
          },
        },

        "slide-out": {
          "0%": {
            "-webkit-transform": "translateX(-200px)",
            transform: "translateX(-200px)",
          },
          "100%": {
            "-webkit-transform": "translateX(0px)",
            transform: "translateX(0px)",
          },
        },

        "slide-fwd": {
          "0%": {
            "-webkit-transform": "translateZ(0px)",
            transform: "translateZ(0px)",
          },
          "100%": {
            "-webkit-transform": "translateZ(160px)",
            transform: "translateZ(160px)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "slide-fwd":
          " slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },

      screens: {
        sm: { min: "300px", max: "767px" }, //small mobiles
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" }, //mobiles
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" }, //tablets
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1600px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
      },
      width: {
        190: "190px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        656: "656px",
        880: "880px",
        508: "508px",
        "95vw": "95vw",
        "45vw": "45vw",
        "180%": "180%",
      },
      height: {
        80: "80px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        685: "685px",
        800: "800px",
        "35vh": "35vh",
        "90vh": "90vh",
        "97vh": "97vh",
        "87vh": "87vh",
        "95vh": "95vh",
      },
    },
  },
  plugins: [],
};
