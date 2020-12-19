import React, { useState } from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';

import { useEditor } from '../context/EditorContext';
import CollapsableBox from './CollapsableBox';
import properties from '../constants/ComponentProperties.json';
import shortid from 'shortid';
const useStyles = makeStyles(theme => ({
  InspectorPaperStyle: {
    padding: 15,
    height: '100%',
    paddingBottom: theme.spacing(4),
    boxSizing: 'border-box',
    overflowY: 'auto',
    overflowX: 'hidden',
    zIndex: 6, // keep it above caption
    maxWidth: '25vw',
    borderRadius: 0,
  },
  DefaultTitleStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  content: {},
}));

const MAX_CONCURRENTLY_OPENED = 2;

const Inspector = () => {
  const { story, workingActivity } = useEditor();
  const { InspectorPaperStyle, DefaultTitleStyle, content } = useStyles();
  const [opened, setOpened] = useState([]);

  const toggleBox = boxId => {
    const isOpen = opened.some(item => item === boxId);
    if (isOpen) {
      setOpened(opened.filter(item => item !== boxId));
    } else {
      setOpened(
        opened.length >= MAX_CONCURRENTLY_OPENED
          ? [...opened.slice(1), boxId]
          : [...opened, boxId]
      );
    }
  };

  // const getComponentName = node => {
  //   const tokens = node.component.split('/');
  //   return tokens[tokens.length - 1];
  // };

  //Function returning a list of CollapsableBox
  const populateInspector = (components, level, previousPath) => {
    /*    
      uuid: unique identifier to close and open the collapsablebox
      key: react key
      name: component name
      isOpen: object containing the opened boxes
      handler: function for opening and closing the box
      indentLevel: Level of indentation for 
      fieldsToSet: component properties and associated EditorFragments 
        as specified in ComponentProperties.json 
      pathToVal: component path in the story
    */

    const absPath = previousPath || ['components'];
    // This must be generated only once at the first recursive call (when previousPath is undefined)
    const global = previousPath && (
      <CollapsableBox
        key="Global"
        name="Global"
        isOpen={opened.some(item => item === 'Global')}
        onClick={() => toggleBox('Global')}
        fieldsToSet={properties['Global']}
      />
    );

    const missions = previousPath && (
      <CollapsableBox
        key="Missions"
        name="Missions"
        isOpen={opened.some(item => item === 'Missions')}
        onClick={() => toggleBox('Missions')}
        fieldsToSet={properties['Missions']}
      />
    );

    return [
      global,
      missions,
      components.map((component, index) => {
        const { name } = component;
        return [
          <CollapsableBox
            key={component.id}
            name={name}
            isOpen={opened.some(item => item === component.id)}
            onClick={() => toggleBox(component.id)}
            indentLevel={level}
            fieldsToSet={properties[name]}
            pathToVal={[...absPath, index]}
          />,
          Array.isArray(component.children)
            ? populateInspector(component.children, level + 1, [
                ...absPath,
                index,
                'children',
              ])
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
      <div className={content}>
        {workingActivity &&
          populateInspector(
            story.nodes.find(node => node.id === workingActivity).components,
            0
          )}
      </div>
    </Paper>
  );
};

export default Inspector;
