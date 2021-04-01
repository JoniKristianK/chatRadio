import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import SelectGenre from './SelectGenre';

// genre's initial value
import { localStations } from '../dbStations';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
  stationLogo: {
    padding: '5px',
    border: 'solid cyan 2px',
    margin: '10px 8px',
    borderRadius: '10px',
    height: '70px',
    width: '70px',
  },
  stationList: {
    width: '400px',
    margin: '0 auto',
  },
});

const Main = (props) => {
  const classes = useStyles();

  const [genre, setGenre] = useState(localStations);

  // this genre comes from <SelectGenre handleGenreList=event.target.value
  const handleGenreList = (genre) => {
    setGenre(genre);
  };

  let stationList = genre.map((station) => (
    <img
      className={classes.stationLogo}
      key={station.id}
      src={station.src}
      alt={station.alt}
      onClick={() => props.history.push(`/:${station.id}`)}
    />
  ));

  return (
    <div>
      <SelectGenre handleGenreList={handleGenreList} />
      <div className={classes.stationList}>{stationList}</div>
    </div>
  );
};

export default withRouter(Main);
