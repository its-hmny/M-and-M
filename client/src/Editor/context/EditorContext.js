import React, { useState } from 'react';

const EditorContext = React.createContext();

/*
An initial object with default field that the user will have to overwrite,
first node of the graph (maybe more to give a hint), some default field such as
title, brief description and so on
*/
const defaultStory = { 
    title: "Default title"
};

export const EditorContextProvider = ({ children, userStory }) => {
    const [inProgressStory, setStory] = useState(userStory || defaultStory);
    const [focusedNode, setFocusedNode] = useState(undefined);
    
    const toProvide = {
        story: inProgressStory,
        workingActivity: focusedNode,
        saveStory: (updatedStory) => setStory(updatedStory),
        setWorkingActivity: (activityID) => setFocusedNode(activityID),
        
        getFromPath: (path) => {
            let current = inProgressStory.nodes.filter(node => node.id === focusedNode)[0];
            path.forEach(key => current = current[key]);
            return (current);
        },
        
        setPathToValue: (path, field, value) => { 
            let current = inProgressStory.nodes.filter(node => node.id === focusedNode)[0];
            path.forEach(key => current = current[key]);
            current[field] = value;
            setStory({ ...inProgressStory });
        }
    };
    
    return (
        <EditorContext.Provider value={toProvide}>
            {children}
        </EditorContext.Provider>
    );
};

export default EditorContext;