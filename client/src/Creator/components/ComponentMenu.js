import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import shortid from 'shortid';

function getComponentList() {
  return ['Elements/Button', 'Elements/Text'];
}

function ComponentMenu({ onAddComponent, onSave }) {
  const possibleComponents = getComponentList();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleSelection = (event, component) => {
    onAddComponent(component);
    handleClose();
  };

  return (
    <div>
      <Button
        aria-controls="component-selection-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AddIcon />
      </Button>
      <Menu
        id="component-selection-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {possibleComponents.map(component => {
          const key = shortid.generate();
          return (
            <MenuItem
              key={`comp-select-item-${key}`}
              onClick={event => handleSelection(event, component)}
            >
              {component}
            </MenuItem>
          );
        })}
      </Menu>
      <Button
        aria-controls="component-selection-menu"
        aria-haspopup="true"
        onClick={onSave}
      >
        Save
      </Button>
    </div>
  );
}

export default ComponentMenu;
