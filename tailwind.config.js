/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/app/organisation-admin/**/*.html", 
    "./src/app/organisation-admin/**/*.ts",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'landingphoto':"url('https://img.freepik.com/free-photo/speaker-giving-presentation-meeting-room_155003-26343.jpg?w=1060&t=st=1706715255~exp=1706715855~hmac=666ee71de927a7ffa44e39a64622f5ce3c8820f1c20938f50ee55d048d2b1f64')"
      },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        }
      },
        plugins: [],
}
}