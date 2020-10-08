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
import {
  Close as CloseIcon,
  Done as DoneIcon,
  Delete as DeleteIcon,
  DragHandle as DragHandleIcon,
  Edit as EditIcon,
} from '@material-ui/icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import shortid from 'shortid';
import * as Settings from '../Settings';
import useStylesStore from '../stores/styles';
import useTemplateStore from '../stores/template';
import StyleIdDialog from './StyleIdDialog';

const useStyles = makeStyles({
  componentName: {
    display: 'inline-block',
    marginRight: '30px',
  },
  draggableItem: {
    border: '1px solid black',
    borderRadius: '20px',
  },
  isDragging: {
    backgroundColor: '#474741',
  },
});

function getStyle(style, isDragging) {
  if (style.transform) {
    const axisLockY = 'translate(0px' + style.transform.slice(style.transform.indexOf(','), style.transform.length);
    return {
      ...style,
      transform: axisLockY,
    };
  }
  return style;
}

const SettingsItem = ({ dragIndex, component, onEditing, isDragDisabled }) => {
  const classes = useStyles();

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { changeStyleId, removeComponent } = useTemplateStore(state => ({
    changeStyleId: state.changeStyleId,
    removeComponent: state.removeComponent,
  }));
  const { styleIds, addStyle, removeStyle, renameStyle } = useStylesStore(state => ({
    styleIds: state.styleIds,
    addStyle: state.addStyle,
    removeStyle: state.removeStyle,
    renameStyle: state.renameStyle,
  }));

  const { id: componentId, name: componentName, styleId, ...rest } = component;

  const handleStyleIdChanged = event => {
    changeStyleId({ componentId, newStyleId: event.target.value });
  };

  const handleDelete = () => removeComponent(componentId);

  const handleEdit = () => {
    onEditing(true);
    setIsEditing(true);
    const newStyleId = `${componentName}-${shortid.generate()}`;
    changeStyleId({ componentId, newStyleId });
    addStyle({ componentName, styleId: newStyleId, baseStyleId: styleId });
  };

  const handleSave = () => {
    setIsEditing(false);
    onEditing(false);
    setIsSaving(true);
  };

  const handleDiscard = () => {
    setIsEditing(false);
    onEditing(false);
    changeStyleId({ componentId, newStyleId: `Default${componentName}` });
    removeStyle({ componentName, styleId });
  };

  const handleComplete = newStyleId => {
    setIsSaving(false);
    changeStyleId({ componentId, newStyleId });
    renameStyle({ componentName, oldId: styleId, newId: newStyleId });
  };

  // find correct component
  const SettingsComponent = Settings[`${componentName}Settings`];

  return (
    <Draggable key={componentId} draggableId={componentId} index={dragIndex}>
      {(provided, snapshot) => (
        <>
          <ListItem
            className={classes.draggableItem}
            classes={{
              root: snapshot.isDragging ? classes.isDragging : null,
            }}
            ref={provided.innerRef}
            ContainerProps={{
              ...provided.draggableProps,
              style: getStyle(provided.draggableProps.style, snapshot.isDragging),
            }}
          >
            <ListItemText
              primary={
                <>
                  <IconButton
                    edge="end"
                    aria-label="delete-component"
                    disabled={isDragDisabled}
                    {...provided.dragHandleProps}
                  >
                    <DragHandleIcon />
                  </IconButton>
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
            <SettingsComponent componentId={componentId} styleId={styleId} />
          </Collapse>
          <StyleIdDialog open={isSaving} initialId={styleId} onComplete={handleComplete} />
        </>
      )}
    </Draggable>
  );
};

export default SettingsItem;
