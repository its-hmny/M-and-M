import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';

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
  return (
    <Slide
      className={`${classes.common} ${classes[position]}`}
      in={open}
      direction={direction}
      style={style}
      onExited={onClose}
    >
      <div>{children}</div>
    </Slide>
  );
};

export default Panel;
