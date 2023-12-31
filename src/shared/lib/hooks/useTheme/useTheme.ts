import { useContext } from 'react';

import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '../../context/ThemeContext';

export interface UseThemeResult {
	toggleTheme: (saveAction?: (theme: Theme) => void) => void;
	theme: Theme;
}

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);
	const toggleTheme = (saveAction?: (theme: Theme) => void) => {
		let newTheme: Theme;

		switch (theme) {
			case Theme.DARK:
				newTheme = Theme.LEAF;
				break;
			case Theme.LEAF:
				newTheme = Theme.LIGHT;
				break;
			case Theme.LIGHT:
				newTheme = Theme.DARK;
				break;
			default:
				newTheme = Theme.DARK;
		}

		setTheme?.(newTheme);
		saveAction?.(newTheme);
	};

	return { theme: theme || Theme.LIGHT, toggleTheme };
}
