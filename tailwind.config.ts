import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("tailwindcss-animate")],
  theme: {
    extend: {
      colors: {
        'primary-soft': 'hsl(var(--primary-soft))',
        'primary-hover': 'hsl(var(--primary-hover))',
        'bg-main': 'hsl(var(--bg-main))',
        'bg-section': 'hsl(var(--bg-section))',
        'bg-soft': 'hsl(var(--bg-soft))',
        'text-primary': 'hsl(var(--text-primary))',
        'text-secondary': 'hsl(var(--text-secondary))',
        'text-muted': 'hsl(var(--text-muted))',
        'border-light': 'hsl(var(--border-light))',
        'border-soft': 'hsl(var(--border-soft))',
      },
    },
  },
};

export default config;
