import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import testAvatar from '@/shared/assets/tests/test.jpg';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
	component: Avatar,
	title: 'shared/Avatar',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {
		src: testAvatar,
		alt: 'testing',
		size: '150px',
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
		src: testAvatar,
		alt: 'testing',
		size: '150px',
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
		src: testAvatar,
		alt: 'testing',
		size: '150px',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LEAF}>
				<Story />
			</ThemeDecorator>
		),
	],
};
