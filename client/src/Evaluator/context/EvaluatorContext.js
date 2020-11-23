import React, { useContext, useState, useEffect } from 'react';
import axios, { useQuery } from '../../common/shared';

const EvaluatorContext = React.createContext();

export const EvaluatorProvider = ({ children, _ }) => {
  const { storyId } = useQuery();
  const [selectedPlayer, setSelectedPlayer] = useState(undefined);
  const [playerList, setPlayerList] = useState([]);
  const [story, setStory] = useState(undefined);

  useEffect(() => {
    // onMount load the story and setup the update routine
    axios.get(`/stories/${storyId}`).then(res => setStory(res.data.payload));

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
    story,
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
