import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import * as Elements from './Elements';

const useStyles = makeStyles({
  smartphoneFrame: {
    position: 'relative',
    border: '2vh black solid',
    borderTopWidth: '5vh',
    borderBottomWidth: '6vh',
    borderRadius: '36px',
    width: 'calc(70vh * 0.5)',
    height: '70vh',
    zIndex: 0,
    background: 'white',
  },
  smartphoneContent: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      width: 0,
    },
  },
  smartphoneBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -2,
    background: 'white',
  },
});

const buildElements = (components, styles) =>
  components.map(component => {
    const { id, name, style, styleId, children, ...props } = component;
    const Element = Elements[name];

    return (
      <Element
        key={id}
        style={style || styles[styleId]}
        children={children && buildElements(children, styles)}
        {...props}
      />
    );
  });

const Preview = ({ components, styles = {} }) => {
  const classes = useStyles();
  return (
    <div className={classes.smartphoneFrame}>
      <div className={classes.smartphoneBg}></div>
      <div className={classes.smartphoneContent}>
        {components ? buildElements(components, styles) : []}
      </div>
    </div>
  );
};

export default Preview;
