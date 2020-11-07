import React, { useContext, useState, useEffect } from 'react';
import axios, { useQuery } from '../../common/shared';

const EvaluatorContext = React.createContext();

export const EvaluatorProvider = ({ children, _ }) => {
  const { storyId } = useQuery();
  const [selectedPlayer, setSelectedPlayer] = useState(undefined);
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    // onMount setup the update routine
    const intervalId = setInterval(
      () =>
        axios
          .get(`/stats/${storyId}`)
          .then(res => setPlayerList(res.data.payload))
          .catch(err => console.warn(err)),
      1000
    );

    // onUnmount removes the interval
    return () => clearInterval(intervalId);
  }, [storyId]);

  const toProvide = {
    storyId,
    playerList,
    selectedPlayer,
    setSelectedPlayer,
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
