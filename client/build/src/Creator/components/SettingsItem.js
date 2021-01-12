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

import React, { useState } from '../../../web_modules/react.js';
import { makeStyles } from '../../../web_modules/@material-ui/core/styles.js';
import Collapse from '../../../web_modules/@material-ui/core/Collapse.js';
import IconButton from '../../../web_modules/@material-ui/core/IconButton.js';
import Typography from '../../../web_modules/@material-ui/core/Typography.js';
import ListItem from '../../../web_modules/@material-ui/core/ListItem.js';
import ListItemText from '../../../web_modules/@material-ui/core/ListItemText.js';
import ListItemSecondaryAction from '../../../web_modules/@material-ui/core/ListItemSecondaryAction.js';
import TextField from '../../../web_modules/@material-ui/core/TextField.js';
import MenuItem from '../../../web_modules/@material-ui/core/MenuItem.js';
import {
    Close as CloseIcon,
    Done as DoneIcon,
    Delete as DeleteIcon,
    DragHandle as DragHandleIcon,
    Edit as EditIcon,
} from '../../../web_modules/@material-ui/icons.js';
import shortid from '../../../web_modules/shortid.js';
import * as Settings from '../Settings/index.js';
import useStylesStore from '../stores/styles.js';
import useTemplateStore from '../stores/template.js';
import { useDragList } from './DraggableList.js';
import StyleIdDialog from './StyleIdDialog.js';

const useStyles = makeStyles((theme) => ({
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
        boxShadow: (props) => theme.shadows[props.isDragging ? 4 : 1],
        backgroundColor: theme.palette.background.paper,
    },
    listItemContainer: {
        borderBottom: `${theme.spacing(0.25)}px solid transparent`,
        borderTop: `${theme.spacing(0.25)}px solid transparent`,
    },
}));

function getStyle(style, isDragging) {
    if (isDragging && style.transform) {
        const axisLockY =
            'translate(0px' +
            style.transform.slice(
                style.transform.indexOf(','),
                style.transform.length,
            );

        return { ...style, transform: axisLockY };
    }

    return style;
}

const SettingsItem = ({
    dragIndex,
    component,
    onEditing,
    isDragDisabled,
    subSettings,
}) => {
    const [isEditing, setIsEditing] = useState(false);

    const [isSaving, setIsSaving] = useState(false);

    const { provided, snapshot } = useDragList();

    const classes = useStyles({
        isDragging: snapshot.isDragging,
    });

    const { changeStyleId, removeComponent } = useTemplateStore((state) => ({
        changeStyleId: state.changeStyleId,
        removeComponent: state.removeComponent,
    }));

    const { styleIds, addStyle, removeStyle, renameStyle } = useStylesStore(
        (state) => ({
            styleIds: state.styleIds,
            addStyle: state.addStyle,
            removeStyle: state.removeStyle,
            renameStyle: state.renameStyle,
        }),
    );

    const { id: componentId, name: componentName, styleId } = component;

    const handleStyleIdChanged = (event) => {
        changeStyleId({
            componentId,
            newStyleId: event.target.value,
        });
    };

    const handleDelete = () => removeComponent(componentId);

    const handleEdit = () => {
        onEditing(true);
        setIsEditing(true);

        const newStyleId = `${componentName}-${shortid.generate()}`;

        changeStyleId({
            componentId,
            newStyleId,
        });
        addStyle({
            componentName,
            styleId: newStyleId,
            baseStyleId: styleId,
        });
    };

    const handleSave = () => {
        setIsEditing(false);
        onEditing(false);
        setIsSaving(true);
    };

    const handleDiscard = () => {
        setIsEditing(false);
        onEditing(false);
        changeStyleId({
            componentId,
            newStyleId: `Default${componentName}`,
        });
        removeStyle({
            componentName,
            styleId,
        });
    };

    const handleComplete = (newStyleId) => {
        setIsSaving(false);
        changeStyleId({
            componentId,
            newStyleId,
        });
        renameStyle({
            componentName,
            oldId: styleId,
            newId: newStyleId,
        });
    }; // find correct component

    const SettingsComponent = Settings[`${componentName}Settings`];

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            ListItem,
            {
                ref: provided.innerRef,
                className: classes.listItem,
                ContainerProps: {
                    ...provided.draggableProps,
                    className: classes.listItemContainer,
                    style: getStyle(
                        provided.draggableProps.style,
                        snapshot.isDragging,
                    ),
                },
            },
            React.createElement(ListItemText, {
                primary: React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                        IconButton,
                        _extends(
                            {
                                className: classes.iconSmallHover,
                                edge: 'start',
                                'aria-label': 'move-component',
                            },
                            provided.dragHandleProps,
                        ),
                        React.createElement(DragHandleIcon, null),
                    ),
                    React.createElement(
                        Typography,
                        {
                            className: classes.componentName,
                        },
                        componentName,
                    ),
                    React.createElement(
                        TextField,
                        {
                            disabled: isEditing,
                            select: true,
                            label: 'Select',
                            value: styleId,
                            onChange: handleStyleIdChanged,
                            variant: 'outlined',
                            size: 'small',
                        },
                        styleIds[componentName].map((id) =>
                            React.createElement(
                                MenuItem,
                                {
                                    key: id,
                                    value: id,
                                },
                                id,
                            ),
                        ),
                    ),
                ),
            }),
            React.createElement(
                ListItemSecondaryAction,
                null,
                React.createElement(
                    IconButton,
                    {
                        edge: 'end',
                        'aria-label': 'delete-component',
                        onClick: handleDelete,
                    },
                    React.createElement(DeleteIcon, null),
                ),
                isEditing
                    ? React.createElement(
                          React.Fragment,
                          null,
                          React.createElement(
                              IconButton,
                              {
                                  edge: 'end',
                                  'aria-label': 'discard',
                                  onClick: handleDiscard,
                              },
                              React.createElement(CloseIcon, null),
                          ),
                          React.createElement(
                              IconButton,
                              {
                                  edge: 'end',
                                  'aria-label': 'save',
                                  onClick: handleSave,
                              },
                              React.createElement(DoneIcon, null),
                          ),
                      )
                    : React.createElement(
                          IconButton,
                          {
                              edge: 'end',
                              'aria-label': 'edit',
                              onClick: handleEdit,
                          },
                          React.createElement(EditIcon, null),
                      ),
            ),
        ),
        React.createElement(
            Collapse,
            {
                className: classes.collapse,
                in: isEditing,
                timeout: 'auto',
                unmountOnExit: true,
            },
            React.createElement(SettingsComponent, {
                componentId: componentId,
                styleId: styleId,
            }),
        ),
        React.createElement(StyleIdDialog, {
            open: isSaving,
            initialId: styleId,
            onComplete: handleComplete,
        }),
    );
};

export default SettingsItem;
