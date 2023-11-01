import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { TabItem, Tabs } from './Tabs';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component: Tabs,
  decorators: [(Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const tabs: TabItem[] = [
  {
    value: '1',
    content: 'Все',
  },
  {
    value: '2',
    content: 'Айти',
  },
  {
    value: '3',
    content: 'Экономика',
  },
  {
    value: '4',
    content: 'Наука',
  },
];

export const Light: Story = {
  args: {
    tabs,
    value: '1',
  },
  decorators: [(Story) => (
    <StoreProvider>
      <ThemeDecorator theme={Theme.LIGHT}>
        <Story />
      </ThemeDecorator>
    </StoreProvider>
  )],
};

export const Dark: Story = {
  args: {
    tabs,
    value: '1',
  },
  decorators: [(Story) => (
    <StoreProvider>
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    </StoreProvider>
  )],
};

export const Leaf: Story = {
  args: {
    tabs,
    value: '1',
  },
  decorators: [(Story) => (
    <StoreProvider>
      <ThemeDecorator theme={Theme.LEAF}>
        <Story />
      </ThemeDecorator>
    </StoreProvider>
  )],
};
