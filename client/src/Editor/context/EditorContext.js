import React, { useState } from 'react';

const EditorContext = React.createContext();

export const EditorContextProvider = ({ children, userStory }) => {
  const [inProgressStory, setStory] = useState(userStory);
  const [focusedNode, setFocusedNode] = useState(undefined);

  const toProvide = {
    story: inProgressStory,
    workingActivity: focusedNode,

    saveStory: updatedStory => setStory(updatedStory),
    setWorkingActivity: activityID => setFocusedNode(activityID),

    getFromPath: path => {
      let current = inProgressStory.nodes.filter(node => node.id === focusedNode)[0];
      path.forEach(key => (current = current[key]));
      return current;
    },

    setPathToValue: (path, field, value) => {
      /* 
        path is the path to the current fragment in the story, 
        field is the name of the key inside to object that as to be modified,
        value is the value that has to ovverride the previous one
        Ex. view -> children -> 0 (first children) -> children -> 1 (second children)
      */
      let current = inProgressStory.nodes.filter(node => node.id === focusedNode)[0];
      path.forEach(key => (current = current[key]));
      current[field] = value;
      setStory({ ...inProgressStory });
    },
  };

  return <EditorContext.Provider value={toProvide}>{children}</EditorContext.Provider>;
};

export default EditorContext;
