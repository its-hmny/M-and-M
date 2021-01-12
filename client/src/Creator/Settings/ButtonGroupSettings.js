import React, { useMemo, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Add as AddIcon } from '@material-ui/icons';
import useTemplateStore from '../stores/template';
import SettingsItem from '../components/SettingsItem';
import { DraggableList } from '../components/DraggableList';

import useStylesStore from '../stores/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  buttonList: {
    padding: `0 ${theme.spacing(2)}px ${theme.spacing(1)}px`,
  },
}));

function ButtonGroupSettings({ componentId, styleId }) {
  const classes = useStyles();

  // buttonGroup styles
  const { styles, updateStyle } = useStylesStore(state => ({
    // buttonGroup has no styles for now, but leaving it in case someone wants to edit
    // flow, for example, or the background color of the buttonGroup. very simple!
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));

  // contained buttons
  const [currentlyEditing, setCurrentlyEditing] = useState(0);
  const getButtons = state =>
    state.components.find(component => component.id === componentId).children;
  const { buttons, addComponent } = useTemplateStore(state => ({
    buttons: getButtons(state),
    addComponent: state.addComponent,
  }));

  const list = useMemo(
    () =>
      buttons.map((button, index) => (
        <SettingsItem
          key={button.id}
          id={button.id}
          dragIndex={index}
          component={button}
          onEditing={isEditing =>
            setCurrentlyEditing(currentlyEditing =>
              isEditing ? currentlyEditing + 1 : currentlyEditing - 1
            )
          }
        />
      )),
    [buttons]
  );

  return (
    <div>
      <div className={classes.buttonList}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => addComponent('Button', componentId)}
        >
          Add button
        </Button>
        <DraggableList
          id={componentId}
          list={list || []}
          disabled={currentlyEditing > 0}
        />
      </div>
    </div>
  );
}

export default ButtonGroupSettings;
