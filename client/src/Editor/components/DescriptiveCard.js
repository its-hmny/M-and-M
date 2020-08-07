import React, { useContext } from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import EditorContext from '../context/EditorContext'
import RenderSandbox from './RenderSandbox'
import ReadOnly from './ReadOnly';

const DescriptiveCard = (props) => {
    const { toPreview } = props;
    const { story, saveStory } = useContext(EditorContext);

    const addToStory = () => { 
      const updatedStory = { ...story.nodes.push(toPreview), ...story };
      saveStory(updatedStory);
    };

    return (
      <div>
          <Card variant="outlined">
            <CardContent>
            <Typography variant="h6">{toPreview.name}</Typography>
              
              <ReadOnly>
                <RenderSandbox component={toPreview} />
              </ReadOnly>
              
              <Typography variant="body1">{toPreview.description}</Typography>
              
              <Button onClick={addToStory}>Add new question</Button>

            </CardContent>
          </Card>
      </div>
    );
};


export default DescriptiveCard;