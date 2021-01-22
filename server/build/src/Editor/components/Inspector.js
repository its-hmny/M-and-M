import React, { useState } from '../../../web_modules/react.js';
import {
  Paper,
  Typography,
  makeStyles,
} from '../../../web_modules/@material-ui/core.js';
import { useEditor } from '../context/EditorContext.js';
import CollapsableBox from './CollapsableBox.js';
import properties from '../constants/ComponentProperties.json.proxy.js';

const useStyles = makeStyles((theme) => ({
  InspectorPaperStyle: {
    padding: 15,
    height: '100%',
    paddingBottom: theme.spacing(4),
    boxSizing: 'border-box',
    overflowY: 'auto',
    overflowX: 'hidden',
    zIndex: 6,
    // keep it above caption
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

const Inspector = ({ onClose }) => {
  const { story, workingActivity } = useEditor();

  const { InspectorPaperStyle, DefaultTitleStyle, content } = useStyles();

  const [opened, setOpened] = useState([]);

  const toggleBox = (boxId) => {
    const isOpen = opened.some((item) => item === boxId);

    if (isOpen) {
      setOpened(opened.filter((item) => item !== boxId));
    } else {
      setOpened(
        opened.length >= MAX_CONCURRENTLY_OPENED
          ? [...opened.slice(1), boxId]
          : [...opened, boxId],
      );
    }
  }; // const getComponentName = node => {
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
    const absPath = previousPath || ['components']; // This must be generated only once at the first recursive call (when previousPath is undefined)

    const global =
      !previousPath &&
      React.createElement(CollapsableBox, {
        key: `${workingActivity}-Global`,
        name: 'Global',
        isOpen: opened.some((item) => item === `${workingActivity}-Global`),
        onClick: () => toggleBox(`${workingActivity}-Global`),
        fieldsToSet: properties['Global'],
      });

    const missions =
      !previousPath &&
      React.createElement(CollapsableBox, {
        key: `${workingActivity}-Missions`,
        name: 'Missions',
        isOpen: opened.some((item) => item === `${workingActivity}-Missions`),
        onClick: () => toggleBox(`${workingActivity}-Missions`),
        fieldsToSet: properties['Missions'],
      });

    return [
      global,
      missions,
      components.map((component, index) => {
        const { name } = component;

        return [
          React.createElement(CollapsableBox, {
            key: `${workingActivity}-${component.id}`,
            name: name,
            isOpen: opened.some(
              (item) => item === `${workingActivity}-${component.id}`,
            ),
            onClick: () => toggleBox(`${workingActivity}-${component.id}`),
            indentLevel: level,
            fieldsToSet: properties[name],
            pathToVal: [...absPath, index],
          }),
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

  return React.createElement(
    Paper,
    {
      className: InspectorPaperStyle,
      elevation: 3,
    },
    React.createElement(
      Typography,
      {
        variant: 'h4',
        component: 'h4',
        className: DefaultTitleStyle,
      },
      story.title,
    ),
    React.createElement(
      'div',
      {
        className: content,
      },
      workingActivity &&
        populateInspector(
          story.nodes.find((node) => node.id === workingActivity).components,
          0,
        ),
    ),
  );
};

export default Inspector;
