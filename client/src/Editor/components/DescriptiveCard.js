import React, { useContext } from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import EditorContext from '../context/EditorContext';
import RenderSandbox from './RenderSandbox';
import ReadOnly from './ReadOnly';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  CardStyle: {
    marginLeft: 10,
  },

  AddButtonStyle: {
    float: 'right',
    marginTop: 15,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
}));

const DescriptiveCard = props => {
  const { toPreview, setParent } = props;
  const { story, saveStory } = useContext(EditorContext);
  const { CardStyle, AddButtonStyle } = useStyles();

  const addToStory = () => {
    setParent(false);
    const { nodes, ...others } = story;
    saveStory({ nodes: [...nodes, { id: undefined, ...toPreview }], ...others });
  };

  return (
    <>
      <Card variant="outlined" onDragOver={() => setParent(false)} className={CardStyle}>
        <CardContent>
          <Typography variant="h6">{toPreview.label}</Typography>
          <Typography variant="subtitle1">{toPreview.description}</Typography>

          <ReadOnly
            draggable={true}
            style={{ border: '2px solid white' }}
            onDragStart={event => {
              event.dataTransfer.clearData('text');
              event.dataTransfer.setData('text', JSON.stringify({ id: undefined, ...toPreview }));
              event.dataTransfer.setDragImage(new Image(), 0, 0);
            }}
          >
            <RenderSandbox component={toPreview} />
          </ReadOnly>
        </CardContent>
      </Card>

      <Button className={AddButtonStyle} onClick={addToStory}>
        Add new question
      </Button>
    </>
  );
};

export default DescriptiveCard;
