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
import MoneyIcon from '@material-ui/icons/Money';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.orange[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const Confirmed = ({ className, ...rest }) => {
  const classes = useStyles();
  const items = useSelector(({ stats }) => stats.items)

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
              ВСЕГО ВЫЯВЛЕНО
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {items[2] && new Intl.NumberFormat('ru-RU').format(items[items.length - 1].totalConfirmed)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Confirmed.propTypes = {
  className: PropTypes.string
};

export default Confirmed;
