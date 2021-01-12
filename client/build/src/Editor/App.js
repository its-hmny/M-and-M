import React, { useState } from '../../web_modules/react.js';
import {
    makeStyles,
    Typography,
    Box,
    Button,
} from '../../web_modules/@material-ui/core.js';
import Fab from '../../web_modules/@material-ui/core/Fab.js';
import { Add as AddIcon } from '../../web_modules/@material-ui/icons.js';
import shortid from '../../web_modules/shortid.js';
import { useEditor } from './context/EditorContext.js';
import Preview from '../common/Preview.js';
import GraphCanvas from './components/GraphCanvas/index.js';
import Inspector from './components/Inspector.js';
import TemplatesDialog from './components/TemplatesDialog/index.js';
import Panel from './components/Panel.js';
import ExpandMoreIcon from '../../web_modules/@material-ui/icons/ExpandMore.js';
import ExpandLessIcon from '../../web_modules/@material-ui/icons/ExpandLess.js';
import Navbar from '../common/Navbar.js';
import SaveButton from '../common/SaveButton.js';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#3d3d3d',
    },
    buttonsContainer: {
        position: 'absolute',
        top: theme.spacing(2),
        left: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        zIndex: 1,
    },
    addButton: {
        marginRight: theme.spacing(2),
    },
    addIcon: {
        marginRight: theme.spacing(1),
    },
    saveButton: {},
    saveIcon: {
        marginRight: theme.spacing(1),
    },
    preview: {
        marginLeft: theme.spacing(2),
        height: '100%',
        display: 'flex',
        alignItems: 'end',
        '& > *': {
            marginBottom: theme.spacing(5),
        },
    },
    caption: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        zIndex: 5, // keep it above graph but under ispector
    },
    innerCaption: {
        opacity: '0.75',
        backgroundColor: '#616161',
        borderRadius: 4,
        textAlign: 'center',
        padding: 15,
        paddingTop: 0,
    },
    navbar: {
        flexShrink: 0,
    },
    graphStyle: {
        position: 'relative',
        '& .vis-network': {
            width: '100%',
            height: 'calc(100vh - 64px)',
            // 64px is navbar height
            outline: 'none',
        },
    },
}));

const appendNodeId = (nodeId, components) =>
    components.map((component) => {
        const updatedComponent = {
            ...component,
            id: `${nodeId}-${component.id}`,
        };

        if (updatedComponent.children) {
            updatedComponent.children = appendNodeId(
                nodeId,
                component.children,
            );
        }

        return updatedComponent;
    });

const App = () => {
    const classes = useStyles();

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [isCaptionOpen, setIsCaptionOpen] = useState(true);

    const { story, workingActivity, saveStory } = useEditor();

    const currentNode = story.nodes.find((node) => node.id === workingActivity);

    const addNode = (template) => {
        setIsDialogOpen(false);

        const { nodes, ...others } = story;

        const nodeId = shortid.generate();

        const components = appendNodeId(nodeId, template.components);

        saveStory({
            nodes: [
                ...nodes,
                {
                    id: nodeId,
                    ...template,
                    components,
                },
            ],
            ...others,
        });
    };

    return React.createElement(
        'div',
        {
            className: classes.container,
        },
        React.createElement(
            'div',
            {
                className: classes.navbar,
            },
            React.createElement(Navbar, null),
        ),
        React.createElement(
            'div',
            {
                className: classes.graphStyle,
            },
            React.createElement(
                'div',
                {
                    className: classes.buttonsContainer,
                },
                React.createElement(
                    Fab,
                    {
                        variant: 'extended',
                        className: classes.addButton,
                        onClick: () => setIsDialogOpen(true),
                    },
                    React.createElement(AddIcon, {
                        className: classes.addIcon,
                    }),
                    'Add Node',
                ),
                React.createElement(SaveButton, {
                    story: story,
                }),
            ),
            React.createElement(
                Box,
                {
                    className: classes.caption,
                },
                !isCaptionOpen
                    ? React.createElement(
                          Button,
                          {
                              onClick: () => setIsCaptionOpen(true),
                          },
                          React.createElement(ExpandLessIcon, null),
                      )
                    : React.createElement(
                          Box,
                          {
                              className: classes.innerCaption,
                          },
                          React.createElement(
                              Button,
                              {
                                  onClick: () => setIsCaptionOpen(false),
                              },
                              React.createElement(ExpandMoreIcon, null),
                          ),
                          React.createElement(
                              Typography,
                              null,
                              'Clicca 2 volte su un nodo per modificarlo',
                          ),
                          React.createElement(
                              Typography,
                              null,
                              'Trascina un nodo per spostarlo',
                          ),
                          React.createElement(
                              Typography,
                              null,
                              'Per eliminare un nodo vai in Global - Delete node',
                          ),
                      ),
            ),
            React.createElement(
                Panel,
                {
                    open: currentNode != null,
                    position: 'left',
                },
                React.createElement(
                    'div',
                    {
                        className: classes.preview,
                    },
                    React.createElement(Preview, {
                        components: currentNode ? currentNode.components : [],
                    }),
                ),
            ),
            React.createElement(GraphCanvas, null),
            React.createElement(
                Panel,
                {
                    open: currentNode != null,
                    position: 'right',
                    style: {
                        top: 0,
                    },
                },
                React.createElement(Inspector, null),
            ),
            React.createElement(TemplatesDialog, {
                open: isDialogOpen,
                onCancel: () => setIsDialogOpen(false),
                onConfirm: addNode,
            }),
        ),
    );
};

export default App;
