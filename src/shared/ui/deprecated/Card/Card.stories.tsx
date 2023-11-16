import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Card, CardTheme } from './Card';
import { Text } from '../Text/Text';

const meta: Meta<typeof Card> = {
	title: 'shared/deprecated/Card',
	component: Card,
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockChildren = (
	<Text
		title="Название"
		text="Описание"
	/>
);

export const Empty: Story = {
	args: {},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const Light: Story = {
	args: {
		children: mockChildren,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const Dark: Story = {
	args: {
		children: mockChildren,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const Leaf: Story = {
	args: {
		children: mockChildren,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LEAF}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const OutlineLight: Story = {
	args: {
		theme: CardTheme.OUTLINE,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const OutlineDark: Story = {
	args: {
		theme: CardTheme.OUTLINE,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const OutlineLeaf: Story = {
	args: {
		theme: CardTheme.OUTLINE,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LEAF}>
				<Story />
			</ThemeDecorator>
		),
	],
};
