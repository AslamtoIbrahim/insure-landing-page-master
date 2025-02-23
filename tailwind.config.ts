import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          darkViolet: "hsl(256, 26%, 20%)",
          grayishBlue: "hsl(216, 30%, 68%)",
        },
        neutral: {
          veryDarkViolet: "hsl(270, 9%, 17%)",
          darkGrayishViolet: "hsl(273, 4%, 51%)",
          veryLightGray: "hsl(0, 0%, 98%)",
        },
      },
      fontFamily: {
        dmSerif: ["var(--font-dm-serif)", "serif"],
        karla: ["var(--font-karla)", "sans-serif"],
      },
      backgroundImage:{
        menuBg: "url('../../public/sources/images/bg-pattern-mobile-nav.svg')",
        intrLeft: "url('../../public/sources/images/bg-pattern-intro-left-mobile.svg')",
        intrRight: "url('../../public/sources/images/bg-pattern-intro-right-mobile.svg')",
        intrTop: "url('../../public/sources/images/bg-pattern-footer-mobile.svg')",
        menu: "url('/public/sources/images/bg-pattern-footer-mobile.svg')"
      }
    },
  },
  plugins: [],
} satisfies Config;
