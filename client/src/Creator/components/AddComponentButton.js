import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab, Menu, MenuItem } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

import { componentBuilders } from '../stores/template';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    position: 'relative',
    top: '-5px',
  },
}));

function AddComponentButton({ onClick }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleItemClick = componentName => {
    onClick(componentName);
    handleClose();
  };

  return (
    <div className={classes.root}>
      <Fab size="medium" onClick={handleClick}>
        <AddIcon />
      </Fab>
      <Menu
        id="component-selection-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {Object.keys(componentBuilders).map(componentName => (
          <MenuItem key={componentName} onClick={() => handleItemClick(componentName)}>
            {componentName}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default AddComponentButton;
