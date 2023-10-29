import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ArticleType } from '@/entities/Article';
import { TabItem, Tabs } from './Tabs';

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
    value: ArticleType.ALL,
    content: 'Все',
  },
  {
    value: ArticleType.IT,
    content: 'Айти',
  },
  {
    value: ArticleType.ECONOMY,
    content: 'Экономика',
  },
  {
    value: ArticleType.SCIENCE,
    content: 'Наука',
  },
];

export const Light: Story = {
  args: {
    tabs,
    value: ArticleType.ECONOMY,
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
    value: ArticleType.ECONOMY,
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
    value: ArticleType.ECONOMY,
  },
  decorators: [(Story) => (
    <StoreProvider>
      <ThemeDecorator theme={Theme.LEAF}>
        <Story />
      </ThemeDecorator>
    </StoreProvider>
  )],
};
