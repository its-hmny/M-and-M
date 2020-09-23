import React, { useState, useEffect, useRef, useContext } from 'react';
import shortid from 'shortid';

import * as Elements from './Elements';
import View from './View';
import { StylesContext } from '../Creator/style';

function Preview({ components }) {
  const [{ styles }] = useContext(StylesContext);

  const elements = components.map(component => {
    const { id, name, styleId, ...props } = component;
    const Element = Elements[name];
    return <Element key={id} style={styles[styleId]} {...props} />;
  });

  return <View>{elements}</View>;
}

export default Preview;
