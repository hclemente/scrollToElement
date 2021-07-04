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

  },
  links: {
    marginRight: "25px"
  }
}));

const Header = (props) => {

  const classes = useStyles();
  //const theme = useTheme();

  const linkInfo = [
    {name: "Test 1", to: "test1", activeIndex: 0},
    {name: "Test 2", to: "test2", activeIndex: 1},
    {name: "Test 3", to: "test3", activeIndex: 3}
  ]

  const links = (
    <React.Fragment>
      {linkInfo.map((link, index) => (
          <Link
            key={`${link}${index}`}
            to={link.to}
            smooth={true}
            duration={500}
            className={classes.links}
          >
            {link.name}
          </Link>
        )
      )}
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appbar} >
        <Toolbar>
          {links}
        </Toolbar>
      </AppBar>
      {/* <div className={classes.toolbarMargin} /> */}
    </React.Fragment>
  )
}

export default Header;