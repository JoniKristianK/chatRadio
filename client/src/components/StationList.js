import React, { useState } from 'react';
import Iframe from 'react-iframe';

import { makeStyles } from '@material-ui/core/styles';

import radioRock from '../assests/radioRock.webp';
import radioCity from '../assests/radioCity.webp';
import iskelma from '../assests/iskelma.webp';
import radioSun from '../assests/radioSun.webp';
import fun from '../assests/fun.webp';
import suomiPop from '../assests/suomiPop.webp';
import radioAalto from '../assests/radioAalto.webp';
import nrj from '../assests/nrj.webp';
import groove from '../assests/groove.webp';
import nova from '../assests/nova.webp';

const useStyles = makeStyles({
  root: {},
  stationListImg: {
    padding: '5px',
    border: 'solid black 2px',
    margin: '5px',
    borderRadius: '10px',
  },
  stations: {
    width: '400px',
    margin: '0 auto',
  },
  player: {
    border: 'solid black 3px',
    borderRadius: '13px',
  },
});

const StationList = () => {
  const classes = useStyles();
  const [station, setStation] = useState('s117163');

  const stationList = [
    { src: radioCity, alt: 'Radio City', id: 's14868' },
    { src: radioRock, alt: 'Radio Rock', id: 's117163' },
    { src: iskelma, alt: 'Iskelmä', id: 's75241' },
    { src: radioSun, alt: 'Radio Sun', id: 's117164' },
    { src: fun, alt: 'Fun', id: 's221774' },
    { src: suomiPop, alt: 'Suomi Pop', id: 's117170' },
    { src: radioAalto, alt: 'Radio Aalto', id: 's117160' },
    { src: nrj, alt: 'NRJ', id: 's117128' },
    { src: groove, alt: 'Groove', id: 's65085' },
    { src: nova, alt: 'Nova', id: 's117097' },
  ];

  const stations = stationList.map((station) => (
    <img
      key={station.id}
      height='70'
      width='70'
      src={station.src}
      alt={station.alt}
      onClick={() => setStation(station.id)}
      className={classes.stationListImg}
    />
  ));

  const stationURL = `https://tunein.com/embed/player/${station}/`;

  return (
    <div>
      <div className={classes.stations}>{stations}</div>
      <div className={classes.player}>
        <Iframe
          url={stationURL}
          width='500px'
          height='95px'
          // display='initial'
          // position='relative'
          // className='myClassname'
        />
      </div>
    </div>
  );
};

export default StationList;
