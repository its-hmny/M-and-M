import React from 'react';
import { TextField, makeStyles, Divider } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 15,
    marginBottom: 10,
  },
}));

const DividerFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const { root } = useStyles();

  return <Divider variant="middle" className={root} />;
};

export default DividerFragment;
