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
        primary: {
          DEFAULT: "#c0c1ff",
          container: "#8083ff",
        },
        secondary: {
          DEFAULT: "#4edea3",
        },
        tertiary: {
          DEFAULT: "#ffb95f",
        },
        error: {
          DEFAULT: "#ffb4ab",
        },
        background: {
          DEFAULT: "#0b1326",
        },
        surface: {
          DEFAULT: "#0b1326",
          dim: "#0b1326",
          bright: "#31394d",
          container: {
            DEFAULT: "#171f33",
            low: "#131b2e",
            high: "#222a3d",
            highest: "#2d3449",
          },
        },
        "on-surface": {
          DEFAULT: "#dae2fd",
          variant: "#c7c4d7",
        },
        outline: {
          DEFAULT: "#908fa0",
          variant: "#464554",
        },
      },
      fontFamily: {
        headline: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.33)", opacity: "1" },
          "80%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
