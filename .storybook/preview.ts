import type { Preview } from '@storybook/react';
import {
  withRouter,
  reactRouterParameters,
} from 'storybook-addon-remix-react-router';
import '../src/styles/global.css';
import '../src/styles/fonts.scss';

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: 'Dark', value: '#1E1E1E' },
        { name: 'Light', value: '#fff' },
      ],
      default: 'Dark',
    },
    reactRouter: reactRouterParameters({}),
  },
};

export default preview;
