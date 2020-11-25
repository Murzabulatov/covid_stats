import React from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const StatsTable = ({ className, ...rest }) => {
  const data = useSelector(({ selectedCountry }) => selectedCountry)
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Статистика по регионам" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Регион
                </TableCell>
                <TableCell>
                  На текущий момент
                </TableCell>
                <TableCell>
                  Всего выявлено
                </TableCell>
                <TableCell>
                  Выздоровело
                </TableCell>
                <TableCell>
                  Умерло
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.subRegions.map((region) => (
                <TableRow
                  hover
                  key={region.uid}
                >
                  <TableCell>
                    {region.provinceState ? region.provinceState : region.countryRegion}
                  </TableCell>
                  <TableCell>
                    {region.active}
                  </TableCell>
                  <TableCell>
                    {region.confirmed}
                  </TableCell>
                  <TableCell>
                    {region.recovered}
                  </TableCell>
                  <TableCell>
                    {region.deaths}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

StatsTable.propTypes = {
  className: PropTypes.string
};

export default StatsTable;
