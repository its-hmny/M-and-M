/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Text from './Text';

const base = css``;

/**
 *
 * points is object/array like:
 * {
 *  name: 'Points',
 *  messages: [
 *    { threshold: 10, text: 'Fai schifo' },
 *    { threshold: 15, text: 'Sei bravo' },
 *    { threshold: 30, text: 'Sei fantastico' },
 *    ...
 * ],
 * story: {
 *  points: null,
 * }
 */
const defaultMessage =
  "This is the end of the road. Here's how many points you collected!";

const Points = ({ messages, points, style, initialValue = 0 }) => {
  // you won't believe this: we need the unpacking because otherwise JavaScript, written
  // by complete idiots, uses a pointer to the same memory slots used in the editor
  // "Inspector": this means that when the preview is rendered, the point messages are
  // reordered, and their positions change in the Inspector. Actually unbelievable.
  const message = [...messages]
    .sort((a, b) => b.threshold - a.threshold)
    .find(message => points >= message.threshold);

  return (
    <div css={[base, style]}>
      <Text text={points || initialValue} style={style && style['Points']} />
      <Text
        text={message ? message.text : defaultMessage}
        style={style && style['Text']}
      />
    </div>
  );
};

export default Points;
