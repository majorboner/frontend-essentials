import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { AvatarDropdown } from './AvatarDropdown';
import { UserRoles } from '@/entities/User';
import testAvatar from '@/shared/assets/tests/test.jpg';

// @ts-ignore
const state: StateSchema = {
  user: {
    authData: {
      id: '1',
      roles: [UserRoles.ADMIN],
      username: 'Ulalu me',
      avatar: testAvatar,
    },
    _inited: true,
  },
};

const meta: Meta<typeof AvatarDropdown> = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  decorators: [(Story) => (
    <div style={{ padding: 150 }}>
      <BrowserRouter>
        <StoreProvider initialState={state}>

          <Story />
        </StoreProvider>
      </BrowserRouter>
    </div>

  ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [(Story) => (
    <ThemeDecorator theme={Theme.LIGHT}>
      <Story />
    </ThemeDecorator>
  )],
};

export const Dark: Story = {
  args: {},
  decorators: [(Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  )],
};

export const Leaf: Story = {
  args: {},
  decorators: [(Story) => (
    <ThemeDecorator theme={Theme.LEAF}>
      <Story />
    </ThemeDecorator>
  )],
};
