import React, {
    useState,
    useCallback,
    useMemo,
} from '../../../web_modules/react.js';
import {
    Container,
    makeStyles,
} from '../../../web_modules/@material-ui/core.js';
import { DragDropContext } from '../../../web_modules/react-beautiful-dnd.js';
import { DraggableList } from './DraggableList.js';
import AddComponentButton from './AddComponentButton.js';
import SettingsItem from './SettingsItem.js';
import useTemplateStore from '../stores/template.js';

const useStyles = makeStyles((theme) => ({
    root: {},
}));

function Inspector() {
    const classes = useStyles();

    const [currentlyEditing, setCurrentlyEditing] = useState(0);

    const { components, addComponent, reorderComponents } = useTemplateStore(
        (state) => ({
            components: state.components,
            addComponent: state.addComponent,
            reorderComponents: state.reorderComponents,
        }),
    );

    const inspectorDragId = 'inspector-top-list';

    const settings = useMemo(
        () =>
            components.map((objComponent, index) =>
                React.createElement(SettingsItem, {
                    key: objComponent.id,
                    id: objComponent.id,
                    dragIndex: index,
                    component: objComponent,
                    onEditing: (isEditing) =>
                        setCurrentlyEditing((currentlyEditing) =>
                            isEditing
                                ? currentlyEditing + 1
                                : currentlyEditing - 1,
                        ),
                }),
            ),
        [components],
    );

    const handleDragEnd = useCallback(
        ({ source, destination, type: dragListId }) => {
            // dropped outside the list
            if (destination) {
                reorderComponents(
                    source.index,
                    destination.index,
                    dragListId === inspectorDragId ? null : dragListId,
                );
            }
        },
        [reorderComponents],
    );

    return React.createElement(
        Container,
        {
            className: classes.root,
        },
        React.createElement(
            DragDropContext,
            {
                onDragEnd: handleDragEnd,
            },
            React.createElement(DraggableList, {
                id: inspectorDragId,
                list: settings,
                disabled: currentlyEditing > 0,
            }),
        ),
        React.createElement(AddComponentButton, {
            onClick: addComponent,
        }),
    );
}

export default Inspector;
