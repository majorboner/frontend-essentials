import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  component: Loader,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
export const Dark: Story = {
  args: {},
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};
