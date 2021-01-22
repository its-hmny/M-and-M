import React from '../../../../web_modules/react.js';
import {
  makeStyles,
  Divider,
} from '../../../../web_modules/@material-ui/core.js';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 15,
    marginBottom: 10,
  },
}));

const DividerFragment = () => {
  const { root } = useStyles();

  return React.createElement(Divider, {
    variant: 'middle',
    className: root,
  });
};

export default DividerFragment;
