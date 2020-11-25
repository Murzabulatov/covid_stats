import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Confirmed from './Confirmed';
import StatsTable from './StatsTable';
import Statistics from './Statistics';
import Deaths from './Deaths';
import Recovered from './Recovered';
import DailyCases from './DailyCases';
import CountrySelector from './CountrySelector';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Мировая статистика по коронавирусу (Covid-19)"
      style={{ margin: '0 auto', maxWidth: 1600 }}

    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
          justify='center'
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Confirmed />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Recovered />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Deaths />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <DailyCases />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Statistics />
          </Grid>

          <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={6}
          >
            <CountrySelector />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <StatsTable />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
