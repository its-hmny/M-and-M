import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Collapse,
  Fab,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';
import shortid from 'shortid';

const options = {
  fontFamily: ['serif', 'sans-serif'],
  fontWeight: ['bold', 'normal'],
  backgroundColor: ['white', 'black', 'pink', 'red', 'violet', 'blue'],
  color: ['white', 'black', 'pink', 'red', 'violet', 'blue'],
};

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));

function ComponentItem({ name, id, properties, onRemove }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <>
      <ListItem>
        <ListItemText primary={name} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => onRemove(id)}>
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
        <List>
          {Object.keys(properties).map(property => {
            const labelId = `${name}-${property}-${shortid.generate()}`;
            console.log(labelId);
            return (
              <ListItem className={classes.nested}>
                <FormControl className={classes.formControl}>
                  <InputLabel id={labelId}>{property}</InputLabel>
                  <Select labelId={labelId} value={properties[property]}>
                    {options[property].map(option => (
                      <MenuItem value={option}>{option}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}

function Inspector({ components, onAddComponent, onRemoveComponent }) {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Typography variant="h6" color="primary">
          Inspector
        </Typography>

        <List>
          {components.map(({ name, id, properties }) => (
            <ComponentItem
              name={name}
              id={id}
              properties={properties}
              onRemove={onRemoveComponent} />
          ))}
        </List>

        <Fab color="primary" onClick={onAddComponent}>
          <AddIcon />
        </Fab>
      </div>
    </Container>
  );
}

export default Inspector;
