import type { Preview } from '@storybook/react';
import '../../src/app/styles/reset.scss';
import '../../src/app/styles/index.scss';
import React from 'react';
import { ThemeProvider } from '../../src/app/providers/ThemeProvider';

const withThemeProvider = (Story, context) => {
  const { theme } = context.globals.theme;
  console.log(context);
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme || 'app-light-theme'}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};

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
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'app-dark-theme',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: [
          {
            value: 'app-light-theme',
            icon: 'circlehollow',
            title: 'Light',
          }, {
            value: 'app-dark-theme',
            icon: 'circle',
            title: 'Dark',
          },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [withThemeProvider],
  // args: {
  //   currentTheme: 'app-light-theme',
  // },
};

export default preview;
