import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        "primary-light": "#dbeafe",
        surface: "#f8fafc",
        border: "#e2e8f0"
      },
      keyframes: {
        "slide-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        blink: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0" } }
      },
      animation: {
        "slide-in": "slide-in 0.4s ease-out both",
        blink: "blink 1s step-end infinite"
      }
    }
  },
  plugins: []
};

export default config;
