import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

const EvaluatorContext = React.createContext();

export const EvaluatorProvider = ({ children, _ }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(undefined);
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/stats/test')
      .then(res => setPlayerList(res.data.payload))
      .catch(err => alert(err));
  });

  const toProvide = {
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
