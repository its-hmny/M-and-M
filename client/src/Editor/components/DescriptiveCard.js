import React, { useContext } from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import RenderSandbox from './RenderSandbox'
import EditorContext from '../context/EditorContext';
import ReadOnly from './ReadOnly';

const DescriptiveCard = (props) => {
    const { description, toRender, ...others } = props;
    const { story } = useContext(EditorContext);
  
    return (
      <div>
          <Card variant="outlined">
            <CardContent>
              <ReadOnly>
                <RenderSandbox component={story.nodes[0]} />
              </ReadOnly>
              <Typography variant="subtitle1">{description}</Typography>
              <Button onClick={() => console.log("Clicked card")}>Add new question</Button>
            </CardContent>
          </Card>
      </div>
    );
};


export default DescriptiveCard;