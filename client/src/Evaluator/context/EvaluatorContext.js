import React, { useContext, useState, useEffect } from 'react';

import DummyData from '../dummydata.json';

const EvaluatorContext = React.createContext();

export const EvaluatorProvider = ({ children, _ }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(undefined);

  const updateData = () => {
    console.log('Data updated');
    setTimeout(updateData, 1000);
  };

  useEffect(() => {
    updateData();
    const id = setTimeout(updateData, 1000);
    return () => clearTimeout(id);
  }, []);

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
