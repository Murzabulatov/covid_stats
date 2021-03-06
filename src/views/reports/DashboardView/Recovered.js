import React from 'react';
import { useSelector } from 'react-redux';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.green[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.green[900]
  },
  differenceValue: {
    color: colors.green[900],
    marginRight: theme.spacing(1)
  }
}));

const Recovered = ({ className, ...rest }) => {
  const classes = useStyles();
  const count = useSelector(({ recovered }) => recovered.count)

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              ВЫЗДОРОВЕЛО
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {new Intl.NumberFormat('ru-RU').format(count)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>

      </CardContent>
    </Card>
  );
};

Recovered.propTypes = {
  className: PropTypes.string
};

export default Recovered;
