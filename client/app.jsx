import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
//import theme from './theme';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import { ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    height: "800px",
    width: "100%",
    justifyContent: "flex-start",
  },
}));

const App = (props) => {

  const classes = useStyles();

  return (

    <React.Fragment>
      <Header/>
      <Grid container className={classes.container}>
        <Grid item>
          <Typography>Test 1</Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
      <Grid item>
          <Typography>Test 2</Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
      <Grid item>
          <Typography>Test 3</Typography>
        </Grid>
      </Grid>
    </React.Fragment>

  )
}

export default App;

