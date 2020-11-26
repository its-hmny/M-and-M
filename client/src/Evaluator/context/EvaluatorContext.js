import React, { useContext, useState, useEffect, useMemo } from 'react';
import axios, { useQuery } from '../../common/shared';

const EvaluatorContext = React.createContext();

export const EvaluatorProvider = ({ children, _ }) => {
  const { storyId } = useQuery();
  const [focusedPlayer, setFocusedPlayer] = useState(undefined);
  const [playersLog, setPlayersLog] = useState([]);
  const [story, setStory] = useState(undefined);
  console.log(playersLog);

  useEffect(() => {
    // onMount load the story and the player log on the server
    axios.get(`/stories/${storyId}`).then(res => setStory(res.data.payload));
    axios.get(`/stats/${storyId}`).then(res => setPlayersLog(res.data.payload));
  }, [storyId]);

  const toProvide = {
    story,
    storyId,
    playersLog,
    selectedPlayer: playersLog.find(player => player.id === focusedPlayer) || {},
    setFocusedPlayer,
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
