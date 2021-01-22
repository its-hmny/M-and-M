import React from '../../../../web_modules/react.js';
import { makeStyles } from '../../../../web_modules/@material-ui/core/styles.js';
import CircularProgress from '../../../../web_modules/@material-ui/core/CircularProgress.js';
import Typography from '../../../../web_modules/@material-ui/core/Typography.js';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const Loading = () => {
  const classes = useStyles();

  return React.createElement(
    'div',
    {
      className: classes.container,
    },
    React.createElement(CircularProgress, null),
    React.createElement(
      'div',
      null,
      React.createElement(
        Typography,
        {
          variant: 'h6',
        },
        'Loading templates...'
      ),
      React.createElement(
        Typography,
        {
          variant: 'body1',
        },
        'This should be a very short process'
      )
    )
  );
};

export default Loading;
