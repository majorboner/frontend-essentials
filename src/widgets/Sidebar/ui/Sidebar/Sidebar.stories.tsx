import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  decorators: [(Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// @ts-ignore
const state: StateSchema = {
  user: {
    authData: {
      id: '1',
      username: 'Ulalume',
    },
    _inited: true,
  },
};

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

export const Leaf: Story = {
  args: {},
  decorators: [(Story) => (
    <StoreProvider>
      <ThemeDecorator theme={Theme.LEAF}>
        <Story />
      </ThemeDecorator>
    </StoreProvider>
  )],
};

export const AuthorizedLight: Story = {
  args: {},
  decorators: [(Story) => (
    <StoreProvider initialState={state}>
      <ThemeDecorator theme={Theme.LIGHT}>
        <Story />
      </ThemeDecorator>
    </StoreProvider>
  )],
};

export const AuthorizedDark: Story = {
  args: {},
  decorators: [(Story) => (
    <StoreProvider initialState={state}>
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    </StoreProvider>
  )],
};

export const AuthorizedLeaf: Story = {
  args: {},
  decorators: [(Story) => (
    <StoreProvider initialState={state}>
      <ThemeDecorator theme={Theme.LEAF}>
        <Story />
      </ThemeDecorator>
    </StoreProvider>
  )],
};
