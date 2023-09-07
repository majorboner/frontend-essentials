/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Outline: Story = {
  args: {
    disabled: false,
    children: 'Button',
    square: false,
    size: ButtonSize.M,
    theme: ThemeButton.OUTLINE,
  },
  // render: () => <Button theme={ThemeButton.OUTLINE}>Text</Button>,
};
export const Background: Story = {
  render: () => <Button theme={ThemeButton.BACKGROUND}>Text</Button>,
};
export const Clear: Story = {
  render: () => <Button theme={ThemeButton.CLEAR}>Text</Button>,
};
export const Square: Story = {
  render: () => <Button theme={ThemeButton.BACKGROUND} square>Text</Button>,
};
export const SizeM: Story = {
  render: () => <Button theme={ThemeButton.BACKGROUND} square size={ButtonSize.M}>Text</Button>,
};
export const SizeL: Story = {
  render: () => <Button theme={ThemeButton.BACKGROUND} square size={ButtonSize.L}>Text</Button>,
};
export const SizeXL: Story = {
  render: () => <Button theme={ThemeButton.BACKGROUND} square size={ButtonSize.XL}>Text</Button>,
};
export const Disabled: Story = {
  render: () => <Button theme={ThemeButton.BACKGROUND} disabled>Text</Button>,
};
