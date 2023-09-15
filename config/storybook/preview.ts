import type { Preview } from '@storybook/react';
import '../../src/app/styles/reset.scss';
import '../../src/app/styles/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {},
  decorators: [],
};

export default preview;
