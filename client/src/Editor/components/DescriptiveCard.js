import React, { useContext } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@material-ui/core';
import EditorContext from '../context/EditorContext'
import RenderSandbox from './RenderSandbox'
import ReadOnly from './ReadOnly';

const DescriptiveCard = (props) => {
    const { toPreview, setParent } = props;
    const { story, saveStory } = useContext(EditorContext);

    const addToStory = () => { 
      setParent(false);
      const { nodes, ...others } = story;
      saveStory({ nodes: [...nodes, { id: undefined, ...toPreview }], others});
    };

    return (
      <div>
          <Card variant="outlined" onDragOver={() => setParent(false)}>
            <CardContent>

              <Typography variant="h6">{toPreview.label}</Typography>
              <Typography variant="body2">{toPreview.description}</Typography>

              <Box border={1} >
                <ReadOnly id="card-container" draggable={true} 
                  onDragStart={event => event.dataTransfer.setData("text", JSON.stringify({id: 0, ...toPreview}))}
                >
                  <RenderSandbox component={toPreview} />
                </ReadOnly>
              </Box>
              
              <Button onClick={addToStory}>Add new question</Button>

            </CardContent>
          </Card>
      </div>
    );
};


export default DescriptiveCard;