import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreProvider } from 'app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
  decorators: [(Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [(Story) => (
    <StoreProvider>
      <ThemeDecorator theme={Theme.LIGHT}>
        <Story />
      </ThemeDecorator>
    </StoreProvider>
  )],
};

export const Dark: Story = {
  args: {},
  decorators: [(Story) => (
    <StoreProvider>
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    </StoreProvider>
  )],
};