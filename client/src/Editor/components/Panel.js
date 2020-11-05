import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles({
  common: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 100,
  },
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
});

const Panel = ({ open, position, children }) => {
  const classes = useStyles();
  const direction = position === 'left' ? 'right' : 'left';
  return (
    <Slide
      className={`${classes.common} ${classes[position]}`}
      in={open}
      direction={direction}
    >
      <div>{children}</div>
    </Slide>
  );
};

export default Panel;
