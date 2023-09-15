import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { BrowserRouter } from 'react-router-dom';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  component: AppLink,
  decorators: [(Story) => <BrowserRouter><Story /></BrowserRouter>],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'App Link',
    theme: AppLinkTheme.PRIMARY,
    to: 'http://localhost:6006/',
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
export const Secondary: Story = {
  args: {
    children: 'App Link',
    theme: AppLinkTheme.SECONDARY,
    to: 'http://localhost:6006/',
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
