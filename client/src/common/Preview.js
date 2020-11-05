import React, { useState, useEffect } from 'react';
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
  },
});

const Preview = ({ components, styles }) => {
  const classes = useStyles();
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const buildElements = components =>
      components.map(component => {
        const { id, name, styleId, children, ...props } = component;
        const Element = Elements[name];
        return (
          <Element
            key={id}
            style={styles[styleId]}
            children={children && buildElements(children)}
            {...props}
          />
        );
      });

    // A guard against possible, very difficult to debug, disaster
    if (components) {
      setElements(buildElements(components));
    }
  }, [components, styles]);

  return <div className={classes.smartphoneFrame}>{elements}</div>;
};

export default Preview;
