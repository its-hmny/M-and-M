import React, { useState } from '../../web_modules/react.js';
import { Grid, Button } from '../../web_modules/@material-ui/core.js';
import { makeStyles } from '../../web_modules/@material-ui/core/styles.js';
import Navbar from '../common/Navbar.js';
import Preview from '../common/Preview.js';
import Inspector from './components/Inspector.js';
import SaveDialog from './components/SaveDialog.js';
import axios from '../common/shared.js';
import useTemplateStore from './stores/template.js';
import useStylesStore from './stores/styles.js';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    grid: {
        flexGrow: 1,
    },
    previewPanel: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
}));

const App = () => {
    const classes = useStyles();

    const [isSaving, setIsSaving] = useState(false);

    const styles = useStylesStore((state) => state.styles);

    const components = useTemplateStore((state) => state.components);

    const saveTemplate = (meta) => {
        setIsSaving(false);

        const styledComponents = components.map((component) => ({
            ...component,
            style: styles[component.styleId],
        }));

        axios // See common/shared.js (useAPI hook)
            .post('templates', { ...meta, components: styledComponents })
            .then((value) => console.log(value))
            .catch((err) => console.error(err));
    };

    return React.createElement(
        'div',
        {
            className: classes.container,
        },
        React.createElement(Navbar, null),
        React.createElement(
            Grid,
            {
                container: true,
                className: classes.grid,
            },
            React.createElement(
                Grid,
                {
                    item: true,
                    xs: 6,
                },
                React.createElement(Inspector, null),
            ),
            React.createElement(
                Grid,
                {
                    xs: 6,
                    item: true,
                },
                React.createElement(
                    'div',
                    {
                        className: classes.previewPanel,
                    },
                    React.createElement(Preview, {
                        components: components,
                        styles: styles,
                    }),
                    React.createElement(
                        Button,
                        {
                            color: 'primary',
                            variant: 'contained',
                            className: classes.saveButton,
                            onClick: () => setIsSaving(true),
                        },
                        'Save Template',
                    ),
                    React.createElement(SaveDialog, {
                        open: isSaving,
                        onCancel: () => {
                            setIsSaving(false);
                        },
                        onSave: saveTemplate,
                    }),
                ),
            ),
        ),
    );
};

export default App;
