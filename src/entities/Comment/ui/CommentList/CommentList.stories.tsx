import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreProvider } from 'app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import { Comment } from '../../model/types/comment';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
  title: 'entities/CommentList',
  component: CommentList,
  decorators: [(Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const comments: Comment[] = [
  {
    id: '1',
    text: 'ASDASDASDASDasDSDAS ASDFASDAS DAS EGHTERH RH DFG WER TGFJ TYU67',
    user: {
      id: '1',
      username: 'aJLSDNLKJFE',
    },
  },
  {
    id: '2',
    text: 'Jkas hufe ug dsgteb y',
    user: {
      id: '1',
      username: 'Asdljh juashdio',
    },
  },
  {
    id: '3',
    text: 'KLOdjf9iounrO uef hufehfoj',
    user: {
      id: '1',
      username: 'IPOjr ohnudh4',
    },
  },
];

export const Light: Story = {
  args: {
    comments,
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
    comments,
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
    comments,
  },
  decorators: [(Story) => (
    <StoreProvider>
      <ThemeDecorator theme={Theme.LEAF}>
        <Story />
      </ThemeDecorator>
    </StoreProvider>
  )],
};

export const LoadingLight: Story = {
  args: {
    comments,
    isLoading: true,
  },
  decorators: [(Story) => (
    <StoreProvider>
      <ThemeDecorator theme={Theme.LIGHT}>
        <Story />
      </ThemeDecorator>
    </StoreProvider>
  )],
};

export const LoadingDark: Story = {
  args: {
    comments,
    isLoading: true,
  },
  decorators: [(Story) => (
    <StoreProvider>
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    </StoreProvider>
  )],
};

export const LoadingLeaf: Story = {
  args: {
    comments,
    isLoading: true,
  },
  decorators: [(Story) => (
    <StoreProvider>
      <ThemeDecorator theme={Theme.LEAF}>
        <Story />
      </ThemeDecorator>
    </StoreProvider>
  )],
};
