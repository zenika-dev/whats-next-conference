export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // What's Next? brand system
        ink: "#0c1330", // primary heading text on light
        navy: "#060f31", // dark hero / edition / footer sections
        paper: "#f6f7f9", // light-grey section backgrounds
        line: "#e6e8ee", // hairline borders on light
        body: "#3a4256", // body copy on light
        muted: "#59627a", // secondary copy on light
        brand: {
          DEFAULT: "#E0263A", // red accent
          soft: "#fdeef0", // red tint pill background
          pink: "#ff8a97", // light red for dark backgrounds
        },
      },
      fontFamily: {
        display: ['"Nunito"', "system-ui", "sans-serif"],
        sans: ['"Open Sans"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1180px",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(12, 36, 78, 0.18)",
      },
    },
  },
  plugins: [],
};
