import React from 'react';
import Iframe from 'react-iframe';
import { makeStyles } from '@material-ui/core/styles';

import Chat from './Chat';

const useStyles = makeStyles({
  root: {},
  container: {
    backgroundColor: '#08101d',
    padding: '45px 10px 10px 10px',
    borderRadius: '10px',
    border: 'solid cyan 5px',
  },
  player: {
    border: 'solid black 3px',
    borderRadius: '13px',
    width: '500px',
    height: '95px',
  },
});

const RadioChat = (props) => {
  const classes = useStyles();
  return (
    <div>
      <h1>{props.stationName}</h1>
      <div className={classes.container}>
        <Iframe
          className={classes.player}
          url={props.stationURL}
          // display='initial'
          // position='relative'
        />
        <Chat />
      </div>
    </div>
  );
};

export default RadioChat;
