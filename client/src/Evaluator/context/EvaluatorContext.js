import React, { useContext, useState } from 'react';

import DummyData from '../dummydata.json';

const EvaluatorContext = React.createContext();

export const EvaluatorProvider = ({ children, _ }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(undefined);

  const toProvide = {
    playerList: DummyData,
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
