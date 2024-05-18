import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [
    require("daisyui"),
    require("flowbite/plugin"),
    require("tailwind-scrollbar"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar-hide"),
  ],
};
export default config;
