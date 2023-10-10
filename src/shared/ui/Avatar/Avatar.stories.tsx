import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import testAvatar from 'shared/assets/tests/test.jpg';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'shared/Avatar',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    src: testAvatar,
    alt: 'testing',
    size: '150px',
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};