import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Close as CloseIcon, Done as DoneIcon, Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';

import shortid from 'shortid';
import * as Settings from '../Settings';
import { StylesContext, actions } from '../context/style';
import StyleIdDialog from './StyleIdDialog';

const useStyles = makeStyles({
  componentName: {
    display: 'inline-block',
    marginRight: '30px',
  },
});

function SettingsItem({ component, onUpdateComponent, onRemoveComponent }) {
  const classes = useStyles();

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // const [newStyle, setNewStyle] = useState('');
  // const [newName, setNewName] = useState('');
  // const [dialogOpen, setDialogOpen] = useState(false);
  // const [lastStyle, setLastStyle] = useState('');
  const [{ styleIds }, dispatch] = useContext(StylesContext);
  // const { styleNames, addStyle, updateStyleName, removeStyle } = useStyle(componentName, styleName);

  const { id: componentId, name: componentName, styleId, ...rest } = component;

  const handleStyleIdChanged = event => {
    onUpdateComponent(componentId, { styleId: event.target.value });
  };

  const handleDelete = () => onRemoveComponent(componentId);

  const handleEdit = () => {
    setIsEditing(true);
    const newStyleId = `${componentName}-${shortid.generate()}`;
    onUpdateComponent(componentId, { styleId: newStyleId });
    dispatch({ type: actions.ADD_STYLE, payload: { componentName, styleId: newStyleId, baseStyleId: styleId } });
  };

  const handleSave = () => {
    setIsEditing(false);
    setIsSaving(true);
  };

  const handleDiscard = () => {
    setIsEditing(false);
    onUpdateComponent(componentId, { styleId: `Default${componentName}` });
    dispatch({ type: actions.REMOVE_STYLE, payload: { componentName, styleId } });
  };

  const handleComplete = newId => {
    setIsSaving(false);
    onUpdateComponent(componentId, { styleId: newId });
    dispatch({ type: actions.RENAME_STYLE, payload: { componentName, oldId: styleId, newId } });
  };

  // find correct component
  const SettingsComponent = Settings[`${componentName}Settings`];

  return (
    <>
      <ListItem>
        <ListItemText
          primary={
            <>
              <Typography className={classes.componentName}>{componentName}</Typography>
              <TextField
                disabled={isEditing}
                select
                label="Select"
                value={styleId}
                onChange={handleStyleIdChanged}
                variant="outlined"
                size="small"
              >
                {styleIds[componentName].map(id => (
                  <MenuItem key={id} value={id}>
                    {id}
                  </MenuItem>
                ))}
              </TextField>
            </>
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete-component" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
          {isEditing ? (
            <>
              <IconButton edge="end" aria-label="discard" onClick={handleDiscard}>
                <CloseIcon />
              </IconButton>
              <IconButton edge="end" aria-label="save" onClick={handleSave}>
                <DoneIcon />
              </IconButton>
            </>
          ) : (
            <IconButton edge="end" aria-label="edit" onClick={handleEdit}>
              <EditIcon />
            </IconButton>
          )}
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={isEditing} timeout="auto" unmountOnExit>
        <SettingsComponent styleId={styleId} />
      </Collapse>
      <StyleIdDialog open={isSaving} initialId={styleId} onComplete={handleComplete} />
    </>
  );
}

export default SettingsItem;
