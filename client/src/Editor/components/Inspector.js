import React, { useContext, useState } from 'react';
import { Paper, Box, Typography, List, ListItem, Collapse, Divider } from '@material-ui/core';
import EditorContext from '../context/EditorContext';
import properties from '../constants/ComponentProperties.json';

import { makeStyles } from '@material-ui/core/styles';
import InspectorElement from './InspectorElement';
import shortid from 'shortid';
const useStyles = makeStyles({
  InspectorPaperStyle: {
    padding: 15,
    zIndex: 2,
    marginTop: 15,
  },

  InspectorElementStyle: {
    margin: 10,
  },

  DefaultTitleStyle: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});

const CollapsableBox = props => {
  const { name, uuid, isOpen, handler, children, ...specificProps } = props;
  const { InspectorElementStyle } = useStyles();

  return (
    <Box className={InspectorElementStyle}>
      <List className={InspectorElementStyle}>
        <ListItem button onClick={() => handler(uuid)}>
          <Typography variant="h5" component="h5">
            {name}
          </Typography>
        </ListItem>
        <Collapse in={isOpen[uuid]} unmountOnExit>
          <Box borderLeft={1} borderColor="primary.main">
            <InspectorElement {...specificProps} />
            {children}
          </Box>
        </Collapse>
      </List>
      <Divider />
    </Box>
  );
};

const Inspector = () => {
  const { story, workingActivity } = useContext(EditorContext);
  const { InspectorPaperStyle, DefaultTitleStyle } = useStyles();
  const [openElements, setOpenElements] = useState({});

  const setCollapsed = index => {
    if (openElements[index] === undefined) setOpenElements({ ...openElements, [index]: true });
    else setOpenElements({ ...openElements, [index]: !openElements[index] });
  };

  const getComponentName = node => {
    const tokens = node.component.split('/');
    return tokens[tokens.length - 1];
  };

  const populateInspector = (iterator, previousPath) => {
    const absPath = previousPath || ['view', 'children'];
    // This must be genrated only once at the first recursive call (when previousPath is undefined)
    const global = previousPath ? undefined : (
      <CollapsableBox
        uuid={`Global-${workingActivity}`}
        key={`Global-${workingActivity}`}
        name="Global"
        isOpen={openElements}
        handler={setCollapsed}
        fieldsToSet={properties['Global']}
      />
    );

    return [
      global,
      iterator.map((element, index) => {
        const boxName = getComponentName(element);
        return (
          <CollapsableBox
            uuid={`${boxName}-${index}-${workingActivity}`}
            key={`${boxName}-${index}-${workingActivity}`}
            name={boxName}
            isOpen={openElements}
            handler={setCollapsed}
            fieldsToSet={properties[element.component]}
            pathToVal={[...absPath, index]}
          >
            {Array.isArray(element.children)
              ? populateInspector(element.children, [...absPath, index, 'children'])
              : undefined}
          </CollapsableBox>
        );
      }),
    ];
  };

  return (
    <Paper className={InspectorPaperStyle} elevation={3}>
      {workingActivity === undefined ? (
        <Typography variant="h5" component="h5" className={DefaultTitleStyle}>
          Select an element
        </Typography>
      ) : (
        populateInspector(story.nodes.filter(node => node.id === workingActivity)[0].view.children)
      )}
    </Paper>
  );
};

export default Inspector;
