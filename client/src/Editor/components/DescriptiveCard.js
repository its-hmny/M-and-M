import React, { useContext } from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import RenderSandbox from './RenderSandbox'
import EditorContext from '../context/EditorContext';

const DescriptiveCard = (props) => {
    const { templateName, description, toRender, ...others } = props;
    const { story } = useContext(EditorContext);
  
    return (
      <div>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h3">{description}</Typography>
              <RenderSandbox component={story.nodes[1]} />
              <Button onClick={() => console.log("Clicked card")}>Add new question</Button>
            </CardContent>
          </Card>
      </div>
    );
};


export default DescriptiveCard;