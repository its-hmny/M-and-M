import React, { useContext } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import EditorContext from "../context/EditorContext"

const  ActivitiesMenu = () => {
  const {story, saveStory} = useContext(EditorContext);
  console.log(story, saveStory);

  return (
    <Grid item xs={3}>
      <h1>{story.title}</h1>
      <Accordion>
        
        <AccordionSummary>
          <Typography variant="h6">Choose a new activity </Typography>
        </AccordionSummary>
        
        <AccordionDetails>
          <button onClick={()=> saveStory({title: "Pressed"})}>Test</button>
        </AccordionDetails>
      
      </Accordion>
    </Grid>
  );
}

export default ActivitiesMenu;