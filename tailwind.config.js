const defaultTheme = require('tailwindcss/defaultTheme')

function colorDefinition(type) {
  return Object.fromEntries(
    Array.from(Array(13).keys())
      .slice(1)
      .map((i) => [i, `hsl(var(--${type}${i}) / <alpha-value>)`])
  )
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      blue: colorDefinition("blue"),
      slate: colorDefinition("slate"),
    },
    extend: {
      fontFamily: {
        "serif": ['Fraunces', ...defaultTheme.fontFamily.serif]
      },
      maxWidth: {
        prose: "55ch",
      },
    },
  },
  plugins: [],
}
