import { combineReducers } from 'redux';
import deathReducer from './deathReducer';
import recoveredReducer from './recoveredReducer';
import statsReducer from './statsReducer';
import countriesReducer from './countriesReducer';
import selectedCountryReducer from './selectedCountryReducer';

const rootReducer = combineReducers({
  stats: statsReducer,
  recovered: recoveredReducer,
  death: deathReducer,
  countries: countriesReducer,
  selectedCountry: selectedCountryReducer,
})

export default rootReducer;
