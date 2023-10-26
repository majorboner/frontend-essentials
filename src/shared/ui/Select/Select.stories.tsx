import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select, SelectOptions } from './Select';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'shared/Select',
};

export default meta;
type Story = StoryObj<typeof meta>;

const options: SelectOptions<string>[] = [
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
];

export const Light: Story = {
  args: {
    label: 'Укажите значение',
    options,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};

export const Dark: Story = {
  args: {
    label: 'Укажите значение',
    options,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};

export const Leaf: Story = {
  args: {
    label: 'Укажите значение',
    options,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LEAF}><Story /></ThemeDecorator>],
};

export const Readonly: Story = {
  args: {
    label: 'Укажите значение',
    options,
    readonly: true,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
