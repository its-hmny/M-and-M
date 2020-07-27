import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { GraphManipulation } from "../constants/GraphPreferences";

const  ActivitiesMenu = (props) => {
  const { renderNewState } = props;
  const { addNode } = GraphManipulation;
  return (
    <Grid item xs={3}>
      <Accordion>
        
        <AccordionSummary>
          <Typography variant="h6">Choose a new activity </Typography>
        </AccordionSummary>
        
        <AccordionDetails>
          <button 
            onClick={() => renderNewState(addNode, {label: "hmnyNode", group: "hmnyGroup"})} >
              Click on this to add a node
          </button>
        </AccordionDetails>
      
      </Accordion>
      <p>This is a paragraph</p>
    </Grid>
  );
}

export default ActivitiesMenu;