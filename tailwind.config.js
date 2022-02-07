module.exports = {
  mode: "jit",
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: "360px" },
        sm: { min: "600px" },
        "max-2xl": { max: "1535px" },
        "max-xl": { max: "1279px" },
        "max-lg": { max: "1023px" },
        "max-md": { max: "767px" },
        "max-sm": { max: "599px" },
        "max-xs": { max: "359px" },
      },
    },
  },
};
