import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core';

import ButtonFragment from './ButtonFragment';
import ColorPickerFragment from './ColorPickerFragment';
import FilePickerFragment from './FilePickerFragment';
import SelectFragment from './SelectFragment';
import TextFieldFragment from './TextFieldFragment';
import CheckboxFragment from './CheckboxFragment';
import AnswerFragment from './AnswerFragment';
import RadioFragment from './RadioFragment';
import DividerFragment from './DividerFragment';
const fragmentsComponents = {
  ButtonFragment,
  ColorPickerFragment,
  FilePickerFragment,
  SelectFragment,
  TextFieldFragment,
  CheckboxFragment,
  AnswerFragment,
  RadioFragment,
  DividerFragment,
};

const useStyles = makeStyles({
  InspectorPaper: {
    padding: 10,
    paddingBottom: 20,
  },

  InspectorElement: {
    marginTop: 5,
    marginLeft: 15,
    boxSizing: 'content-box',
  },

  FormControl: {
    minWidth: 150,
  },

  colorButton: {
    margin: 10,
    marginLeft: 30,
    width: 60,
    height: 30,
    border: 'none',
    background: 'none',
  },

  colorLabel: {
    margin: 10,
    marginLeft: 15,
    fontSize: 18,
  },
});

/* Component loading dynamically EditorFragments based on data passed through 
   fieldsToSet(data comes from ComponentProperties.json).  */
const DynamicLoadFragments = props => {
  const { fieldsToSet, pathToVal } = props;

  const classes = useStyles();

  const fragmentList = useMemo(
    () =>
      fieldsToSet.map((item, index) => {
        const EditorFragment = fragmentsComponents[item.fragment];
        return (
          <EditorFragment
            key={`${item.fragment}${index}`}
            path={pathToVal}
            classNames={classes}
            fragmentSpecificProps={item.props}
          />
        );
      }),
    [fieldsToSet, classes, pathToVal]
  );

  return <>{fragmentList}</>;
};

export default DynamicLoadFragments;
