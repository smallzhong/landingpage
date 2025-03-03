// THEME: change normal and accent colors of MDX content
const normal = "ctp-text";
const accent = "ctp-mauve";

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./mdx-components.tsx",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-headings": theme(`colors.black`),
            "--tw-prose-lead": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-links": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-bold": theme(`colors.black`),
            "--tw-prose-counters": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-bullets": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-hr": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-quotes": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-quote-borders": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-captions": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-code": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-pre-code": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-pre-bg": theme(`colors.base.DEFAULT`),
            "--tw-prose-th-borders": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-td-borders": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-invert-body": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-invert-links": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-invert-bullets": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-invert-hr": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-invert-quotes": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-invert-quote-borders": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-invert-captions": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme(`colors.${normal}.DEFAULT`),
            "--tw-prose-invert-td-borders": theme(`colors.${normal}.DEFAULT`)
          }
        }
      })
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "latte"
    })
  ]
};