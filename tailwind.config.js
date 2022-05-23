module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#32CBFF",

          "secondary": "#00A5E0",

          "accent": "#89A1EF",

          "neutral": "#EF9CDA",

          "base-100": "#F0E9F2",

          "info": "#FECEF1",

          "success": "#46D8A5",

          "warning": "#E68E14",

          "error": "#F4487C",
        },
      },
      "dark"
    ],
  },
  plugins: [require("daisyui")],
}
