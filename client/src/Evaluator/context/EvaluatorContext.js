import React, { useContext, useState, useEffect } from 'react';
import axios, { useQuery } from '../../common/shared';

import io from 'socket.io-client';
const socket = io('http://localhost:8000');

const EvaluatorContext = React.createContext();

export const EvaluatorProvider = ({ children, _ }) => {
  const { storyId } = useQuery();
  const [focusedPlayer, setFocusedPlayer] = useState(undefined);
  const [playersLog, setPlayersLog] = useState([]);
  const [story, setStory] = useState(undefined);

  useEffect(() => {
    // onMount load the story and the player log on the server
    const fetchAll = async () => {
      try {
        const loadedStory = (await axios.get(`/stories/${storyId}`)).data.payload;
        const serverLog = (await axios.get(`/stats/${storyId}`)).data.payload;
        setStory(loadedStory);
        setPlayersLog(serverLog);
        setFocusedPlayer(serverLog[0].id);
      } catch (err) {
        console.warn('Error loading log and story from server', err);
      }
    };

    fetchAll();
  }, [storyId]);

  const updatePlayerLog = async (player_id, patch) => {
    try {
      const response = await axios.patch(`/stats/${storyId}/${player_id}`, patch);
      setPlayersLog(response.data.payload);
    } catch (err) {
      console.warn('Error applying the patch to player', err);
    }
  };

  useEffect(() => {
    // Saves in the context the player position in the story
    socket.on('update:position', data => {
      const { story, senderId, payload } = data;
      if (story === storyId) {
        const playerLog = playersLog.find(player => player.id === senderId);
        if (playerLog) {
          // The player changed node in the story so removes all the data from the previous one
          delete playerLog.currentQuestion;
          playerLog.currentQuestion = { ...payload, patchs: [] };
          setPlayersLog([...playersLog]);
        }
      }
    });

    // Saves in the context the player responses and changes to the story's components
    socket.on('update:stats', data => {
      const { story, senderId, payload } = data;
      if (story === storyId) {
        const playerLog = playersLog.find(player => player.id === senderId);
        if (playerLog) {
          const { id, data } = payload;
          let componentToPatch = playerLog.currentQuestion.patchs.find(
            patch => patch.componentId === id
          );
          if (componentToPatch) {
            componentToPatch = { componentId: id, value: data };
          } else {
            playerLog.currentQuestion.patchs.push({ componentId: id, value: data });
          }
          setPlayersLog([...playersLog]);
        }
      }
    });

    // This has to be checked
    return () => socket.removeAllListeners();
  }, [playersLog, storyId]);

  const toProvide = {
    story,
    storyId,
    playersLog,
    selectedPlayer: playersLog.find(player => player.id === focusedPlayer),
    setFocusedPlayer,
    updatePlayerLog,
  };

  return (
    <EvaluatorContext.Provider value={toProvide}>{children}</EvaluatorContext.Provider>
  );
};

export const useEvaluator = () => {
  const value = useContext(EvaluatorContext);
  if (value == null) {
    throw new Error('useEvaluator must be used inside an EvaluatorProvider');
  }

  return value;
};
