import React from '../../../web_modules/react.js';
import { makeStyles } from '../../../web_modules/@material-ui/core/styles.js';
import Slide from '../../../web_modules/@material-ui/core/Slide.js';

const useStyles = makeStyles({
  common: {
    position: 'absolute',
    zIndex: 100,
    bottom: 0,
  },
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
});

const Panel = ({ open, position, style, onClose, children }) => {
  const classes = useStyles();

  const direction = position === 'left' ? 'right' : 'left';

  return React.createElement(
    Slide,
    {
      className: `${classes.common} ${classes[position]}`,
      in: open,
      direction: direction,
      style: style,
      onExited: onClose,
    },
    React.createElement('div', null, children)
  );
};

export default Panel;
