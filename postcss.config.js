const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}", 
    "./shared/**/*.{js,ts,jsx,tsx}",
    "./widgets/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: {
    "@tailwindcss/postcss": {},
  },
}

export default config