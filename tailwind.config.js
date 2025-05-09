/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: "hsl(var(--accent))",
        "muted-foreground": "hsl(var(--muted-foreground))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
