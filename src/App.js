import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';

import NoResultView from './NoResultView';
import Table from './Table';
import data from './data';

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
  ExpansionSummary: {
    fontWeight: theme.typography.fontWeightRegular,
  }
}));

const sortedData = data.sort((a,b) => new moment(b.date).format('YYYYMMDD') - new moment(a.date).format('YYYYMMDD'))

function App() {
  const [startDate, setStartDate] = useState(new Date('1830-11-01'));
  const [endDate, setEndDate] = useState(new Date('1860-01-08'));
  const [width, setWidth] = useState(window.innerWidth);
  const classes = useStyles()

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('resize', onResize) }
  }, [])


  const onChangeStartDate = (date) => {
    setStartDate(date);
  };

  const onChangeEndDate = (date) => {
    setEndDate(date);
  };

  const filterByDate = (date) => {
    const momentDate = moment(date);
    return (momentDate.isSame(startDate) ||
            momentDate.isSame(endDate) ||
            momentDate.isBetween(startDate, endDate));
  }

  const data = sortedData.filter(({ date }) => filterByDate(date));

  const getMainContent = () => {
    if (data.length) return (
      width > 960 ?
      <Table data={data} /> :
      <div>
        {data.map(item => (
          <ExpansionPanel>
            <ExpansionPanelSummary>
              <div className={classes.ExpansionSummary}>{item.from}</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {item.content}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    )

    return <NoResultView />
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
            format="yyyy-MM-dd"
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
      <Typography className={classes.result}>Results: {data.length} mail(s)</Typography>
      {getMainContent()}
    </div>
  );
}

export default App;
