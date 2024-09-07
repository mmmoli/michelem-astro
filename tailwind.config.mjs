import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        fancy: ["Ga Maamli", ...defaultTheme.fontFamily.sans],
        sans: defaultTheme.fontFamily.sans,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
