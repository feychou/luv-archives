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

const sortedData = data.sort((a,b) => new moment(b.date).format('YYYYMMDD') - new moment(a.date).format('YYYYMMDD'))

const useStyles = makeStyles(theme => ({
  App: {
    padding: theme.spacing(10)
  },
  AppHeader: {
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 650,
  },
}));

function App() {
  const [selectedDateRange, setSelectedDateRange] = useState([new Date('1845-01-08T21:11:54')]);
  const classes = useStyles()

  const handleDateChange = (date) => {
    setSelectedDateRange([date]);
  };

  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy-mm-dd"
            margin="normal"
            id="date-picker-inline"
            label="From"
            value={selectedDateRange[0]}
            onChange={handleDateChange}
            minDate="1830-01-01"
            KeyboardButtonProps={{
              'aria-label': 'change date',
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
            {sortedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.from}
                </TableCell>
                <TableCell>{row.to}</TableCell>
                <TableCell>{row.subject}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
