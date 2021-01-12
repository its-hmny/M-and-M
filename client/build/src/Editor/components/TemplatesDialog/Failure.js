import React from '../../../../web_modules/react.js';
import { makeStyles } from '../../../../web_modules/@material-ui/core/styles.js';
import Button from '../../../../web_modules/@material-ui/core/Button.js';
import Typography from '../../../../web_modules/@material-ui/core/Typography.js';
import { Error as ErrorIcon } from '../../../../web_modules/@material-ui/icons.js';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(2),
        textAlign: 'center',
        '& > *:not(:last-child)': {
            marginBottom: theme.spacing(1),
        },
    },
}));

const Failure = ({ onRetry }) => {
    const classes = useStyles();

    return React.createElement(
        'div',
        {
            className: classes.container,
        },
        React.createElement(ErrorIcon, {
            fontSize: 'large',
            color: 'error',
        }),
        React.createElement(
            'div',
            null,
            React.createElement(
                Typography,
                {
                    variant: 'h6',
                },
                'Something went wrong',
            ),
            React.createElement(Typography, null, 'Unable to fetch templates'),
        ),
        React.createElement(
            Button,
            {
                variant: 'text',
                onClick: onRetry,
            },
            'Retry',
        ),
    );
};

export default Failure;
