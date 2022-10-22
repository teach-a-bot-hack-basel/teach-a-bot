module.exports = {
  content: [
    "./app.vue",
    "./components/**/*.{vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],

  theme: {
    fontFamily: {
      sans: ["'Roboto Condensed'", "sans-serif"],
      mono: ["'Press Start 2P'", "mono"],
    },
  },

  plugins: [
    // polyfill for future pseudo selector :enter that combines :hover and :focus
    ({addVariant}) => addVariant("enter", ["&:hover", "&:focus"]),
    // lowers specifity to allow overrides
    ({addVariant}) => addVariant("base", "html :where(&)"),
    // style direct children
    ({addVariant}) => addVariant("children", "& > *"),
    // style last child
    ({addVariant}) => addVariant("children-last", "& > *:last-child"),
  ],
}
