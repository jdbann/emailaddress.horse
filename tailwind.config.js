const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacityValue(variable) {
  return ({opacityValue}) => {
    if (opacityValue === undefined) {
      return `hsl(var(${variable}))`
    }
    return `hsl(var(${variable}) / ${opacityValue})`
  }
}

function colorDefinition(type) {
  return Object.fromEntries(
    Array.from(Array(13).keys())
      .slice(1)
      .map((i) => [i, withOpacityValue(`--color--${type}-${i}`)])
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
      typography: ({theme}) => ({
        blue: {
          css: {
            '--tw-prose-body': theme('colors.blue[11]'),
            '--tw-prose-headings': theme('colors.blue[12]'),
            '--tw-prose-lead': theme('colors.blue[11]'),
            '--tw-prose-links': theme('colors.blue[12]'),
            '--tw-prose-bold': theme('colors.blue[12]'),
            '--tw-prose-counters': theme('colors.blue[9]'),
            '--tw-prose-bullets': theme('colors.blue[9]'),
            '--tw-prose-hr': theme('colors.blue[6]'),
            '--tw-prose-quotes': theme('colors.blue[12]'),
            '--tw-prose-quote-borders': theme('colors.blue[6]'),
            '--tw-prose-captions': theme('colors.blue[9]'),
            '--tw-prose-code': theme('colors.blue[12]'),
            '--tw-prose-pre-code': theme('colors.blue[11]'),
            '--tw-prose-pre-bg': theme('colors.blue[3]'),
            '--tw-prose-th-borders': theme('colors.blue[9]'),
            '--tw-prose-td-borders': theme('colors.blue[6]'),
          },
        },
        slate: {
          css: {
            '--tw-prose-body': theme('colors.slate[11]'),
            '--tw-prose-headings': theme('colors.slate[12]'),
            '--tw-prose-lead': theme('colors.slate[11]'),
            '--tw-prose-links': theme('colors.slate[12]'),
            '--tw-prose-bold': theme('colors.slate[12]'),
            '--tw-prose-counters': theme('colors.slate[9]'),
            '--tw-prose-bullets': theme('colors.slate[9]'),
            '--tw-prose-hr': theme('colors.slate[6]'),
            '--tw-prose-quotes': theme('colors.slate[12]'),
            '--tw-prose-quote-borders': theme('colors.slate[6]'),
            '--tw-prose-captions': theme('colors.slate[9]'),
            '--tw-prose-code': theme('colors.slate[12]'),
            '--tw-prose-pre-code': theme('colors.slate[11]'),
            '--tw-prose-pre-bg': theme('colors.slate[3]'),
            '--tw-prose-th-borders': theme('colors.slate[9]'),
            '--tw-prose-td-borders': theme('colors.slate[6]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
