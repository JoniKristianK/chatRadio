import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { localStations, rockMetal, electric } from '../dbStations';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
}));

const SelectGenre = ({ handleGenreList }) => {
  const classes = useStyles();
  const [genre, setGenre] = useState('');

  const handleChange = (event) => {
    setGenre(event.target.value);
    handleGenreList(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='label'>
          <strong>Select Genre</strong>
        </InputLabel>
        <Select
          labelId='label'
          id='select'
          value={genre}
          onChange={handleChange}
        >
          {/* <em>Select</em> */}
          <MenuItem value={localStations}>Local Stations</MenuItem>
          <MenuItem value={rockMetal}>Rock / Metal</MenuItem>
          <MenuItem value={electric}>Electric</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectGenre;
