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
    let tmp; // A temporary object to store all the changes made
    const maxOpenBoxes = 3;

    // Set the user selected box to be open
    if (openBox[uuid] === undefined) tmp = { ...openBox, [uuid]: true };
    else tmp = { ...openBox, [uuid]: !openBox[uuid] };

    // Get the all the elements in the same columns that are already open
    const alreadyOpen = Object.keys(tmp).filter(
      other_uuid => other_uuid.includes(`${workingActivity}`) && tmp[other_uuid]
    );

    // If there are more than maxOpenBox then the first to be opened gets closed
    if (alreadyOpen.length > maxOpenBoxes) tmp = { ...tmp, [alreadyOpen[0]]: false };

    // Set the new state
    setOpenBox(tmp);
  };

  const getComponentName = node => {
    const tokens = node.component.split('/');
    return tokens[tokens.length - 1];
  };

  //Function returning a list of CollapsableBox
  const populateInspector = (iterator, level, previousPath) => {
    /*    uuid: unique identifier to close and open the collapsablebox
          key: react key
          name: component name
          isOpen: object containing the opened boxes
          handler: function for opening and closing the box
          indentLevel: Level of indentation for 
          fieldsToSet: component properties and associated EditorFragments 
            as specified in ComponentProperties.json 
          pathToVal: component path in the story */

    const absPath = previousPath || ['view', 'children'];
    // This must be generated only once at the first recursive call (when previousPath is undefined)
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
