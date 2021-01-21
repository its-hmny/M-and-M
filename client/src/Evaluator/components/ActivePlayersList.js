import React, { useState } from 'react';
import { Badge, Avatar, Typography, Button, Input, makeStyles } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemAvatar, Chip } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { useEvaluator } from '../context/EvaluatorContext';

const useStyles = makeStyles(theme => ({
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
    cursor: 'pointer',
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
    updatePlayerLog(selectedPlayer.id, { name: newName });
    reset();
  };

  return (
    <Dialog open={isOpen} onClose={reset}>
      <DialogTitle>Rename the player</DialogTitle>
      <DialogContent>
        <Input autoFocus={true} value={newName} onChange={e => setName(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={saveChanges}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const ActivePlayersList = () => {
  const { story, selectedPlayer, playersLog, setFocusedPlayer } = useEvaluator();
  const { container, listItem } = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);

  const playerSort = (x, y) => y.score - x.score;
  const getTeamScore = teamName =>
    playersLog.reduce(
      (teamScore, { team, score }) => teamScore + (team === teamName ? score : 0),
      0
    );
  const teamSort = (x, y) => getTeamScore(y.team) - getTeamScore(x.team);
  playersLog.sort(story?.modes?.includes('teams') ? teamSort : playerSort);

  const generatedTab = () =>
    playersLog.map(player => {
      const {
        name,
        id,
        team,
        avatar,
        hasFinished,
        isDisconnected,
        pendingEvaluation,
        unreadMessages,
      } = player;
      const teamTag = team ? ` [${team}]` : '';
      const avaiableName = name || id;
      const showBadge = Boolean(pendingEvaluation.length || unreadMessages);
      const statusLabel = hasFinished
        ? 'Completed'
        : isDisconnected
        ? 'Offline'
        : 'Online';

      return (
        <ListItem
          key={id}
          selected={selectedPlayer && id === selectedPlayer.id}
          onClick={() => setFocusedPlayer(id)}
          onDoubleClick={() => setDialogOpen(true)}
          disabled={isDisconnected || hasFinished}
          className={listItem}
        >
          {showBadge && <Badge badgeContent={'!'} color="primary" />}
          <ListItemAvatar>
            <Avatar src={avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={avaiableName + teamTag}
            secondary={
              <Chip component="span" color="primary" size="small" label={statusLabel} />
            }
          />
        </ListItem>
      );
    });

  return (
    <div className={container}>
      {playersLog.length === 0 ? (
        <Typography align="center" variant="h6">
          Nobody is currently playing your story
        </Typography>
      ) : (
        <List orientation="vertical">{generatedTab()}</List>
      )}
      <RenameDialog isOpen={dialogOpen} close={() => setDialogOpen(false)} />
    </div>
  );
};

export default ActivePlayersList;
