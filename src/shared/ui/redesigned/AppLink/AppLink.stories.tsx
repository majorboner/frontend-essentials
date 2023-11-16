import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
	title: 'shared/redesigned/AppLink',
	component: AppLink,
	decorators: [
		(Story) => (
			<BrowserRouter>
				<Story />
			</BrowserRouter>
		),
	],
	args: {
		to: 'http://localhost:6006/',
		children: 'App Link',
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
	args: {
		variant: 'primary',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator
				redesigned
				theme={Theme.LIGHT}
			>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const PrimaryDark: Story = {
	args: {
		variant: 'primary',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator
				redesigned
				theme={Theme.DARK}
			>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const PrimaryOrange: Story = {
	args: {
		variant: 'primary',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator
				redesigned
				theme={Theme.LEAF}
			>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const ErrorLight: Story = {
	args: {
		variant: 'red',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator
				redesigned
				theme={Theme.LIGHT}
			>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const ErrorDark: Story = {
	args: {
		variant: 'red',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator
				redesigned
				theme={Theme.DARK}
			>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const ErrorLeaf: Story = {
	args: {
		variant: 'red',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator
				redesigned
				theme={Theme.LEAF}
			>
				<Story />
			</ThemeDecorator>
		),
	],
};
