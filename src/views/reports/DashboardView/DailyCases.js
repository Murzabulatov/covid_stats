import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 56,
    width: 56
  }
}));

const DailyCases = ({ className, ...rest }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const todayConfirmed = useSelector(({ stats }) => stats.items[stats.items.length - 1]?.deltaConfirmed)

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
              ВЫЯВЛЕНО ЗА СУТКИ
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {todayConfirmed && new Intl.NumberFormat('ru-RU').format(todayConfirmed)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AddCircleIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

DailyCases.propTypes = {
  className: PropTypes.string
};

export default DailyCases;
