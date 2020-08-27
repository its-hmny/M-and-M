/** @jsx jsx */
// i get it, this is trash. maybe make a 
// directories file from which we pull out what we need? this sounds like a mattia problem :)
import { css, jsx } from '@emotion/core';
import { useState, useMemo, useEffect } from 'react';
import { Checkbox, Radio } from './Choice';
import Button from './Button';
import { useStory } from '../../../Player/context/story';
import { useStyles } from '../../../Player/context/styles';
import { ANSWER_VALUE } from '../../../Player/constants';

/** renders a multiple choice component: if there is only
 * one correct answer radiobutton will be used, otherwise checkbox
 * PARTS:
 *  - Choice -> input radio | input checkbox;
 *  - Button (submit);
 *
 * STYLE SECTIONS:
 *  - Radio
 *  - Checkbox
 *  - Button
 */

function Choices({ answers, routes, withSubmit, styleName }) {
  const styles = useStyles(styleName);
  const { currentNode, moveTo } = useStory();
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [route, setRoute] = useState(null);

  const correctAnswers = useMemo(
    () =>
      answers
        .filter(answer => answer.value === ANSWER_VALUE.CORRECT)
        .map(answer => answer.id)
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
    const { type, id } = event.target;

    if (type === 'radio') {
      setSelectedAnswers([id]);
    } else {
      setSelectedAnswers(
        event.target.checked
          ? [...selectedAnswers, id]
          : selectedAnswers.filter(answerId => answerId !== id)
      );
    }
  };

  useEffect(() => {
    const isCorrect =
      correctAnswers.length === selectedAnswers.length &&
      selectedAnswers
        .sort()
        .every((answerId, index) => answerId === correctAnswers[index]);

    const newRoute = isCorrect
      ? routes[ANSWER_VALUE.CORRECT]
      : routes[ANSWER_VALUE.WRONG];

    if (!withSubmit && correctAnswers.length === selectedAnswers.length)
      moveTo(newRoute);

    setRoute(newRoute);
  }, [correctAnswers, selectedAnswers, moveTo, routes, withSubmit]);

  return (
    <div
      css={css`
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div
        css={css`
          margin-bottom: 1rem;
          width: 100%;
        `}
      >
        {answers.map(({ id, text }) => (
          <Component
            key={id}
            id={id}
            name={currentNode.name}
            label={text}
            selected={!!selectedAnswers.find(answerId => answerId === id)}
            onSelected={onSelected}
            styles={styles[Component.displayName]}
          />
        ))}
      </div>

      {withSubmit && selectedAnswers.length > 0 && (
        <Button route={route} styleName={styles.Button} text="Conferma"/>
      )}
    </div>
  );
}

export default Choices;
