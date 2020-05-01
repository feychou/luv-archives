import React from 'react';
import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import IconMail from './icon_mail_sp.svg';

const useStyles = makeStyles(theme => ({
  MobileTable: {
    marginRight: - theme.spacing(10),
    marginLeft: - theme.spacing(10)
  },
  from: {
    fontWeight: theme.typography.fontWeightBold
  },
  iconContainer: {
    textAlign: 'center'
  },
  iconMail: {
    width: '15px',
    paddingTop: theme.spacing(1)
  },
  summaryContainer: {
    padding: theme.spacing(1)
  }
}));

const MobileTable = ({ data }) => {
  const classes = useStyles()

  return (
    <div className={classes.MobileTable}>
      {data.map(item => (
        <ExpansionPanel>
          <ExpansionPanelSummary className={classes.summaryContainer}>
            <Grid container direction="column">
              <Grid container>
                <Grid item xs={1} className={classes.iconContainer}>
                  <img className={classes.iconMail} src={IconMail} alt="icon mail from/to" />
                </Grid>
                <Grid container xs={9} direction="column">
                  <Grid item>
                    <Typography className={classes.from}>{item.from}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{item.to}</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Typography>{item.date}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{item.content}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default MobileTable;