import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    value: 'Input',
    readonly: false,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
export const Dark: Story = {
  args: {
    value: 'Input',
    readonly: false,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};
export const WithPlaceholder: Story = {
  args: {
    value: 'Input',
    readonly: true,
    placeholder: 'Placeholder',
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
export const DarkWithPlaceholder: Story = {
  args: {
    value: 'Input',
    readonly: true,
    placeholder: 'Placeholder',
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};
export const Readonly: Story = {
  args: {
    value: 'Input',
    readonly: true,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
