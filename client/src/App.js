import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import ToolBar from './components/ToolBar';
import Main from './components/Main';
import RadioChat from './components/RadioChat';
import Footer from './components/Footer';

import { localStations } from './dbStations';

import './App.css';

const useStyles = makeStyles({
  root: {},
  stationLogo: {
    padding: '5px',
    border: 'solid cyan 2px',
    margin: '10px 8px',
    borderRadius: '10px',
    height: '70px',
    width: '70px',
    backgroundColor: 'white',
  },
});

const App = (props) => {
  const classes = useStyles();

  const [station, setStation] = useState('s117163'); // 's117163
  const [stationName, setStationName] = useState('');
  const [genre, setGenre] = useState(localStations); //localStations

  //this genre comes from <SelectGenre handleGenreList=event.target.value
  const handleGenreList = (genre) => {
    setGenre(genre);
  };

  let stationList = genre.map((station) => (
    <img
      className={classes.stationLogo}
      key={station.id}
      src={station.src}
      alt={station.alt}
      onClick={() => handleRoute(station.id, station.alt)}
    />
  ));

  const handleRoute = (stationId, stationName) => {
    setStation(stationId);
    setStationName(stationName);
    props.history.push(`/${stationId}`);
  };

  const stationURL = `https://tunein.com/embed/player/${station}/`;
  const routePath = `/${station}`;

  return (
    <div className='App'>
      <ToolBar />
      <header className='App-header'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Main
                handleGenreList={handleGenreList}
                stationList={stationList}
              />
            )}
          />
          <Route
            exact
            path={routePath}
            render={() => (
              <RadioChat stationURL={stationURL} stationName={stationName} />
            )}
          />
        </Switch>
      </header>
      <Footer />
    </div>
  );
};

export default withRouter(App);
