/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        apcc: { red: { 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b" } },
      },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.12)" },
      borderRadius: { xl2: "1.25rem" }
    },
  },
  plugins: [],
};
