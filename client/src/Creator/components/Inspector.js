import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

import AddComponentButton from './AddComponentButton';
import SettingsItem from './SettingsItem';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));

function Inspector({ components, onAddComponent, onRemoveComponent, onUpdateComponent, onSave }) {
  const classes = useStyles();

  const settings = components.map(component => (
    <SettingsItem
      key={component.id}
      component={component}
      onUpdateComponent={onUpdateComponent}
      onRemoveComponent={onRemoveComponent}
    />
  ));

  return (
    <Container>
      <div className={classes.root}>
        <Typography variant="h6" color="primary">
          Inspector
        </Typography>

        <List>{settings}</List>

        <AddComponentButton onClick={onAddComponent} />
      </div>
    </Container>
  );
}

export default Inspector;
