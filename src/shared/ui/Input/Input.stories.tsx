import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
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

export const Leaf: Story = {
  args: {
    value: 'Input',
    readonly: false,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LEAF}><Story /></ThemeDecorator>],
};

export const WithPlaceholder: Story = {
  args: {
    value: 'Input',
    readonly: true,
    placeholder: 'Placeholder',
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};

export const WithPlaceholderDark: Story = {
  args: {
    value: 'Input',
    readonly: true,
    placeholder: 'Placeholder',
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};

export const WithPlaceholderLeaf: Story = {
  args: {
    value: 'Input',
    readonly: true,
    placeholder: 'Placeholder',
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LEAF}><Story /></ThemeDecorator>],
};

export const ReadonlyLight: Story = {
  args: {
    value: 'Input',
    readonly: true,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};

export const ReadonlyDark: Story = {
  args: {
    value: 'Input',
    readonly: true,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};

export const ReadonlyLeaf: Story = {
  args: {
    value: 'Input',
    readonly: true,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LEAF}><Story /></ThemeDecorator>],
};
