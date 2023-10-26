import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
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
