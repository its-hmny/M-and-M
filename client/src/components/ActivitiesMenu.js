import React, { useContext } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { EditorContext } from "../context/EditorContext"

const  ActivitiesMenu = () => {
  const context = useContext(EditorContext);

  return (
    <Grid item xs={3}>
      <h1>{context.title}</h1>
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