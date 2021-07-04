import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Scroll from 'react-scroll';
import {Link} from 'react-scroll';

const ScrollLink = Scroll.ScrollLink;

const useStyles = makeStyles(theme => ({
  container: {
    height: "800px",
    width: "100%",
    justifyContent: "flex-start",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em"
    },
  },
  appbar: {

  }
}));

const Header = (props) => {

  const classes = useStyles();
  //const theme = useTheme();

  return (
    <React.Fragment>
      <AppBar position="sticky" className={classes.appbar} >
        <Toolbar>
            <Link
              to="dest1"
              smooth={true}
              duration={500}
          >
              Test 1
            </Link>
            <Link
              to="dest2"
              smooth={true}
              duration={500}
          >
              Test 2
            </Link>
            <Link
              to="dest3"
              smooth={true}
              duration={500}
          >
              Test 3
            </Link>
        </Toolbar>
      </AppBar>
      {/* <div className={classes.toolbarMargin} /> */}
    </React.Fragment>
  )
}

export default Header;