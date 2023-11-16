import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
	title: 'shared/redesigned/ListBox',
	component: ListBox,
	decorators: [
		(Story) => (
			<BrowserRouter>
				<Story />
			</BrowserRouter>
		),
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
	{
		value: 'Country.Armenia',
		content: 'Country.Armenia',
		disabled: false,
	},
	{
		value: 'Country.Russia',
		content: 'Country.Russia',
		disabled: false,
	},
	{
		value: 'Country.Belarus',
		content: 'Country.Belarus',
		disabled: false,
	},
	{
		value: 'Country.Kazakhstan',
		content: 'Country.Kazakhstan',
		disabled: true,
	},
	{
		value: 'Country.Ukraine',
		content: 'Country.Ukraine',
		disabled: false,
	},
];

export const Light: Story = {
	args: {
		options,
		value: 'Country.Russia',
		label: 'Выпадающий список:',
	},
	decorators: [
		(Story) => (
			<StoreProvider>
				<ThemeDecorator theme={Theme.LIGHT}>
					<Story />
				</ThemeDecorator>
			</StoreProvider>
		),
	],
};

export const Dark: Story = {
	args: {
		options,
		value: 'Country.Russia',
		label: 'Выпадающий список:',
	},
	decorators: [
		(Story) => (
			<StoreProvider>
				<ThemeDecorator theme={Theme.DARK}>
					<Story />
				</ThemeDecorator>
			</StoreProvider>
		),
	],
};

export const Leaf: Story = {
	args: {
		options,
		value: 'Country.Russia',
		label: 'Выпадающий список:',
	},
	decorators: [
		(Story) => (
			<StoreProvider>
				<ThemeDecorator theme={Theme.LEAF}>
					<Story />
				</ThemeDecorator>
			</StoreProvider>
		),
	],
};

export const Readonly: Story = {
	args: {
		options,
		value: 'Country.Russia',
		label: 'Выпадающий список:',
		readonly: true,
	},
	decorators: [
		(Story) => (
			<StoreProvider>
				<ThemeDecorator theme={Theme.LIGHT}>
					<Story />
				</ThemeDecorator>
			</StoreProvider>
		),
	],
};
