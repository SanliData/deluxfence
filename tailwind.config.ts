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
        anthracite: "#2C3E50",
        gold: "#D4AF37",
        "gold-hover": "#B8962E",
        "anthracite-light": "#34495E",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-placeholder":
          "linear-gradient(135deg, rgba(44, 62, 80, 0.75) 0%, rgba(44, 62, 80, 0.4) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
