import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import theme from './theme';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import { Element } from 'react-scroll'
import Scroll from 'react-scroll';
import {Link} from 'react-scroll';

const ScrollLink = Scroll.ScrollLink

const useStyles = makeStyles(theme => ({
  container: {
    height: "500px",
    width: "100%",
    justifyContent: "flex-start",
  },
}));

const App = (props) => {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <Header/>

        <Grid id="dest1" container className={classes.container}>
          <Grid item>
            {/* <Typography>Test 1</Typography> */}
            <Typography>Test 1</Typography>

          </Grid>
        </Grid>

        <Grid id="dest2" container  className={classes.container}>
          <Grid item>
            <Typography > Test 2</Typography>
          </Grid>
        </Grid>

        <Grid id="dest3"container className={classes.container}>
          <Grid item>
            <Typography>Test 3</Typography>
          </Grid>
        </Grid>

    </React.Fragment>
    </ThemeProvider>
  )
}

export default App;

