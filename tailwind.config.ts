import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'sm': {'min': '0px', 'max': '680px'},
        'lg': {'min': '0px', 'max': '1289px'},
        'xl': {'min': '1290px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
      },
      spacing: {
        '25p' : '25%',
        '20p' : '20%',
      },
      colors: {
        'custom-green': "#14532d",
        'custom-green-dark': "#064e3b",
      },
    },
  },
  plugins: [],
};
export default config;
