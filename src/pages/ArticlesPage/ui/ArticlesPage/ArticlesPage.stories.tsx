import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  decorators: [(Story) => (
    <BrowserRouter>
      <StoreProvider>
        <Story />
      </StoreProvider>
    </BrowserRouter>
  )],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};

export const Dark: Story = {
  args: {},
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};

export const Leaf: Story = {
  args: {},
  decorators: [(Story) => <ThemeDecorator theme={Theme.LEAF}><Story /></ThemeDecorator>],
};
