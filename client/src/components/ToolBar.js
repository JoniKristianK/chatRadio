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
    // #355c96 blueIsh toolbar
    background: 'linear-gradient(165deg, black 30%, cyan 70%)',
    // margin: '0 auto',
    // width: '1000px',
  },
  menuButton: {
    // marginRight: '50px',
  },
  title: {
    flexGrow: 1,
  },
});

const ToolBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}></Typography>
          <Button color='black'>Register</Button>
          <Button color='black'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ToolBar;
