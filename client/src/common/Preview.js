import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import * as Elements from './Elements';

const useStyles = makeStyles({
  smartphoneFrame: {
    position: 'relative',
    margin: 'auto',
    border: '2vh black solid',
    borderTopWidth: '5vh',
    borderBottomWidth: '6vh',
    borderRadius: '36px',
    width: 'calc(70vh * 0.5)',
    height: '70vh',
    background: 'white',
    overflowY: 'auto',
    zIndex: -2,
  },
});

const buildElements = (components, styles) =>
  components.map(component => {
    styles = styles || {};
    const { id, name, styleId, children, ...props } = component;
    const Element = Elements[name];

    return (
      <Element
        key={id}
        style={styles[styleId]}
        children={children && buildElements(children, styles)}
        {...props}
      />
    );
  });

const Preview = ({ components, styles }) => {
  const classes = useStyles();
  return (
    <div className={classes.smartphoneFrame}>
      {components ? buildElements(components, styles) : []}
    </div>
  );
};

export default Preview;
