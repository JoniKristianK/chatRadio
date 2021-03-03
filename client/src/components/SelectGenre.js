import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { localStations, rockMetal, electric } from '../dbStations';

const useStyles = makeStyles({
  formControl: {
    margin: '0px 0px 30px 0px',
    minWidth: '370px',
    border: 'solid cyan 2px',
    borderRadius: '10px',
  },
});

const SelectGenre = ({ handleGenreList }) => {
  const classes = useStyles();

  const [genre, setGenre] = useState(localStations);

  const handleChange = (event) => {
    setGenre(event.target.value);
    handleGenreList(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id='label'>Select Genre</InputLabel> */}
        <Select
          style={{ backgroundColor: 'black', color: 'cyan', padding: '7px' }}
          // labelId='label'
          id='select'
          value={genre}
          onChange={handleChange}
        >
          {/* <em>Select</em> */}

          <MenuItem
            style={{ backgroundColor: 'black', color: 'cyan' }}
            value={localStations}
          >
            Local Stations
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: 'black', color: 'cyan' }}
            value={rockMetal}
          >
            Rock / Metal
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: 'black', color: 'cyan' }}
            value={electric}
          >
            Electric
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectGenre;
