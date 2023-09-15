import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { BrowserRouter } from 'react-router-dom';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  decorators: [(Story) => <BrowserRouter><Story /></BrowserRouter>],
  args: {
    isOpen: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
export const Dark: Story = {
  args: {},
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
