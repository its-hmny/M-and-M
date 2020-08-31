import React, { useContext } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@material-ui/core';
import EditorContext from '../context/EditorContext'
import RenderSandbox from './RenderSandbox'
import ReadOnly from './ReadOnly';

const DescriptiveCard = (props) => {
    const { toPreview } = props;
    const { story, saveStory } = useContext(EditorContext);

    const addToStory = () => { 
      const { nodes, ...others } = story;
      saveStory({ nodes: [...nodes, { id: undefined, ...toPreview }], others});
    };

    return (
      <div>
          <Card variant="outlined">
            <CardContent>

              <Typography variant="h6">{toPreview.label}</Typography>
              <Typography variant="body2">{toPreview.description}</Typography>

              <Box border={1} >
                <ReadOnly>
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