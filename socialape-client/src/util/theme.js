export default {
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff',
    },
  },

  typography: {
    useNextVariants: true,
  },

  mainStyle: {
    formContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      width: '70%',
      margin: '0 auto',
    },

    pageTitle: {
      margin: '10px auto 20px auto',
    },
    image: {
      margin: '20px auto 20px auto',
    },

    textField: {
      margin: '20px auto',
    },

    button: {
      marginTop: 20,
      position: 'relative',
      padding: 10,
    },

    customError: {
      color: 'red',
      fontSize: '0.8rem',
    },

    progress: {
      position: 'absolute',
    },
  },
};
