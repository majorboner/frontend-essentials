import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { ReactNode } from 'react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import testAvatar from '@/shared/assets/tests/test.jpg';
import { DropDownItem, Dropdown } from './Dropdown';
import { Avatar } from '../../../Avatar';

const meta: Meta<typeof Dropdown> = {
	title: 'shared/deprecated/Dropdown',
	component: Dropdown,
	decorators: [
		(Story) => (
			<div style={{ margin: 150 }}>
				<BrowserRouter>
					<Story />
				</BrowserRouter>
			</div>
		),
	],
};

const trigger: ReactNode = (
	<Avatar
		src={testAvatar}
		size={32}
	/>
);
const items: DropDownItem[] = [
	{
		content: 'Профиль',
		href: '',
	},
	{
		content: 'Выйти',
		onClick: () => {},
	},
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {
		items,
		trigger,
		direction: 'bottom left',
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
		items,
		trigger,
		direction: 'bottom left',
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
		items,
		trigger,
		direction: 'bottom left',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LEAF}>
				<Story />
			</ThemeDecorator>
		),
	],
};
