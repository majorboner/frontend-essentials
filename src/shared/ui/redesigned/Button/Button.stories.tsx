import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
	args: {
		disabled: false,
		children: 'Button',
		square: false,
		size: 'size-m',
		variant: 'outline',
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
		disabled: false,
		children: 'Button',
		square: false,
		size: 'size-m',
		variant: 'outline',
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
		disabled: false,
		children: 'Button',
		square: false,
		size: 'size-m',
		variant: 'outline',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LEAF}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const Clear: Story = {
	args: {
		disabled: false,
		children: 'Button',
		square: false,
		size: 'size-m',
		variant: 'clear',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const ClearDark: Story = {
	args: {
		disabled: false,
		children: 'Button',
		square: false,
		size: 'size-m',
		variant: 'clear',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const ClearLeaf: Story = {
	args: {
		disabled: false,
		children: 'Button',
		square: false,
		size: 'size-m',
		variant: 'clear',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LEAF}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const Square: Story = {
	args: {
		disabled: false,
		children: 'Button',
		square: true,
		size: 'size-m',
		variant: 'outline',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const SquareDark: Story = {
	args: {
		disabled: false,
		children: 'Button',
		square: true,
		size: 'size-m',
		variant: 'outline',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const SquareLeaf: Story = {
	args: {
		disabled: false,
		children: 'Button',
		square: true,
		size: 'size-m',
		variant: 'outline',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LEAF}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const SizeM: Story = {
	args: {
		disabled: false,
		children: 'Button',
		square: true,
		size: 'size-m',
		variant: 'outline',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const SizeL: Story = {
	args: {
		disabled: false,
		children: 'Button',
		square: true,
		size: 'size-l',
		variant: 'outline',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const SizeXL: Story = {
	args: {
		disabled: false,
		children: 'Button',
		square: true,
		size: 'size-xl',
		variant: 'outline',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const Disabled: Story = {
	args: {
		disabled: true,
		children: 'Button',
		square: true,
		size: 'size-m',
		variant: 'outline',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const DisabledDark: Story = {
	args: {
		disabled: true,
		children: 'Button',
		square: true,
		size: 'size-m',
		variant: 'outline',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const DisabledLeaf: Story = {
	args: {
		disabled: true,
		children: 'Button',
		square: true,
		size: 'size-m',
		variant: 'outline',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LEAF}>
				<Story />
			</ThemeDecorator>
		),
	],
};
