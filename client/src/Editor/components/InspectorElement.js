import React, { Suspense } from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  InspectorPaper: {
    padding: 10,
    paddingBottom: 20,
  },

  InspectorElement: {
    margin: 10,
    marginLeft: 15,
    boxSizing: 'content-box',
  },

  FormControl: {
    minWidth: 150,
  },

  colorButton: {
    margin: 10,
    marginLeft: 15,
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

const InspectorElement = props => {
  const { fieldsToSet, pathToVal } = props;
  const classes = useStyles();

  return fieldsToSet.map((item, index) => {
    const InspectorFragment = React.lazy(() => import(`./EditorFragments/${item.fragment}`));

    return (
      <div key={`${item.fragment}${index}`}>
        <Suspense fallback={<Typography variant="subtitle2">{`Loading ${item.fragment}`}</Typography>}>
          <InspectorFragment path={pathToVal} classNames={classes} />
        </Suspense>
      </div>
    );
  });
};

export default InspectorElement;
