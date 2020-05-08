import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

function ActivitiesMenu() {
  return (
    <div>
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
    </div>
  );
}

export default ActivitiesMenu;