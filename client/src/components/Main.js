import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import SelectGenre from './SelectGenre';
import Favorites from './Favorites';

const useStyles = makeStyles({
  root: {},
  container: {
    backgroundColor: '#08101d',
    padding: '45px 10px 10px 10px',
    borderRadius: '10px',
    border: 'solid cyan 5px',
  },
  stationList: {
    width: '506px',
    margin: '0 auto',
  },
  favorites: {
    marginTop: '13px',
    backgroundColor: '#08101d',
    padding: '45px 10px 10px 10px',
    borderRadius: '10px',
    border: 'solid pink 5px',
  },
});

const Main = (props) => {
  const classes = useStyles();

  return (
    <div>
      <h1>ChatRadio</h1>
      <div className={classes.container}>
        <SelectGenre handleGenreList={props.handleGenreList} />
        <div className={classes.stationList}>{props.stationList}</div>
      </div>
      <div className={classes.favorites}>
        <Favorites />
      </div>
    </div>
  );
};

export default Main;
