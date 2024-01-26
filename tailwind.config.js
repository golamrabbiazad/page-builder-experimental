import tailwindcssAnimate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        mantis: {
          50: "hsl(92, 52%, 95%)",
          100: "hsl(91, 53%, 89%)",
          200: "hsl(94, 52%, 80%)",
          300: "hsl(95, 50%, 67%)",
          400: "hsl(96, 46%, 59%)",
          500: "hsl(97, 48%, 44%)",
          600: "hsl(98, 50%, 35%)",
          700: "hsl(99, 47%, 27%)",
          800: "hsl(100, 41%, 23%)",
          900: "hsl(101, 36%, 20%)",
          950: "hsl(101, 49%, 10%)",
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
