/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    daisyui: {
      themes: [
         {
           mytheme: {
             primary: "#a991f7",
             secondary: "#7AB259",
             accent: "#E5E5E5",
             neutral: "#7AB259 ",
             "base-100": "#ffffff",
           },
        },
        
      ],
    },
   
   
    extend: {},
  },
  plugins: [require("daisyui")],

}
