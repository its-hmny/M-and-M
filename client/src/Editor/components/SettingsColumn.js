import React, { useContext, useState } from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import EditorContext from '../context/EditorContext';
import CollapsableBox from './CollapsableBox';

import properties from '../constants/ComponentProperties.json';

const useStyles = makeStyles({
  InspectorPaperStyle: {
    padding: 15,
    zIndex: 2,
    marginTop: 15,
  },

  DefaultTitleStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    width: 270,
  },
});

const SettingsColumn = () => {
  const { story, workingActivity } = useContext(EditorContext);
  const { InspectorPaperStyle, DefaultTitleStyle } = useStyles();
  const [openBox, setOpenBox] = useState({});

  const setCollapsed = uuid => {
    const maxOpenBoxes = 3;
    // Get the all the elements in the same columns that are already open
    const alreadyOpen = Object.keys(openBox).filter(
      other_uuid => other_uuid.includes(`${workingActivity}`) && openBox[other_uuid]
    );

    // If there are more than maxOpenBox then the first to be opened gets closed
    if (alreadyOpen.length >= maxOpenBoxes) openBox[alreadyOpen[0]] = false;

    // Then set the user selected box to be open
    if (openBox[uuid] === undefined) setOpenBox({ ...openBox, [uuid]: true });
    else setOpenBox({ ...openBox, [uuid]: !openBox[uuid] });
  };

  const getComponentName = node => {
    const tokens = node.component.split('/');
    return tokens[tokens.length - 1];
  };

  const populateInspector = (iterator, level, previousPath) => {
    const absPath = previousPath || ['view', 'children'];
    // This must be genrated only once at the first recursive call (when previousPath is undefined)
    const global = previousPath ? undefined : (
      <CollapsableBox
        uuid={`Global-${workingActivity}`}
        key={`Global-${workingActivity}`}
        name="Global"
        isOpen={openBox}
        handler={setCollapsed}
        fieldsToSet={properties['Global']}
      />
    );

    return [
      global,
      iterator.map((element, index) => {
        const boxName = getComponentName(element);
        return [
          <CollapsableBox
            uuid={`${boxName}-${index}-${workingActivity}`}
            key={`${boxName}-${index}-${workingActivity}`}
            name={boxName}
            isOpen={openBox}
            handler={setCollapsed}
            indentLevel={level}
            fieldsToSet={properties[element.component]}
            pathToVal={[...absPath, index]}
          ></CollapsableBox>,
          Array.isArray(element.children)
            ? populateInspector(element.children, level + 1, [...absPath, index, 'children'])
            : undefined,
        ];
      }),
    ];
  };

  return (
    <Paper className={InspectorPaperStyle} elevation={3}>
      <Typography variant="h4" component="h4" className={DefaultTitleStyle}>
        {story.title}
      </Typography>
      {!workingActivity ||
        populateInspector(story.nodes.filter(node => node.id === workingActivity)[0].view.children, 0)}
    </Paper>
  );
};

export default SettingsColumn;
