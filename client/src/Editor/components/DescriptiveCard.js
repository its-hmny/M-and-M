import React, { useContext } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@material-ui/core';
import EditorContext from '../context/EditorContext'
import RenderSandbox from './RenderSandbox'
import ReadOnly from './ReadOnly';
import { makeStyles,  } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  
  AddButton: {
    float: "right",
    marginTop: 15
  }

}));


const DescriptiveCard = (props) => {
    const { toPreview, setParent } = props;
    const { story, saveStory } = useContext(EditorContext);

    const addToStory = () => { 
      setParent(false);
      const { nodes, ...others } = story;
      saveStory({ nodes: [...nodes, { id: undefined, ...toPreview }], others});
    };
    const classes = useStyles();
    return (
      <>
      <Card variant="outlined" onDragOver={() => setParent(false)}>
        <CardContent>
          <Typography variant="h6">{toPreview.label}</Typography>
          <Typography variant="subtitle1">{toPreview.description}</Typography>

          <ReadOnly draggable={true} style={{border: "2px solid white"}}
            onDragStart={event => event.dataTransfer.setData('text', JSON.stringify({ id: undefined, ...toPreview }))}
          >
            <RenderSandbox component={toPreview} />
          </ReadOnly>

          
        </CardContent>
      </Card>
      
      <Button className={classes.AddButton} onClick={addToStory}>Add new question</Button>
      
      </>
    );
};


export default DescriptiveCard;