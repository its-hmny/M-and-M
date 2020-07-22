import React from 'react';

function Choice({ question, correctAnswer, answers }) {
  return (
    <div>
      <h3>{question}</h3>
      <div>
        {answers.map(answer => (
          <button key={answer}>{answer}</button>
        ))}
      </div>
    </div>
  );
}

export default Choice;
