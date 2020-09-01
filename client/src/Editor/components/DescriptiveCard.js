import React, { useContext } from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
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
      <Card variant="outlined" onDragOver={() => setParent(false)}>
        <CardContent>
          <Typography variant="h6">{toPreview.label}</Typography>
          <Typography variant="subtitle1">{toPreview.description}</Typography>

          <ReadOnly draggable={true} style={{border: "2px solid white"}}
            onDragStart={event => event.dataTransfer.setData('text', JSON.stringify({ id: undefined, ...toPreview }))}
          >
            <RenderSandbox component={toPreview} />
          </ReadOnly>

          <Button onClick={addToStory}>Add new question</Button>
        </CardContent>
      </Card>
    );
};


export default DescriptiveCard;