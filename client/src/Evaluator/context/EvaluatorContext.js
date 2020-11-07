import React, { useContext, useState, useEffect } from 'react';
import axios, { useQuery } from '../../common/shared';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');
const EvaluatorContext = React.createContext();

export const EvaluatorProvider = ({ children, _ }) => {
  const storyId = useQuery().storyId;
  const [selectedPlayer, setSelectedPlayer] = useState(undefined);
  const [playerList, setPlayerList] = useState([]);

  socket.on('chat-msg-recv', payload => {
    const { story, senderId, receiverId, msg } = payload;
    if (story === 'test' && receiverId === 'evaluator${storyId}')
      playerList.find(item => item.playerId === selectedPlayer);
  });

  useEffect(() => {
    // onMount setup the update routine
    const intervalId = setInterval(
      () =>
        axios
          .get('/stats/test')
          .then(res => setPlayerList(res.data.payload))
          .catch(err => console.warn(err)),
      1000
    );

    // onUnmount removes the interval
    return () => clearInterval(intervalId);
  }, []);

  const toProvide = {
    socket,
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
