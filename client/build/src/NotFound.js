import React from '../web_modules/react.js';
import { makeStyles } from '../web_modules/@material-ui/core.js';
import Navbar from './common/Navbar.js';
import { useQuery } from './common/shared.js';

const useStyles = makeStyles(() => ({
    main: {
        padding: '2vh',
    },
}));

const NotFound = () => {
    const classes = useStyles();

    const { route } = useQuery();

    let content;

    if (route && route.includes('editor')) {
        const storyId = route.substring(route.lastIndexOf('=') + 1);

        content = React.createElement(
            'div',
            null,
            "Sorry, but we didn't find any story with ID: ",
            storyId,
            ' ',
        );
    } else {
        content = React.createElement('div', null, '404');
    }

    return React.createElement(
        'div',
        null,
        React.createElement(Navbar, null),
        React.createElement(
            'div',
            {
                className: classes.main,
            },
            content,
        ),
    );
};

export default NotFound;
