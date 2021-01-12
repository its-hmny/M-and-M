import React, { useMemo, useState } from '../../../web_modules/react.js';
import Button from '../../../web_modules/@material-ui/core/Button.js';
import { Add as AddIcon } from '../../../web_modules/@material-ui/icons.js';
import useTemplateStore from '../stores/template.js';
import SettingsItem from '../components/SettingsItem.js';
import { DraggableList } from '../components/DraggableList.js';
import useStylesStore from '../stores/styles.js';
import { makeStyles } from '../../../web_modules/@material-ui/core/styles.js';

const useStyles = makeStyles((theme) => ({
    buttonList: {
        padding: `0 ${theme.spacing(5)}px ${theme.spacing(2)}px`,
    },
}));

function ButtonGroupSettings({ componentId, styleId }) {
    const classes = useStyles(); // buttonGroup styles

    const { styles, updateStyle } = useStylesStore((state) => ({
        styles: state.styles,
        updateStyle: state.updateStyle,
    }));

    const onChange = (subStyle) => {
        updateStyle({
            styleId,
            ...subStyle,
        });
    }; // contained buttons

    const [currentlyEditing, setCurrentlyEditing] = useState(0);

    const getButtons = (state) =>
        state.components.find((component) => component.id === componentId)
            .children;

    const { buttons, addComponent } = useTemplateStore((state) => ({
        buttons: getButtons(state),
        addComponent: state.addComponent,
    }));

    const list = useMemo(
        () =>
            buttons.map((button, index) =>
                React.createElement(SettingsItem, {
                    key: button.id,
                    id: button.id,
                    dragIndex: index,
                    component: button,
                    onEditing: (isEditing) =>
                        setCurrentlyEditing((currentlyEditing) =>
                            isEditing
                                ? currentlyEditing + 1
                                : currentlyEditing - 1,
                        ),
                }),
            ),
        [buttons],
    );

    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            {
                className: classes.buttonList,
            },
            React.createElement(
                Button,
                {
                    variant: 'contained',
                    color: 'primary',
                    startIcon: React.createElement(AddIcon, null),
                    onClick: () => addComponent('Button', componentId),
                },
                'Add button',
            ),
            React.createElement(DraggableList, {
                id: componentId,
                list: list || [],
                disabled: currentlyEditing > 0,
            }),
        ),
    );
}

export default ButtonGroupSettings;
