## Storybook

Документация [Storybook](https://storybook.js.org/docs)

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Для корректной работы тем написан декоратор ThemeDecorator в shared/config/storybook/ThemeDecorator

Файл со сторикейсами создается в папке с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

- `npm run storybook`

Пример кода:

<details>

<summary>AppLink.stories.tsx</summary>

```typescript jsx
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
```

</details>
