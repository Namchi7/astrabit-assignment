/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "finance-item": "0px 5px 10px #0000000D",
        "book-now": "0px 5px 4px #0000000D",
      },
    },
  },
  plugins: [],
};
