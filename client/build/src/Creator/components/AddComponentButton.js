import React, { useState } from '../../../web_modules/react.js';
import { makeStyles } from '../../../web_modules/@material-ui/core/styles.js';
import { Fab, Menu, MenuItem } from '../../../web_modules/@material-ui/core.js';
import { Add as AddIcon } from '../../../web_modules/@material-ui/icons.js';
import { componentBuilders } from '../stores/template.js';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    flexShrink: 0,
    paddingBottom: theme.spacing(2),
  },
}));

function AddComponentButton({ onClick }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleItemClick = (componentName) => {
    onClick(componentName);
    handleClose();
  };

  return React.createElement(
    'div',
    {
      className: classes.root,
    },
    React.createElement(
      Fab,
      {
        size: 'medium',
        onClick: handleClick,
      },
      React.createElement(AddIcon, null),
    ),
    React.createElement(
      Menu,
      {
        id: 'component-selection-menu',
        anchorEl: anchorEl,
        keepMounted: true,
        open: Boolean(anchorEl),
        onClose: handleClose,
        getContentAnchorEl: null,
        anchorOrigin: {
          vertical: 'center',
          horizontal: 'center',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      },
      Object.keys(componentBuilders).map((componentName) =>
        React.createElement(
          MenuItem,
          {
            key: componentName,
            onClick: () => handleItemClick(componentName),
          },
          componentName,
        ),
      ),
    ),
  );
}

export default AddComponentButton;
