import React, { useContext, useState } from 'react';
import List from '@material-ui/core/List';
import useTemplateStore from '../stores/template';
import ButtonSettings from './ButtonSettings';
import SettingsItem from '../components/SettingsItem';
import { Droppable } from 'react-beautiful-dnd';

function ButtonGroupSettings({ componentId, styleId }) {
  const [isDragDisabled, setIsDragDisabled] = useState(false);
  const getButtons = state => state.components.find(component => component.id === componentId).children;
  const { buttons, addComponents } = useTemplateStore(state => ({
    buttons: getButtons(state),
    addComponents: state.addComponents,
  }));

  return (
    <div>
      <Droppable droppableId="button-group-settings-list">
        {provided => (
          <List ref={provided.innerRef} {...provided.droppableProps}>
            {buttons.map((button, index) => (
              <SettingsItem
                dragIndex={index}
                component={button}
                onEditing={isEditing => setIsDragDisabled(isEditing)}
                isDragDisabled={isDragDisabled}
              />
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </div>
  );
}

export default ButtonGroupSettings;
