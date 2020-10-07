import React, { Suspense, useMemo } from 'react';
import { Typography, makeStyles } from '@material-ui/core';

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
        const EditorFragment = React.lazy(() => import(`./${item.fragment}`));
        return (
          <EditorFragment
            key={`${item.fragment}${index}`}
            path={pathToVal}
            classNames={classes}
            fragmentSpecificProps={item.props}
          />
        );
      }),
    [fieldsToSet]
  );

  return (
    <Suspense fallback={<Typography variant="subtitle2">{`Loading components`}</Typography>}>{fragmentList}</Suspense>
  );
};

export default DynamicLoadFragments;
