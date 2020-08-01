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
    const [currentStory, setStory] = useState(userStory || defaultStory);
    const [currentActivityID, setCurrentActivity] = useState(undefined);

    const toProvide = {
        story: currentStory,
        workingActivity: currentActivityID,
        saveStory: (updatedStory) => setStory(updatedStory),
        setWorkingActivity: (activityID) => setCurrentActivity(activityID)
    };
    
    return (
        <EditorContext.Provider value={toProvide}>
            {children}
        </EditorContext.Provider>
    );
};

export default EditorContext;