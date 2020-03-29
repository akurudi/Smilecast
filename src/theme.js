import { createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import pink from "@material-ui/core/colors/pink";

const blueGreyLight = blueGrey['600']
const blueGreyMain = blueGrey['800']

export default createMuiTheme({
  typography: {
    fontFamily: "'Fira Mono', monospace"
  },
  palette: {
    primary: {
      light: blueGreyLight,
      main: blueGreyMain,
      contrastText: 'white'
    },
    secondary: pink
  }
});