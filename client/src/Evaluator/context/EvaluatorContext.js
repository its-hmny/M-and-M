import React, { useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { useSnackbar } from 'notistack';
import axios, { useQuery } from '../../common/shared';

import io from 'socket.io-client';

const EvaluatorContext = React.createContext();

export const EvaluatorProvider = ({ children }) => {
  const { storyId } = useQuery();
  const { enqueueSnackbar } = useSnackbar();
  const [focusedPlayer, setFocusedPlayer] = useState(undefined);
  const [playersLog, setPlayersLog] = useState([]);
  const [story, setStory] = useState(undefined);
  const [userMessage, setUserMessage] = useState('Loading...');
  const socket = useMemo(
    () => io('http://localhost:8000', { query: { type: 'evaluator', storyId } }),
    [storyId]
  );

  useEffect(() => {
    // onMount load the story and the player log on the server
    const fetchAll = async () => {
      try {
        const loadedStory = (await axios.get(`/stories/${storyId}`)).data.payload;
        setStory(loadedStory);
      } catch (err) {
        setUserMessage('Error the story requested does not exist');
        console.warn('Error loading the story from server', err);
      }
    };

    fetchAll();
  }, [storyId]);

  const updatePlayerLog = useCallback(
    (playerId, patch) => socket.emit('update:eval', { story: storyId, playerId, patch }),
    [socket, storyId]
  );

  const pushNotification = useCallback(
    msg => enqueueSnackbar(msg, { variant: 'default' }),
    [enqueueSnackbar]
  );

  useEffect(() => {
    if (!socket) return;

    const mergePlayerLog = (playerLog, patch) => {
      playerLog = { ...playerLog, ...patch }; // Merge the changes
      setPlayersLog(
        playersLog.map(log => {
          if (log.id === playerLog.id) return playerLog;
          else return log;
        })
      );
    };

    // Saves in the context the player position in the story
    socket.on('update:position', data => {
      const { story, senderId, payload } = data;
      if (story === storyId) {
        let playerLog = playersLog.find(player => player.id === senderId);
        if (playerLog) mergePlayerLog(playerLog, payload);
      }
    });

    // Saves in the context the player responses and changes to the story's components
    socket.on('update:stats', data => {
      const { story, senderId, payload } = data;
      if (story === storyId) {
        const playerLog = playersLog.find(player => player.id === senderId);
        if (playerLog) {
          // There's a new ending evaluation for that player
          const { name, id } = playerLog;
          if (playerLog.pendingEvaluation.length < payload.pendingEvaluation.length)
            pushNotification(`New evaluation requested by ${name || id}`);
          mergePlayerLog(playerLog, payload);
        }
      }
    });

    socket.on('chat-msg-recv', data => {
      const { story, senderId, receiverId, msg } = data;
      if (story === storyId) {
        const playerId = senderId === `evaluator${storyId}` ? receiverId : senderId;
        const playerLog = playersLog.find(player => player.id === playerId);
        if (playerLog) {
          const toSave = { sender: senderId, content: msg };
          playerLog.chatLog = [...playerLog.chatLog, toSave];
          // Maybe updatePlayerLog
          if (senderId !== `evaluator${storyId}`) {
            pushNotification(`New message from ${playerLog.name || playerLog.id}`);
            playerLog.unreadMessages++;
          }
          mergePlayerLog(playerLog, playerLog);
        }
      }
    });

    socket.on('update:eval', data => {
      const { story, playerId, newLog } = data;
      if (story === storyId) {
        const playerLog = playersLog.find(player => player.id === playerId);
        if (playerLog) mergePlayerLog(playerLog, newLog);
      }
    });

    socket.on('add:player', data => {
      const { story, payload } = data;
      if (story === storyId) setPlayersLog([...playersLog, payload]);
    });

    socket.on('get:log', data => {
      const { story, payload } = data;
      if (story === storyId && payload) {
        setPlayersLog(payload);
        setFocusedPlayer((payload[0] || {}).id);
      }
    });

    socket.on('rm:player', data => {
      const { story, playerId } = data;
      if (story === storyId)
        setPlayersLog(list => list.filter(player => player.id !== playerId));
    });

    // This has to be checked
    return () => socket.removeAllListeners();
  }, [socket, playersLog, storyId, pushNotification]);

  const toProvide = {
    story,
    storyId,
    playersLog,
    pushNotification,
    selectedPlayer: playersLog.find(player => player.id === focusedPlayer),
    setFocusedPlayer,
    updatePlayerLog,
    socket,
  };

  return (
    <EvaluatorContext.Provider value={toProvide}>
      {story ? children : <div>{userMessage}</div>}
    </EvaluatorContext.Provider>
  );
};

export const useEvaluator = () => {
  const value = useContext(EvaluatorContext);
  if (value == null) {
    throw new Error('useEvaluator must be used inside an EvaluatorProvider');
  }

  return value;
};
