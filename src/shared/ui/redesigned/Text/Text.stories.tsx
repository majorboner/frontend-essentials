import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Text> = {
	title: 'shared/Text',
	component: Text,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
	args: {
		align: 'left',
		title: 'Sample Title',
		text: 'Sample Text',
		variant: 'primary',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};
export const PrimaryDark: Story = {
	args: {
		align: 'left',
		title: 'Sample Title',
		text: 'Sample Text',
		variant: 'primary',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};
export const PrimaryLeaf: Story = {
	args: {
		align: 'left',
		title: 'Sample Title',
		text: 'Sample Text',
		variant: 'primary',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LEAF}>
				<Story />
			</ThemeDecorator>
		),
	],
};
export const ErrorLight: Story = {
	args: {
		align: 'left',
		title: 'Sample Title',
		text: 'Sample Text',
		variant: 'error',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};
export const ErrorDark: Story = {
	args: {
		align: 'left',
		title: 'Sample Title',
		text: 'Sample Text',
		variant: 'error',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};
export const ErrorLeaf: Story = {
	args: {
		align: 'left',
		title: 'Sample Title',
		text: 'Sample Text',
		variant: 'error',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LEAF}>
				<Story />
			</ThemeDecorator>
		),
	],
};
export const Center: Story = {
	args: {
		align: 'center',
		title: 'Sample Title',
		text: 'Sample Text',
		variant: 'primary',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};
export const Right: Story = {
	args: {
		align: 'right',
		title: 'Sample Title',
		text: 'Sample Text',
		variant: 'primary',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};
