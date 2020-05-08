import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Background from '../../widgets/Background';
import space1 from '../../assets/images/backgrounds/space-cartoon@original.jpg';
import space2 from '../../assets/images/backgrounds/space-cartoon2@original.jpg';

export default {
  component: Background,
  title: 'Widgets/Background',
  excludeStories: /.*Data$/,
  decorators: [withKnobs, withA11y],
};

export const backgroundsData = {
  'Space 1': space1,
  'Space 2': space2,
};

export const Default = () => (
  <Background image={select('Image', backgroundsData, space1)}>
    Some content
  </Background>
);
