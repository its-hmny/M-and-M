function _extends() {
    _extends =
        Object.assign ||
        function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }

            return target;
        };

    return _extends.apply(this, arguments);
}

import React, { useCallback, useContext } from '../../../web_modules/react.js';
import {
    Droppable,
    Draggable,
} from '../../../web_modules/react-beautiful-dnd.js';
import { List } from '../../../web_modules/@material-ui/core.js';

const DragListContext = React.createContext();

export const useDragList = () => {
    const value = useContext(DragListContext);

    if (value == null) {
        throw new Error('useDragList must be used inside a DraggableList');
    }

    return value;
}; // List contiene i componenti React da trasformare

export const DraggableList = ({ id, list, disabled }) => {
    const renderList = useCallback(
        (components) =>
            components.map((component, index) => {
                const id = `draggable-${component.props.id}`;

                return React.createElement(
                    Draggable,
                    {
                        key: id,
                        draggableId: id,
                        index: index,
                        isDragDisabled: disabled,
                    },
                    (provided, snapshot) =>
                        React.createElement(
                            DragListContext.Provider,
                            {
                                value: {
                                    provided,
                                    snapshot,
                                },
                            },
                            component,
                        ),
                );
            }),
        [disabled],
    );

    return React.createElement(
        Droppable,
        {
            key: id,
            droppableId: id,
            type: id,
        },
        (provided, snapshot) => {
            return React.createElement(
                List,
                _extends(
                    {
                        ref: provided.innerRef,
                    },
                    provided.droppableProps,
                ),
                renderList(list),
                provided.placeholder,
            );
        },
    );
};
