import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextAlign, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
  args: {
    align: TextAlign.LEFT,
    title: 'Sample Title',
    text: 'Sample Text',
    theme: TextTheme.PRIMARY,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
export const PrimaryDark: Story = {
  args: {
    align: TextAlign.LEFT,
    title: 'Sample Title',
    text: 'Sample Text',
    theme: TextTheme.PRIMARY,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};
export const PrimaryLeaf: Story = {
  args: {
    align: TextAlign.LEFT,
    title: 'Sample Title',
    text: 'Sample Text',
    theme: TextTheme.PRIMARY,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LEAF}><Story /></ThemeDecorator>],
};
export const ErrorLight: Story = {
  args: {
    align: TextAlign.LEFT,
    title: 'Sample Title',
    text: 'Sample Text',
    theme: TextTheme.ERROR,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
export const ErrorDark: Story = {
  args: {
    align: TextAlign.LEFT,
    title: 'Sample Title',
    text: 'Sample Text',
    theme: TextTheme.ERROR,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};
export const ErrorLeaf: Story = {
  args: {
    align: TextAlign.LEFT,
    title: 'Sample Title',
    text: 'Sample Text',
    theme: TextTheme.ERROR,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LEAF}><Story /></ThemeDecorator>],
};
export const Center: Story = {
  args: {
    align: TextAlign.CENTER,
    title: 'Sample Title',
    text: 'Sample Text',
    theme: TextTheme.PRIMARY,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
export const Right: Story = {
  args: {
    align: TextAlign.RIGHT,
    title: 'Sample Title',
    text: 'Sample Text',
    theme: TextTheme.PRIMARY,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
