import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Logo from './logo.png';

const useStyles = makeStyles(theme => ({
  NoResultContainer: {
    width: '100%',
    borderTop: `2px solid ${theme.palette.action.selected}`,
    textAlign: 'center'
  },
  Logo: {
    marginTop: theme.spacing(20)
  }
}));

function NoResultView() {
  const classes = useStyles()

  return (
    <div className={classes.NoResultContainer}>
      <img
        className={classes.Logo}
        src={Logo}
        alt="Email Archive Logo"
      />
    </div>
  );
}

export default NoResultView;