import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import setStats from './redux/actions/stats';
import setRecovered from './redux/actions/recovered';
import setDeath from './redux/actions/death';
import setCountries from './redux/actions/countries';
import setSelectedCountry from './redux/actions/selectedCountry';
import Dashboard from './views/reports/DashboardView';

const App = () => {
  const routing = useRoutes(routes);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://covid19.mathdro.id/api/daily')
      .then(({ data }) => {
        dispatch(setStats(data))
      })
    axios.get('https://covid19.mathdro.id/api')
      .then(({ data }) => {
        dispatch(setRecovered(data.recovered.value))
        dispatch(setDeath(data.deaths.value))
      })
    axios.get('https://covid19.mathdro.id/api/countries/')
      .then(({ data }) => {
        dispatch(setCountries(data.countries))
      })
    axios.get(`https://covid19.mathdro.id/api/countries/Russia/confirmed`)
      .then(({ data }) => {
        dispatch(setSelectedCountry(data))
      })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
