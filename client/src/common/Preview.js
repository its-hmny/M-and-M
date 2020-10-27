import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import * as Elements from './Elements';

function Preview({ components, styles }) {
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

    setElements(buildElements(components));
  }, [components, styles]);

  return (
    <>
      <Typography variant="h6" color="secondary">
        Preview
      </Typography>
      <div>{elements}</div>
    </>
  );
}

export default Preview;
