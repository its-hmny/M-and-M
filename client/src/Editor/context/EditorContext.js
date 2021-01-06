import React, { useContext, useState } from 'react';

const EditorContext = React.createContext();

export const EditorProvider = ({ children, userStory }) => {
  const [inProgressStory, setStory] = useState(userStory);
  const [focusedNode, setFocusedNode] = useState(undefined);

  const toProvide = {
    story: inProgressStory,
    workingActivity: focusedNode,

    saveStory: updatedStory => {
      setStory(updatedStory);
    },
    setWorkingActivity: activityID => setFocusedNode(activityID),

    getFromPath: path => {
      let current = inProgressStory.nodes.find(node => node.id === focusedNode);

      path.forEach(key => {
        if (!current[key]) {
          current[key] = {};
        }
        console.log(current);
        console.log(key);
        current = current[key];
      });
      return current;
    },

    setPathToValue: (path, field, value) => {
      /* 
        path is the path to the current fragment in the story, 
        field is the name of the key inside the object that has to be modified,
        value is the value that has to overwrite the previous one
        Ex. components -> 0 (first component) -> children -> 1 (second component)
      */

      let current = inProgressStory.nodes.find(node => node.id === focusedNode);
      path.forEach(key => {
        if (!current[key]) {
          current[key] = {};
        }

        current = current[key];
      });
      current[field] = value;
      setStory({ ...inProgressStory });
    },
  };

  return <EditorContext.Provider value={toProvide}>{children}</EditorContext.Provider>;
};

export const useEditor = () => {
  const value = useContext(EditorContext);
  if (value == null) {
    throw new Error('useEditor must be used inside an EditorProvider');
  }

  return value;
};
