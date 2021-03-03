import React, { useState } from 'react';
import Iframe from 'react-iframe';

import SelectGenre from './SelectGenre';

// genre's initial value
import { localStations } from '../dbStations';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
  stationLogo: {
    padding: '5px',
    border: 'solid cyan 2px',
    margin: '8px 5px',
    borderRadius: '10px',
    height: '70px',
    width: '70px',
  },
  stationList: {
    width: '400px',
    margin: '0 auto',
  },
  player: {
    border: 'solid black 3px',
    borderRadius: '13px',
    width: '500px',
    height: '95px',
  },
});

const Player = () => {
  const classes = useStyles();

  const [station, setStation] = useState('s117163');
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
      onClick={() => setStation(station.id)}
    />
  ));

  const stationURL = `https://tunein.com/embed/player/${station}/`;

  return (
    <div>
      <SelectGenre handleGenreList={handleGenreList} />
      <div className={classes.stationList}>{stationList}</div>
      <div>
        <Iframe
          className={classes.player}
          url={stationURL}
          // display='initial'
          // position='relative'
        />
      </div>
    </div>
  );
};

export default Player;
