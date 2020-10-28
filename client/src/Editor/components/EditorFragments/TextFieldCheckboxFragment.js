import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';
import TextFieldFragment from './TextFieldFragment';
import CheckboxFragment from './CheckboxFragment';

const useStyles = makeStyles(theme => ({
  root: {
    width: '25ch',
  },
  inputRoot: {
    paddingRight: theme.spacing(2),
  },
}));

const TextFieldCheckboxFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const { root, inputRoot } = useStyles();
  const { pathAlternative, valToChange, label } = fragmentSpecificProps;
  const { getFromPath, setPathToValue } = useEditor();
  //Additional field to modify objects or array 
  //const path = path.concat(pathAlternative || []);
  //const textFieldValue = getFromPath(textFieldPath || [])[valToChange];
  
  return (
        <div>
            <TextFieldFragment 
                classNames={classNames}
                path={path}
                fragmentSpecificProps={fragmentSpecificProps}
            />
            <CheckboxFragment
                classNames={classNames}
                path={path}
                fragmentSpecificProps={fragmentSpecificProps}
            />
        </div>
    
    
  );
};

export default TextFieldCheckboxFragment;
