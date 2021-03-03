import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // backgroundColor: 'black',
  },
  appBar: {
    position: 'static',
    background: 'linear-gradient(45deg,  cyan 30%, black 70%)',
    // margin: '0 auto',
    // width: '1000px',
  },
  menuButton: {
    marginRight: '50px',
  },
  title: {
    flexGrow: 1,
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          {/* <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          */}
          <Typography variant='h6' className={classes.title}>
            ChatRadio
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
