import React from 'react';

export const EditorContext = React.createContext();

export const EditorContextProvider = EditorContext.Provider;

/*
An initial object with default field that the user will have to overwrite,
first node of the graph (maybe more to give a hint), some default field such as
title, brief description and so on
*/

export const DefaultContext = { 
    title: "Default title"
};