import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import setSelectedCountry from '../../../redux/actions/selectedCountry';


const CountrySelector = () => {
  const dispatch = useDispatch();

  const getCountryStats = (country) => {
    axios.get(`https://covid19.mathdro.id/api/countries/${country}/confirmed`)
      .then(({ data }) => {
        dispatch(setSelectedCountry(data))
      })
  }

  const countries = useSelector(({ countries }) => countries.countries)
  return (
    <Autocomplete
      onChange={(event, newValue) => {
        newValue && getCountryStats(newValue.name);
      }}
      id="combo-box-demo"
      options={countries}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label="Страна" variant="outlined" />}
    />
  );
}



export default CountrySelector;
