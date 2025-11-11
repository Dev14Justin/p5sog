/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
     
      colors: {
        primary: "hsl(var(--primary))",
        "primary-dark": "hsl(var(--primary-dark))",
        "primary-light": "hsl(var(--primary-light))",
        "primary-medium": "hsl(var(--primary-medium))",

        accent: "hsl(var(--accent))",
        "accent-dark": "hsl(var(--accent-dark))",
        "accent-light": "hsl(var(--accent-light))",
      },

      boxShadow: {
        card: "0 6px 18px hsl(var(--shadow-card))",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
