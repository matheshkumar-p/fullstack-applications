module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          body: ['Lato'],
          para:['Quicksand'],
          logo:['Pacifico'],
          heading:['Nunito']
        },
        colors:{
          grayshade:"#323236"
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }