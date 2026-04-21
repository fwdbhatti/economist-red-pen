/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        editorial: ['"Source Serif 4"', "Georgia", "serif"],
        display: ['"IBM Plex Sans Condensed"', "sans-serif"],
        ui: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      colors: {
        paper: { DEFAULT: "#FBF8F1", deep: "#F2EBDC", edge: "#E6DDC8" },
        ink: { DEFAULT: "#121212", 2: "#3C3A36", 3: "#6B6760" },
        rule: { DEFAULT: "#B0A89A", strong: "#121212" },
        "econ-red": {
          DEFAULT: "#E3120B",
          ink: "#B50D07",
          wash: "rgba(227,18,11,0.08)",
        },
        navy: { DEFAULT: "#0F3B5F" },
        amber: { DEFAULT: "#A4741A" },
      },
      fontSize: {
        xs: ["11px", { lineHeight: "15px" }],
        sm: ["13px", { lineHeight: "19px" }],
        base: ["16px", { lineHeight: "26px" }],
        md: ["18px", { lineHeight: "28px" }],
        lg: ["22px", { lineHeight: "28px" }],
        xl: ["28px", { lineHeight: "32px" }],
        "2xl": ["36px", { lineHeight: "40px" }],
        "3xl": ["48px", { lineHeight: "52px" }],
      },
      borderRadius: { DEFAULT: "0", cta: "2px" },
      maxWidth: { prose: "34rem" },
      letterSpacing: { smallcaps: "0.08em" },
    },
  },
  plugins: [],
};
