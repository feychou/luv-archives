import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';

import data from './data';
import TableCell from './TableCell';
import ExpandableTableRow from './ExpandableTableRow';

const sortedData = data.sort((a,b) => new moment(b.date).format('YYYYMMDD') - new moment(a.date).format('YYYYMMDD'))

const useStyles = makeStyles(theme => ({
  App: {
    padding: theme.spacing(10)
  },
  AppHeader: {
    marginBottom: theme.spacing(2)
  },
  StartDatePicker: {
    marginRight: theme.spacing(2)
  },
  table: {
    minWidth: 650,
  }
}));

function App() {
  const [startDate, setStartDate] = useState(new Date('1830-11-01T21:11:54'));
  const [endDate, setEndDate] = useState(new Date('1860-01-08T21:11:54'))
  const classes = useStyles()

  const onChangeStartDate = (date) => {
    setStartDate(date);
  };

  const onChangeEndDate = (date) => {
    setEndDate(date);
  };

  const filterByDate = (date) => {
    return moment(date).isBetween(startDate, endDate);
  }

  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className={classes.StartDatePicker}
            disableToolbar
            variant="inline"
            format="yyyy-MM-dd"
            margin="normal"
            id="date-picker-inline"
            label="From"
            value={startDate}
            onChange={onChangeStartDate}
            minDate="1830-01-01"
            KeyboardButtonProps={{
              'aria-label': 'change start date',
            }}
          />
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy-mm-dd"
            margin="normal"
            id="date-picker-inline"
            label="To"
            value={endDate}
            onChange={onChangeEndDate}
            minDate="1830-01-01"
            KeyboardButtonProps={{
              'aria-label': 'change end date',
            }}
          />
        </MuiPickersUtilsProvider>
      </header>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.filter(({ date }) => filterByDate(date)).map((row) => (
              <ExpandableTableRow
                key={row.id}
                expandComponent={<TableCell colSpan="5">{row.content}</TableCell>}
              >
                <TableCell>{row.from}</TableCell>
                <TableCell>{row.to}</TableCell>
                <TableCell>{row.subject}</TableCell>
                <TableCell>{row.date}</TableCell>
              </ExpandableTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
