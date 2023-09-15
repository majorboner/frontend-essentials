import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    disabled: false,
    children: 'Button',
    square: false,
    size: ButtonSize.M,
    theme: ThemeButton.OUTLINE,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
export const OutlineDark: Story = {
  args: {
    disabled: false,
    children: 'Button',
    square: false,
    size: ButtonSize.M,
    theme: ThemeButton.OUTLINE,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};
export const Background: Story = {
  args: {
    disabled: false,
    children: 'Button',
    square: false,
    size: ButtonSize.M,
    theme: ThemeButton.BACKGROUND,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
export const BackgroundDark: Story = {
  args: {
    disabled: false,
    children: 'Button',
    square: false,
    size: ButtonSize.M,
    theme: ThemeButton.BACKGROUND,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};
export const Clear: Story = {
  args: {
    disabled: false,
    children: 'Button',
    square: false,
    size: ButtonSize.M,
    theme: ThemeButton.CLEAR,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
export const ClearDark: Story = {
  args: {
    disabled: false,
    children: 'Button',
    square: false,
    size: ButtonSize.M,
    theme: ThemeButton.CLEAR,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};
export const Square: Story = {
  args: {
    disabled: false,
    children: 'Button',
    square: true,
    size: ButtonSize.M,
    theme: ThemeButton.BACKGROUND,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
export const SquareDark: Story = {
  args: {
    disabled: false,
    children: 'Button',
    square: true,
    size: ButtonSize.M,
    theme: ThemeButton.BACKGROUND,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};
export const SizeM: Story = {
  args: {
    disabled: false,
    children: 'Button',
    square: true,
    size: ButtonSize.M,
    theme: ThemeButton.BACKGROUND,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
export const SizeL: Story = {
  args: {
    disabled: false,
    children: 'Button',
    square: true,
    size: ButtonSize.L,
    theme: ThemeButton.BACKGROUND,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
export const SizeXL: Story = {
  args: {
    disabled: false,
    children: 'Button',
    square: true,
    size: ButtonSize.XL,
    theme: ThemeButton.BACKGROUND,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button',
    square: true,
    size: ButtonSize.M,
    theme: ThemeButton.BACKGROUND,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
export const DisabledDark: Story = {
  args: {
    disabled: true,
    children: 'Button',
    square: true,
    size: ButtonSize.M,
    theme: ThemeButton.BACKGROUND,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};
