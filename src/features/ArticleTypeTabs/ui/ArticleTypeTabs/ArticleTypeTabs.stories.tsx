import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ArticleType } from '@/entities/Article';

const meta: Meta<typeof ArticleTypeTabs> = {
	title: 'entities/ArticleTypeTabs',
	component: ArticleTypeTabs,
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

export const Light: Story = {
	args: {
		value: ArticleType.ALL,
		onChangeType: () => {},
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
		value: ArticleType.ALL,
		onChangeType: () => {},
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
		value: ArticleType.ALL,
		onChangeType: () => {},
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
