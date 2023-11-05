import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/test.jpg';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	decorators: [
		(Story) => (
			<BrowserRouter>
				<StoreProvider>
					<Story />
				</StoreProvider>
			</BrowserRouter>
		),
	],
	args: {
		data: {
			age: 12,
			avatar,
			city: 'Mowcos',
			country: Country.Armenia,
			currency: Currency.EUR,
			firstName: 'Ulaleu',
			lastName: 'Boner',
			username: 'Major',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const Dark: Story = {
	args: {},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const Leaf: Story = {
	args: {},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LEAF}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const WithErrorLight: Story = {
	args: {
		error: 'err',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const WithErrorDark: Story = {
	args: {
		error: 'err',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const WithErrorLeaf: Story = {
	args: {
		error: 'err',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LEAF}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const LoadingLight: Story = {
	args: {
		isLoading: true,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LIGHT}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const LoadingDark: Story = {
	args: {
		isLoading: true,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const LoadingLeaf: Story = {
	args: {
		isLoading: true,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.LEAF}>
				<Story />
			</ThemeDecorator>
		),
	],
};
