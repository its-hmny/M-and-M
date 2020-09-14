import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Collapse,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import {
  Close as CloseIcon,
  Done as DoneIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  SettingsOutlined,
} from '@material-ui/icons';
import ComponentMenu from './ComponentMenu';
import SettingsComponents from '../StyleSettings';
import { useStyle } from '../context/style';
import shortid from 'shortid';
import DialogStyleName from './DialogStyleName';

const useInspectorStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));

const useSettingStyles = makeStyles(() => ({
  componentName: {
    display: 'inline-block',
    marginRight: '30px',
  },
}));

const defaultStyles = {
  'Elements/Text': 'DefaultText',
  'Elements/Button': 'DefaultButton',
};

function SettingsItem({ component, onRemoveComponent, updateComponent }) {
  const classes = useSettingStyles();
  // open refers to Collapse state
  const [open, setOpen] = useState(false);
  const [newStyle, setNewStyle] = useState('');
  const [newName, setNewName] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [lastStyle, setLastStyle] = useState('');
  // const tempName = shortid.generate();

  const {
    component: componentName,
    id: componentId,
    styleName,
    ...rest
  } = component;

  const { styleNames, addStyle, updateStyleName, removeStyle } = useStyle(
    componentName,
    styleName
  );

  const onSelectStyle = styleName => {
    updateComponent(componentId, { styleName: styleName });
  };

  const editStyle = () => {
    if (newStyle === '') {
      const tempName = shortid.generate();
      addStyle(tempName);
      setNewStyle(tempName);
      updateComponent(componentId, { styleName: tempName });
    }
    console.log(`setting last style: ${styleName}`);
    setLastStyle(styleName);
    setOpen(true);
  };

  const saveChanges = () => {
    if (newName !== '') {
      updateStyleName(newStyle, newName);
      updateComponent(componentId, { styleName: newName });
      setOpen(false);
      setNewName('');
      setNewStyle('');
    }
  };

  const discardChanges = () => {
    removeStyle(newStyle);
    updateComponent(componentId, { styleName: lastStyle });
    setNewStyle('');
    setOpen(false);
  };

  // find correct component
  const SettingsComponent = SettingsComponents[componentName];
  return (
    <>
      <ListItem>
        <ListItemText
          primary={
            <>
              <Typography variant="subtitle2" className={classes.componentName}>
                {componentName}
              </Typography>
              <TextField
                disabled={open}
                select
                label="Select"
                value={styleName}
                onChange={event => onSelectStyle(event.target.value)}
                variant="outlined"
                size="small"
              >
                {styleNames.map(style => (
                  <MenuItem key={style} value={style}>
                    {style}
                  </MenuItem>
                ))}
              </TextField>
            </>
          }
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete-component"
            onClick={() => onRemoveComponent(componentId)}
          >
            <DeleteIcon />
          </IconButton>
          {open ? (
            <>
              <IconButton
                edge="end"
                aria-label="discard-changes"
                onClick={discardChanges}
              >
                <CloseIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="save-changes"
                onClick={() => setDialogOpen(true)}
              >
                <DoneIcon />
              </IconButton>
            </>
          ) : (
            <IconButton edge="end" aria-label="edit-style" onClick={editStyle}>
              <EditIcon />
            </IconButton>
          )}
        </ListItemSecondaryAction>
      </ListItem>
      <DialogStyleName
        open={dialogOpen}
        onCancel={() => setDialogOpen(false)}
        value={newName}
        onChange={newValue => setNewName(newValue)}
        onSave={() => {
          setDialogOpen(false);
          saveChanges();
        }}
        onExit={() => setOpen(false)}
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <SettingsComponent
          componentId={componentId}
          styleName={styleName}
          {...rest}
        />
      </Collapse>
    </>
  );
}

const ViewSettings = ({ view, updateComponent, onRemoveComponent }) => {
  return (
    <div>
      <Typography variant="subtitle1" color="primary">
        View Settings
      </Typography>

      <List>
        {view.children.map(child => (
          <SettingsItem
            key={child.id}
            component={child}
            updateComponent={updateComponent}
            onRemoveComponent={onRemoveComponent}
          />
        ))}
      </List>
    </div>
  );
};

function Inspector({
  view,
  styles,
  onAddComponent,
  onRemoveComponent,
  updateComponent,
  onSave,
}) {
  const classes = useInspectorStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Typography variant="h6" color="primary">
          Inspector
        </Typography>

        <ViewSettings
          view={view}
          updateComponent={updateComponent}
          onRemoveComponent={onRemoveComponent}
        />

        <ComponentMenu onAddComponent={onAddComponent} onSave={onSave} />
      </div>
    </Container>
  );
}

export default Inspector;
