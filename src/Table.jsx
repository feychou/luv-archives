import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';

import TableCell from './TableCell';
import ExpandableTableRow from './ExpandableTableRow';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
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
  );
}

export default DataTable;