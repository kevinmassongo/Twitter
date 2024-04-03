/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      flex : {
        'timeline-custom-1' : '0 0 800px',
        'tweetAvatar-custom-2' : '0 0 70px'
      },
      fontFamily : {
        'custom-fontFamily' : 'Inter'
      },
      borderWidth : {
        'custom-borderWidth' : '1px',
      },
      borderColor : {
        'custom-borderColor' : '#2F3336',
      },
      borderRadius : {
        'custom-borderRadius-1' : '50px',
        'custom-borderRadius-2' : '30px',
        'custom-borderRadius-3' : '15px'
      },
      maxWidth : {
        'timeline-custom-maxWidth' : '800px',
        'body-custom-maxWidth' : '1800px'
      },
      width : {
        'custom-width-1' : '270px',
        'custom-width-2' : '250px',
        'custom-width-3' : '85%'
      },
      backgroundColor : {
        'custom-backgroundColor-1' : '#000',
        'custom-backgroundColor-2' : '#6E767D',
        'custom-backgroundColor-3' : 'rgba(30, 143, 255, 0.235)',
        'custom-backgroundColor-4' : 'rgba(60, 179, 114, 0.235)',
        'custom-backgroundColor-5' : 'rgba(255, 0, 0, 0.235)',
        'custom-backgroundColor-6' : 'rgba(30, 143, 255, 0.335)',
        'custom-backgroundColor-7' : '#2F3336',
      },
      colors : {
        'body-custom-white' : '#FFF',
        'custom-color-1' : '#6E767D',
        'custom-color-2' : '#D9D9D9',
        'custom-color-3' : 'rgb(30,144,255)',
        'custom-color-4' : 'rgb(60,179,113)',
        'custom-color-5' : 'red',
      },
      padding : {
        'custom-padding-1' : '1.5rem 1rem',
        'custom-padding-2' : '.5rem 1.5rem',
        'custom-padding-3' : '1.5rem 2rem 0 2rem',
        'custom-padding-4' : '0 2rem 1.5rem 2rem',
        'custom-padding-5' : '10px 40px',
        'custom-padding-6' : '.3rem 1rem',
        'custom-padding-7' : '0.7rem 1.5rem'
      },
      alignItems : {
        'header-custom-alignItems' : 'center'
      },
      justifyContent : {
        'header-custom-justifyContent' : 'space-between'
      },
      fontSize : {
        'custom-fontSize-1' : '2rem',
        'custom-fontSize-2' : '0.9rem',
        'custom-fontSize-3' : '0.7rem',
        'custom-fontSize-4' : '1.3rem'
      },
      height : {
        'custom-height' : '200px'
      },
      filter : {
        'custom-1' : '(0 0 100px rgb(30,144,255))'
      },
      margin : {
        'custom-margin-1' : '-25px 0 0 10px',
        'custom-margin-2' : '10px 0px',
        'custom-margin-3' : '20px 10px',
        'custom-margin-4' : '13px 0px'
      }
    },
  },
  plugins: [],
}
