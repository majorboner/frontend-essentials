import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'shared/Select',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    label: 'Укажите значение',
    options: [
      {
        value: '1',
        content: 'Hello',
      },
      {
        value: '2',
        content: 'My name is',
      },
      {
        value: '3',
        content: 'Ulalume',
      },
    ],
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
