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
} from '@material-ui/core';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';
import ComponentMenu from './ComponentMenu';
import SettingsComponents from '../../common/StyleSettings';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));

function SettingsItem({ component, onRemove }) {
  const { component: componentName, id: componentId, ...rest } = component;
  const [open, setOpen] = useState(true);
  const SettingsComponent = SettingsComponents[componentName];

  return (
    <>
      <ListItem>
        <ListItemText primary={componentName} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => onRemove(componentId)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => setOpen(!open)}
          >
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <SettingsComponent componentId={componentId} {...rest} />
      </Collapse>
    </>
  );
}

const ViewSettings = ({ view }) => {
  return (
    <div>
      <Typography variant="subtitle1" color="primary">
        View Settings
      </Typography>

      <List>
        {view.children.map(child => (
          <SettingsItem key={child.id} component={child} />
        ))}
      </List>
    </div>
  );
};

function Inspector({ view, styles, onAddComponent, onRemoveComponent }) {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Typography variant="h6" color="primary">
          Inspector
        </Typography>

        <ViewSettings view={view} />

        <ComponentMenu onAddComponent={onAddComponent} />
      </div>
    </Container>
  );
}

export default Inspector;
