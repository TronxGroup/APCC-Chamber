/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // ✅ incluye .js, .jsx y .mdx
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // ✅ incluye componentes
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",      // ✅ opcional si tienes páginas fuera de /app
  ],
  theme: {
    extend: {
      colors: {
        apcc: {
          red: {
            600: "#dc2626",
            700: "#b91c1c",
            800: "#991b1b",
          },
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
