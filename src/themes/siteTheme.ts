import { createMuiTheme } from "@material-ui/core/styles";
import { PaletteOptions } from '@material-ui/core/styles/createPalette';



const palette = {
  type: 'light',

    primary: {
      main: '#330036',
      contrastText: '#ffffff',
      dark: '#230025',
      light: '#5b335e',
    },
    secondary: {
      main: '#da4167',
      light: '#ff7595',
      dark: '#a3003d'
    },
    error: {
      main: '#e53935',
    },
    info: {
      main: '#2196f3',
      light: '#4dabf5',
      dark: '#1c639c',
    },
    warning: {
      main: '#ff9800',
      light: '#ffac33',
      dark: '#b26a00',
      contrastText: '#000001',
    },
    success: {
      main: '#4caf50',
    },
    text: {
      primary: 'rgba(0,0,0,0.86)',
      secondary: 'rgba(0,0,0,0.55)',
      disabled: 'rgba(0,0,0,0.36)',
      hint: 'rgba(0,0,0,0.37)',
    },
  
}

const siteTheme = createMuiTheme({
  palette: palette as PaletteOptions,

  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontSize: "2rem",
      lineHeight: 2,
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 600,
      color: palette.primary.contrastText
    },
    h2: {
      fontSize: "1.9rem",
      lineHeight: 1,
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 400,
      paddingTop: 15,
      paddingBottom: 15,
      color: palette.primary.contrastText,
    },
    h3: {
      fontSize: "1.6rem",
      lineHeight: 1,
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 300,
      paddingTop: 15,
      paddingBottom: 15,
      color: palette.primary.contrastText,

    },
    h4: {
      fontSize: "1.3rem",
      lineHeight: 1,
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 300
    },
    h5: {
      fontSize: "1.1rem",
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 300
    },
    h6: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 300
    },
    body1: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 300,
    },
    body2: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "1rem",
    }
  },
  overrides: {

    MuiListItem: {
      root: {
        paddingTop: 0,
        paddingBottom: 0,
      }
    },

    MuiListItemText: {
      root: {
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
      },
      primary: {
        //color: palette.text.main,
        "&:hover": {
          color: palette.primary.dark,
          fontWeight: 'bold',
        }
      },

      secondary: {
        fontSize: '.9rem',
        //color: palette.text.main,
        "&:hover": {
          color: palette.primary.dark,
          fontWeight: 'bold',
        }
      }
    },

    MuiButton: {
      root: {
        fontVariant: 'body2',
        borderRadius: 0,
        textTransform: 'capitalize',
        borderWidth: '2px solid !important',
      },
    },

    MuiPaper: {
      root: {
        elevation: 1,
        borderColor: palette.secondary.main,
        transition: 'unset'
      }
    },
  },
  props: {
    MuiButton: {
      variant: 'outlined',

    },
    MuiPaper: {
      square: true,

    },
  },

});

export { siteTheme };
