import type { Preview } from '@storybook/react';
import '../../src/app/styles/reset.scss';
import '../../src/app/styles/index.scss';
import i18n from '../../src/shared/config/i18n/i18n';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    i18n,
  },
};

export default preview;
