import React from 'react';
import { TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const useStyles = makeStyles(theme => ({
  expanded: {
    backgroundColor: theme.palette.action.selected
  },
  TableRow: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.action.hover
    }
  }
}));

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const classes = useStyles()

  return (
    <>
      <TableRow
        {...otherProps}
        onClick={() => setIsExpanded(!isExpanded)}
        className={classnames(classes.TableRow, { [classes.expanded]: isExpanded })}
      >
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};

export default ExpandableTableRow;