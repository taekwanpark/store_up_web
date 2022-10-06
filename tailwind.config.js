/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        store: {
          placeHolder: `#9ca3af`,
          border: `#e5e7eb`,
          gray: {
            extraLight: `#f9fafb`,
            light: `#f3f4f6`,
            normal: `#e5e7eb`,
            dark: `#9ca3af`,
            extraDark: `#4b5563`,
          },
          red: {
            dark: `#c3005b`,
            light: `#ff0055`,
          },
          orange: {
            dark: `#ff5000`,
            light: `#ff9b00`,
          },
          green: {
            dark: `#00877d`,
            light: `#00be6e`,
          },
          blue: {
            dark: `#0073ff`,
            light: `#00aaff`,
          },
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@formkit/themes/tailwindcss"),
    require("tailwindcss/colors"),
  ],
};
