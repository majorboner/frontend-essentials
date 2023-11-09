import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ListBox, ListBoxOptions } from './ListBox';

const meta: Meta<typeof ListBox> = {
	title: 'shared/ListBox',
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

const options: ListBoxOptions[] = [
	{
		id: 1,
		value: 'Country.Armenia',
		content: 'Country.Armenia',
		disabled: false,
	},
	{
		id: 2,
		value: 'Country.Russia',
		content: 'Country.Russia',
		disabled: false,
	},
	{
		id: 3,
		value: 'Country.Belarus',
		content: 'Country.Belarus',
		disabled: false,
	},
	{
		id: 4,
		value: 'Country.Kazakhstan',
		content: 'Country.Kazakhstan',
		disabled: true,
	},
	{
		id: 5,
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
