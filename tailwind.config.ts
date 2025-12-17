import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark premium flyer aesthetic
        dark: {
          navy: "#0a1628",
          charcoal: "#1a2332",
          slate: "#2d3748",
        },
        accent: {
          primary: "#3b82f6",
          secondary: "#10b981",
        },
        light: {
          offwhite: "#f8f9fa",
          gray: "#e5e7eb",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

