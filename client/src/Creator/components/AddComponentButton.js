import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

function getComponentList() {
  return ['Button', 'Text'];
}

function AddComponentButton({ onClick }) {
  const possibleComponents = getComponentList();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => setAnchorEl(event.target);
  const handleClose = () => setAnchorEl(null);
  const handleItemClick = componentName => {
    onClick(componentName);
    handleClose();
  };

  return (
    <div>
      <Button aria-controls="component-selection-menu" aria-haspopup="true" onClick={handleClick}>
        <AddIcon />
      </Button>
      <Menu
        id="component-selection-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {possibleComponents.map(componentName => (
          <MenuItem key={componentName} onClick={() => handleItemClick(componentName)}>
            {componentName}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default AddComponentButton;
