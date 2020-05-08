import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { withA11y } from '@storybook/addon-a11y';

import Timer from '../../widgets/Timer';

export default {
  component: Timer,
  title: 'Widgets/Timer',
  excludeStories: /^timer/,
  decorators: [withKnobs, withA11y],
};

export const timerData = {
  minutes: 2,
  seconds: 30,
};

export const timerActions = {
  onTimeout: action('onTimeout'),
};

export const Default = () => (
  <Timer paused={boolean('Paused', false)} {...timerData} {...timerActions} />
);
