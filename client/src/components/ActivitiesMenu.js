import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

function ActivitiesMenu() {
  return (
    <Grid container item xs={4}>
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography>Activities</Typography>
        </ExpansionPanelSummary>
        
        <div>
          <h1>Eccoci qua</h1>
          <p>Questo è un paragrafo</p>
        </div>

        <div>
          <h1>Eccoci qua</h1>
          <p>Questo è un paragrafo</p>
        </div>

      </ExpansionPanel>
    </Grid>
  );
}

export default ActivitiesMenu;