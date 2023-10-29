import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import avatar from '@/shared/assets/tests/test.jpg';
import { UserRoles } from '@/entities/User/model/consts/consts';
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [(Story) => <BrowserRouter><StoreProvider><Story /></StoreProvider></BrowserRouter>],
};

export default meta;
type Story = StoryObj<typeof meta>;

// @ts-ignore
const state: StateSchema = {
  user: {
    authData: {
      id: '1',
      username: 'Ulalume',
      avatar,
      roles: [UserRoles.ADMIN],
    },
    _inited: true,
  },
};

export const Light: Story = {
  args: {
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};

export const Dark: Story = {
  args: {
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};

export const Leaf: Story = {
  args: {
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LEAF}><Story /></ThemeDecorator>],
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
