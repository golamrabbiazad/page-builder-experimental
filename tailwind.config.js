import tailwindcssAnimate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        editor: {
          border: "hsl(var(--editor-border))",
          input: "hsl(var(--editor-input))",
          ring: "hsl(var(--editor-ring))",
          background: "hsl(var(--editor-background))",
          foreground: "hsl(var(--editor-foreground))",
          primary: {
            DEFAULT: "hsl(var(--editor-primary))",
            foreground: "hsl(var(--editor-primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--editor-secondary))",
            foreground: "hsl(var(--editor-secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--editor-destructive))",
            foreground: "hsl(var(--editor-destructive-foreground))",
          },
          mute: {
            DEFAULT: "hsl(var(--editor-mute))",
            foreground: "hsl(var(--editor-muted-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--editor-popover))",
            foreground: "hsl(var(--editor-popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--editor-card))",
            foreground: "hsl(var(--editor-card-foreground))",
          },
          borderRadius: {
            lg: "var(--editor-radius)",
            md: "calc(var(--editor-radius) - 2px)",
            sm: "calc(var(--editor-radius) - 4px)",
          },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
