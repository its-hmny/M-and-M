import React from 'react';
import { useStory } from '../story-context';

//answers is an object key:value, where keys are the possible answers
//                    and values are the nodes to go to for that answer
function Choice({ question, answers }) {
  const { nodeData, proceed } = useStory();

  return (
    <div>
      <h3>{nodeData.question}</h3>
      <div>
        {Object.keys(nodeData.answers).map(answer => (
          <button
            key={answer}
            onClick={() => proceed(nodeData.answers[answer])}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Choice;
