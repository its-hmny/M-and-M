import React, { useContext, useState, useEffect, useMemo } from 'react';
import axios, { useQuery } from '../../common/shared';

const EvaluatorContext = React.createContext();

export const EvaluatorProvider = ({ children, _ }) => {
  const { storyId } = useQuery();
  const [focusedPlayer, setFocusedPlayer] = useState(undefined);
  const [playersLog, setPlayersLog] = useState([]);
  const [story, setStory] = useState(undefined);

  useEffect(async () => {
    // onMount load the story and the player log on the server
    try {
      const loadedStory = (await axios.get(`/stories/${storyId}`)).data.payload;
      const serverLog = (await axios.get(`/stats/${storyId}`)).data.payload;
      setStory(loadedStory);
      setPlayersLog(serverLog);
    } catch (err) {
      console.warn('Error loading log and story from server', err);
    }
  }, [storyId]);

  const updatePlayerLog = async (player_id, patch) => {
    try {
      const response = await axios.patch(`/stats/${storyId}/${player_id}`, patch);
      setPlayersLog(response.data.payload);
    } catch (err) {
      console.warn('Error applying the patch to player', err);
    }
  };

  const toProvide = {
    story,
    storyId,
    playersLog,
    selectedPlayer: playersLog.find(player => player.id === focusedPlayer) || {},
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
