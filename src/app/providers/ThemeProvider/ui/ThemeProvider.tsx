import { ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { THEME_KEY } from '@/shared/const/localstorage';

interface ThemeProviderProps {
	initialTheme?: Theme;
	children: ReactNode;
}

const fallbackTheme = localStorage.getItem(THEME_KEY) as Theme;

const ThemeProvider = (props: ThemeProviderProps) => {
	const { initialTheme, children } = props;
	const [isThemeInited, setThemeInited] = useState(false);
	const [theme, setTheme] = useState<Theme>(
		initialTheme || fallbackTheme || Theme.LIGHT,
	);

	useEffect(() => {
		if (!isThemeInited && initialTheme) {
			setTheme(initialTheme);
			setThemeInited(true);
		}
	}, [initialTheme, isThemeInited, theme]);

	useEffect(() => {
		document.body.className = theme;
		localStorage.setItem(THEME_KEY, theme);
	}, [theme]);

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme],
	);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
