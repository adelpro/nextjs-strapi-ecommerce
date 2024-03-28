import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-1000": "#146a72",
        "primary-800": "#2baab5",
        "primary-600": "#35bac6",
        "primary-400": "#5fc7d7",
        "primary-200": "#7dd9e8",
        "primary-100": "#9ae0ef",
        "gray-1000": "#333333",
        "gray-800": "#666666",
        "gray-600": "#999999",
        "gray-400": "#cccccc",
        "gray-200": "#e6e6e6",
        "gray-100": "#f2f2f2",
      },
    },
  },
  plugins: [],
};
export default config;
