import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "var(--green)",
        yellow: "var(--yellow)",
        grey01: "var(--grey-01)",
        grey02: "var(--grey-02)",
        grey03: "var(--grey-03)",
        black: "var(--black)",
        white: "var(--white)",
      },
      fontFamily: {
        preten: ["Pretendard"],
        gmarket: ["GmarketSans"],
      },
    },
  },
  plugins: [],
};
export default config;
