/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState, useMemo, useEffect } from 'react';
import shortid from 'shortid';
import { Checkbox, Radio } from '../Elements/Choice';
import Button from '../Elements/Button';
import { useStory } from '../../story-context';
import { ANSWER_VALUE } from '../../constants';

/** renders a multiple choice component: if there is only
 * one correct answer radiobutton will be used, otherwise checkbox
 */

function Choices({ answers, routes, withSubmit }) {
  const { currentNode, moveTo } = useStory();
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [route, setRoute] = useState(null);

  const correctAnswers = useMemo(
    () =>
      answers
        .filter(answer => answer.value === ANSWER_VALUE.CORRECT)
        .map(answer => answer.text)
        .sort(),
    [answers]
  );

  const Component = useMemo(
    () =>
      answers.reduce(
        (count, { value }) => count + (value === ANSWER_VALUE.CORRECT),
        0
      ) > 1
        ? Checkbox
        : Radio,
    [answers]
  );

  const onSelected = event => {
    // if it's radio button, selected answer is only one.
    // Otherwise, update selectedAnswers accordingly
    const inputType = event.target.type;

    if (inputType === 'radio') {
      setSelectedAnswers([event.target.value]);
    } else {
      setSelectedAnswers(
        event.target.checked
          ? [...selectedAnswers, event.target.value]
          : selectedAnswers.filter(answer => answer !== event.target.value)
      );
    }
  };

  useEffect(() => {
    const isCorrect =
      correctAnswers.length === selectedAnswers.length &&
      selectedAnswers
        .sort()
        .every((selected, index) => selected === correctAnswers[index]);

    const newRoute = isCorrect
      ? routes[ANSWER_VALUE.CORRECT]
      : routes[ANSWER_VALUE.WRONG];

    if (!withSubmit && correctAnswers.length === selectedAnswers.length)
      moveTo(newRoute);

    setRoute(newRoute);
  }, [correctAnswers, selectedAnswers, moveTo, routes, withSubmit]);

  return (
    <div css={css``}>
      {answers.map(({ text }) => (
        <Component
          key={`Choice-${shortid.generate()}`}
          name={currentNode.name}
          label={text}
          selected={selectedAnswers.find(selected => selected === text)}
          onSelected={onSelected}
        />
      ))}

      {withSubmit && selectedAnswers.length > 0 && (
        <Button to={route}>Conferma</Button>
      )}
    </div>
  );
}

export default Choices;
