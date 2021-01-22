import React, { useState } from 'react';
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

import shortid from 'shortid';
import * as Settings from '../Settings';
import useStylesStore from '../stores/styles';
import useTemplateStore from '../stores/template';
import { useDragList } from '../components/DraggableList';
import StyleIdDialog from './StyleIdDialog';

const useStyles = makeStyles(theme => ({
  iconSmallHover: {
    fontSize: theme.typography.pxToRem(10),
    '&:hover': {},
  },
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
  collapse: {
    padding: `${theme.spacing(5)}px ${theme.spacing(2)}px`,
  },
  listItem: {
    boxShadow: props => theme.shadows[props.isDragging ? 4 : 1],
    backgroundColor: theme.palette.background.paper,
  },
  listItemContainer: {
    borderBottom: `${theme.spacing(0.25)}px solid transparent`,
    borderTop: `${theme.spacing(0.25)}px solid transparent`,
    // while editing, disable all pointer events on items different than the one being edited
    pointerEvents: props => (props.isDragDisabled ? 'none' : 'initial'),
    userSelect: props => (props.isDragDisabled ? 'none' : 'initial'),
    opacity: props => (props.isDragDisabled ? 0.5 : 1),
  },
}));

function getStyle(style, isDragging) {
  if (isDragging && style.transform) {
    const axisLockY =
      'translate(0px' +
      style.transform.slice(style.transform.indexOf(','), style.transform.length);
    return {
      ...style,
      transform: axisLockY,
    };
  }
  return style;
}

const SettingsItem = ({ dragIndex, component, onEditing, subSettings }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { provided, snapshot, isDragDisabled } = useDragList();
  const classes = useStyles({
    isDragging: snapshot.isDragging,
    isDragDisabled: !isEditing && isDragDisabled,
  });
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

  const { id: componentId, name: componentName, styleId } = component;

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
    <>
      <ListItem
        ref={provided.innerRef}
        className={classes.listItem}
        ContainerProps={{
          ...provided.draggableProps,
          className: classes.listItemContainer,
          style: getStyle(provided.draggableProps.style, snapshot.isDragging),
        }}
      >
        <ListItemText
          primary={
            <>
              <IconButton
                className={classes.iconSmallHover}
                edge="start"
                aria-label="move-component"
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
      <Collapse className={classes.collapse} in={isEditing} timeout="auto" unmountOnExit>
        <SettingsComponent componentId={componentId} styleId={styleId} />
      </Collapse>
      <StyleIdDialog
        open={isSaving}
        initialId={styleId}
        styleIds={styleIds}
        onComplete={handleComplete}
      />
    </>
  );
};

export default SettingsItem;
