import { ReactNode } from 'react';
// eslint-disable-next-line feature-sliced-imports/fsd-cross-layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

interface ThemeDecoratorProps {
	theme: Theme;
	children: ReactNode;
	redesigned?: boolean;
}

const ThemeDecoratorStyle = {
	minWidth: '100%',
	height: '100%',
};

export const ThemeDecorator = (props: ThemeDecoratorProps) => {
	const { theme, children, redesigned = false } = props;
	const appClassName = redesigned ? 'app_redesigned' : 'app';
	return (
		<ThemeProvider initialTheme={theme}>
			<div
				className={`${appClassName} ${theme}`}
				style={ThemeDecoratorStyle}
			>
				{children}
			</div>
		</ThemeProvider>
	);
};
