import React from '../../web_modules/react.js';
import { NavLink } from '../../web_modules/react-router-dom.js';
import {
    AppBar,
    Toolbar,
    Button,
    makeStyles,
    colors,
} from '../../web_modules/@material-ui/core.js';
import logo from '../assets/logo.svg.proxy.js';
import * as ROUTES from '../routes.js';

const useStyles = makeStyles((theme) => ({
    navLink: {
        backgroundColor: colors.deepOrange[500],
        '&:hover': {
            backgroundColor: colors.deepOrange[700],
        },
    },
    logo: {
        height: 40,
        marginRight: theme.spacing(2),
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return React.createElement(
        AppBar,
        {
            position: 'static',
            color: 'secondary',
        },
        React.createElement(
            Toolbar,
            null,
            React.createElement('img', {
                className: classes.logo,
                src: logo,
                alt: 'Application Logo',
            }),
            React.createElement(
                Button,
                {
                    component: NavLink,
                    activeClassName: classes.navLink,
                    exact: true,
                    to: ROUTES.HOME,
                },
                'Home',
            ),
            React.createElement(
                Button,
                {
                    component: NavLink,
                    activeClassName: classes.navLink,
                    to: ROUTES.CREATOR,
                },
                'Creator',
            ),
            React.createElement(
                Button,
                {
                    component: NavLink,
                    activeClassName: classes.navLink,
                    to: `${ROUTES.EDITOR}?storyId=test`,
                },
                'Editor',
            ),
            React.createElement(
                Button,
                {
                    component: NavLink,
                    activeClassName: classes.navLink,
                    to: ROUTES.PLAYER + '?storyId=test',
                },
                'Player',
            ),
            React.createElement(
                Button,
                {
                    component: NavLink,
                    activeClassName: classes.navLink,
                    to: ROUTES.EVALUATOR + '?storyId=test',
                },
                'Evaluator',
            ),
            React.createElement(
                Button,
                {
                    component: NavLink,
                    activeClassName: classes.navLink,
                    to: ROUTES.PUBLISHER,
                },
                'Publisher',
            ),
        ),
    );
};

export default Navbar;
