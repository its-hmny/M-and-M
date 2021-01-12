/** @jsx jsx */
import { css, jsx } from '../../../web_modules/@emotion/core.js';
import { useState, useMemo, useEffect } from '../../../web_modules/react.js';
import { Checkbox } from './Choice.js';
import Button from './Button.js';
/** renders a single choice component:
 * PARTS:
 *  - Choice -> input radio;
 *  - Button (submit);
 *
 * STYLE SECTIONS:
 *  - Radio
 *  - Button
 */

export const ANSWER_VALUE = {
    CORRECT: '[CORRECT]',
    WRONG: '[WRONG]',
};

const base = css`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    > div {
        margin-bottom: 1rem;
        width: 100%;
    }
    .Image {
    }
`;

const noop = () => {};

function MultiAnsChoicesImages({
    name,
    answers,
    withSubmit,
    style,
    onSubmit = noop,
    initialValue = [],
}) {
    const [selectedAnswers, setSelectedAnswers] = useState(initialValue);

    const correctAnswers = useMemo(
        () =>
            answers
                .filter((answer) => answer.value === ANSWER_VALUE.CORRECT)
                .map((answer) => answer.id)
                .sort(),
        [answers],
    );

    const isCorrect = useMemo(() => {
        const correctLength = correctAnswers.length === selectedAnswers.length;

        const allCorrect = selectedAnswers
            .sort()
            .every((answerId, index) => answerId === correctAnswers[index]);

        return correctLength && allCorrect
            ? ANSWER_VALUE.CORRECT
            : ANSWER_VALUE.WRONG;
    }, [correctAnswers, selectedAnswers]);

    const handleSelected = (event) => {
        // updated selectedAnswers according to user input
        const { id } = event.target;

        setSelectedAnswers(
            event.target.checked
                ? [...selectedAnswers, id]
                : selectedAnswers.filter((answerId) => answerId !== id),
        );
    };

    useEffect(() => {
        if (!withSubmit && correctAnswers.length === selectedAnswers.length) {
            onSubmit(
                isCorrect,
                answers.filter((answer) => selectedAnswers.includes(answer.id)),
            );
        }
    }, [
        withSubmit,
        onSubmit,
        isCorrect,
        correctAnswers,
        answers,
        selectedAnswers,
    ]);
    return jsx(
        'div',
        {
            css: [base, style],
        },
        jsx(
            'div',
            null,
            answers.map(({ id, imgURL, alt }) =>
                jsx(
                    'div',
                    null,
                    jsx('img', {
                        class: 'Image',
                        src: imgURL,
                        style: base && style['Image'],
                    }),
                    jsx(Checkbox, {
                        key: id,
                        id: id,
                        name: name,
                        label: alt,
                        selected: selectedAnswers.find(
                            (answerId) => answerId === id,
                        ),
                        onSelected: handleSelected,
                        style: style && style['Checkbox'],
                    }),
                ),
            ),
        ),
        withSubmit &&
            jsx(Button, {
                disabled: !(selectedAnswers.length > 0),
                onClick: () =>
                    onSubmit(
                        isCorrect,
                        answers.filter((answer) =>
                            selectedAnswers.includes(answer.id),
                        ),
                    ),
                style: style && style.Button,
                text: 'Conferma',
            }),
    );
}

export default MultiAnsChoicesImages;
