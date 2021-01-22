import React, { useMemo, useState } from '../../../../web_modules/react.js';
import { makeStyles } from '../../../../web_modules/@material-ui/core/styles.js';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link as MuiLink,
  Tabs,
  Tab,
  Typography,
} from '../../../../web_modules/@material-ui/core.js';
import { Link } from '../../../../web_modules/react-router-dom.js';
import ReadOnly from '../ReadOnly.js';
import Preview from '../../../common/Preview.js';
import Loading from './Loading.js';
import Failure from './Failure.js';
import { CREATOR } from '../../../routes.js';
import useTemplates from './use-templates.js';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  dialogText: {
    flexShrink: 0,
    marginBottom: theme.spacing(2.5),
  },
  container: {
    flexGrow: 1,
    overflowY: 'auto',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  grid: {
    padding: theme.spacing(2),
  },
  emptyContainer: {
    width: 'min-content',
  },
  emptyTitle: {
    minWidth: 'max-content',
  },
}));

const TemplatesDialog = ({ open, onCancel, onConfirm }) => {
  const classes = useStyles();

  const [current, setCurrent] = useState(0);

  const [{ templates, isError, isLoading }, retry] = useTemplates();

  const alternativeContent = useMemo(() => {
    if (isError) {
      return React.createElement(Failure, {
        onRetry: retry,
      });
    }

    if (isLoading) {
      return React.createElement(Loading, null);
    }

    if (templates.length === 0) {
      return React.createElement(
        'div',
        {
          className: classes.emptyContainer,
        },
        React.createElement(
          'div',
          {
            className: classes.emptyTitle,
          },
          React.createElement(
            DialogTitle,
            {
              variant: 'h6',
            },
            "Wooops, seems you've never created any template...",
            ' ',
            React.createElement(
              'span',
              {
                role: 'img',
                'aria-label': 'thinking emoji',
              },
              '\uD83E\uDD14',
            ),
          ),
        ),
        React.createElement(
          DialogContent,
          null,
          React.createElement(
            Typography,
            null,
            'What are you waiting for? Get to the Template Creator and build something amazing!',
          ),
        ),
        React.createElement(
          DialogActions,
          null,
          React.createElement(
            Button,
            {
              color: 'primary',
              component: Link,
              to: CREATOR,
            },
            'Jump to Creator',
          ),
        ),
      );
    }

    return null;
  }, [templates, isError, isLoading, retry, classes]);

  return React.createElement(
    Dialog,
    {
      maxWidth: false,
      open: open,
      onClose: onCancel,
      'aria-labelledby': 'max-width-dialog-title',
      classes: {
        paper: classes.root,
      },
    },
    alternativeContent ||
      React.createElement(
        React.Fragment,
        null,
        React.createElement(DialogTitle, null, 'Templates'),
        React.createElement(
          DialogContent,
          {
            className: classes.content,
          },
          React.createElement(
            DialogContentText,
            {
              className: classes.dialogText,
            },
            'Choose one of the available templates or create a new one with our',
            ' ',
            React.createElement(
              MuiLink,
              {
                component: Link,
                to: CREATOR,
              },
              'Template Creator',
            ),
          ),
          React.createElement(
            'div',
            {
              className: classes.container,
            },
            React.createElement(
              Tabs,
              {
                orientation: 'vertical',
                variant: 'scrollable',
                value: current,
                className: classes.tabs,
                indicatorColor: 'primary',
                onChange: (_, index) => setCurrent(index),
              },
              templates.map((template, index) =>
                React.createElement(Tab, {
                  key: index,
                  label: template.name,
                  disableRipple: true,
                }),
              ),
            ),
            React.createElement(
              Box,
              {
                display: 'flex',
              },
              React.createElement(
                Box,
                {
                  px: 4,
                },
                React.createElement(
                  ReadOnly,
                  null,
                  React.createElement(Preview, {
                    components: templates[current].components,
                  }),
                ),
              ),
              React.createElement(
                Box,
                {
                  py: 2,
                  width: 300,
                },
                React.createElement(
                  Typography,
                  {
                    variant: 'h6',
                  },
                  templates[current].name,
                ),
                React.createElement(
                  Typography,
                  {
                    variant: 'subtitle1',
                  },
                  templates[current].description,
                ),
              ),
            ),
          ),
        ),
        React.createElement(
          DialogActions,
          null,
          React.createElement(
            Button,
            {
              onClick: onCancel,
              color: 'primary',
            },
            'Cancel',
          ),
          React.createElement(
            Button,
            {
              color: 'primary',
              onClick: () => onConfirm(templates[current]),
            },
            'Confirm',
          ),
        ),
      ),
  );
};

export default TemplatesDialog;
