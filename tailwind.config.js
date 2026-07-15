export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zenika: {
          900: "#07142f",
          800: "#0f1f45",
          700: "#18305f",
          600: "#21467c",
          500: "#2c5fa2",
          accent: "#de1f41",
          accentSoft: "#fce7ef",
        },
      },
      boxShadow: {
        soft: "0 18px 60px rgba(12, 36, 78, 0.18)",
      },
    },
  },
  plugins: [],
};
