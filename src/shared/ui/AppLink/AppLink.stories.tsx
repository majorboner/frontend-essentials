import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  decorators: [(Story) => <BrowserRouter><Story /></BrowserRouter>],
  args: {
    to: 'http://localhost:6006/',
    children: 'App Link',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};

export const PrimaryLeaf: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LEAF}><Story /></ThemeDecorator>],
};

export const SecondaryLight: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.DARK}><Story /></ThemeDecorator>],
};

export const SecondaryLeaf: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [(Story) => <ThemeDecorator theme={Theme.LEAF}><Story /></ThemeDecorator>],
};
