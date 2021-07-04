import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  container: {
    height: "800px",
    width: "100%",
    justifyContent: "flex-start",
  },
  toolbarMargin: {
    marginBottom: "4em",
  },
  // toolbarMargin: {
  //   ...theme.mixins.toolbar,
  //   marginBottom: "3em",
  //   [theme.breakpoints.down("md")]: {
  //     marginBottom: "2em"
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     marginBottom: "1.25em"
  //   },
  // },
  // appbar: {
  //   zIndex: theme.zIndex.modal + 1
  // }
}));

const Header = (props) => {

  const classes = useStyles();
  // const theme = useTheme();

  return (
    <React.Fragment>
      <AppBar position="fixed"  >
        <Toolbar>

        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}

export default Header;