import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 15,
    marginBottom: 10,
  },
}));

const DividerFragment = () => {
  const { root } = useStyles();
  return <Divider variant="middle" className={root} />;
};

export default DividerFragment;
