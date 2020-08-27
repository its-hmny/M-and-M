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
  Popper,
  Button,
  ClickAwayListener,
  MenuList,
  Grow,
  Paper,
} from '@material-ui/core';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';
import shortid from 'shortid';
import TextSettings from '../../common/components/setting_components/TextSettings';

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
          <ListItem className={classes.nested}>
            <TextSettings id={id}/>
            </ListItem> 
        </List>
      </Collapse>
    </>
  );
}

function Inspector({ components, onAddComponent, onRemoveComponent }) {
  const classes = useStyles();
  // maybe i should use clearer names
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(value => !value);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  // straight up copied from mUI wiki... genius!
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);


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

        <Fab color="primary" onClick={handleToggle}>
          <AddIcon ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle} />
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper> {/* actually smart! handles background and keeps ui consistent */}
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Fab>
      </div>
    </Container >
  );
}
/*onKeyDown={handleListKeyDown}*/
export default Inspector;
