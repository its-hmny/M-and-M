import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails ,Typography } from '@material-ui/core';

function ActivitiesMenu() {
  return (
    <Grid item xs={3}>
      <Accordion>
        <AccordionSummary>
          <Typography variant="h6">Choose a new activity </Typography>
        </AccordionSummary>
        
        <AccordionDetails>
          
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}

export default ActivitiesMenu;