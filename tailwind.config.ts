import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkmode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundAccent: "var(--background-accent)",
        strokeMedium: "var(--stroke-medium)",
        strokeLight: "var(--stroke-light)",
      },
    },
  },
  plugins: [],
} satisfies Config;
