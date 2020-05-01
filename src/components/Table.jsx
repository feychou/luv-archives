import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@material-ui/core';

import TableCell from './TableCell';
import ExpandableTableRow from './ExpandableTableRow';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  date: {
    fontWeight: theme.typography.fontWeightBold
  }
}));

function DataTable(props) {
  const classes = useStyles()
  const { data } = props;

  return (
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
          {data.map((row) => (
            <ExpandableTableRow
              key={row.id}
              expandComponent={<TableCell colSpan="5"><Typography>{row.content}</Typography></TableCell>}
            >
              <TableCell><Typography>{row.from}</Typography></TableCell>
              <TableCell><Typography>{row.to}</Typography></TableCell>
              <TableCell><Typography>{row.subject}</Typography></TableCell>
              <TableCell><Typography className={classes.date}>{row.date}</Typography></TableCell>
            </ExpandableTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;