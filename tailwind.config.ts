import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-green': '#10b981',
        'custom-green-dark': '#15803d',
      },
      screens: {
        'sm': {'max': '639px'},
        'lg': {'min': '0px', 'max': '1023px'},  
        'md': {'min': '639px'},
        'xl': {'min': '1024px'},
      },
      spacing: {
        '50p' : '25%',
      },
    },
  },
};
export default config;