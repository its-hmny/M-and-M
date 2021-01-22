import React, { useState } from '../../../web_modules/react.js';
import {
  Badge,
  Avatar,
  Typography,
  Button,
  Input,
  makeStyles,
} from '../../../web_modules/@material-ui/core.js';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Chip,
} from '../../../web_modules/@material-ui/core.js';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '../../../web_modules/@material-ui/core.js';
import { useEvaluator } from '../context/EvaluatorContext.js';

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: 200,
    width: 200,
    background: '#3f3f3e',
    boxShadow: theme.shadows[6],
    overflowY: 'auto',
  },
  listItem: {
    padding: 10,
    wordWrap: 'break-word',
  },
}));

const RenameDialog = ({ isOpen, close }) => {
  const { selectedPlayer, updatePlayerLog } = useEvaluator();

  const [newName, setName] = useState(undefined);

  const reset = () => {
    setName(undefined);
    close();
  };

  const saveChanges = () => {
    updatePlayerLog(selectedPlayer.id, {
      name: newName,
    });
    reset();
  };

  return React.createElement(
    Dialog,
    {
      open: isOpen,
      onClose: reset,
    },
    React.createElement(DialogTitle, null, 'Rename the player'),
    React.createElement(
      DialogContent,
      null,
      React.createElement(Input, {
        autoFocus: true,
        value: newName,
        onChange: (e) => setName(e.target.value),
      }),
    ),
    React.createElement(
      DialogActions,
      null,
      React.createElement(
        Button,
        {
          color: 'primary',
          variant: 'contained',
          onClick: saveChanges,
        },
        'Save',
      ),
    ),
  );
};

const ActivePlayersList = () => {
  const { selectedPlayer, playersLog, setFocusedPlayer } = useEvaluator();

  const { container, listItem } = useStyles();

  const [dialogOpen, setDialogOpen] = useState(false);

  const generatedTab = () =>
    playersLog.map((player) => {
      const {
        name,
        id,
        avatar,
        hasFinished,
        isDisconnected,
        pendingEvaluation,
        unreadMessages,
      } = player;

      const avaiableName = name || id;

      const showBadge = Boolean(pendingEvaluation.length || unreadMessages);

      const statusLabel = hasFinished
        ? 'Completed'
        : isDisconnected
        ? 'Offline'
        : 'Online';

      return React.createElement(
        ListItem,
        {
          key: id,
          selected: selectedPlayer && id === selectedPlayer.id,
          onClick: () => setFocusedPlayer(id),
          onDoubleClick: () => setDialogOpen(true),
          disabled: isDisconnected || hasFinished,
          className: listItem,
        },
        showBadge &&
          React.createElement(Badge, {
            badgeContent: '!',
            color: 'primary',
          }),
        React.createElement(
          ListItemAvatar,
          null,
          React.createElement(Avatar, {
            src: avatar,
          }),
        ),
        React.createElement(ListItemText, {
          primary: avaiableName,
          secondary: React.createElement(Chip, {
            color: 'primary',
            size: 'small',
            label: statusLabel,
          }),
        }),
      );
    });

  return React.createElement(
    'div',
    {
      className: container,
    },
    playersLog.length === 0
      ? React.createElement(
          Typography,
          {
            centered: true,
            variant: 'h6',
          },
          'Nobody is currently playing your story',
        )
      : React.createElement(
          List,
          {
            orientation: 'vertical',
            indicatorColor: 'primary',
          },
          generatedTab(),
        ),
    React.createElement(RenameDialog, {
      isOpen: dialogOpen,
      close: () => setDialogOpen(false),
    }),
  );
};

export default ActivePlayersList;
