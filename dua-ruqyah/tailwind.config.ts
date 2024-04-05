import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",

      "3xl": "2020px",

      "4xl": "2440px",

      xs: "360px",
    },
    extend: {
      colors: {
        bgWhiteColor: "#FFFFFF",
        // bgColor: "#F7F8FA",
        bgColor: "#D1D5DB",
        bgGrayColor: "#E8F0F5",
        primaryColor: "#1FA45B",
        textColor: "#454545",
        textGrayColor: "#B0B1B2",
      },
    },
  },
  plugins: [],
};
export default config;
