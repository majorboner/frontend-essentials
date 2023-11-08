import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import DarkTheme from '@/shared/assets/icons/theme-dark.svg';
import LightTheme from '@/shared/assets/icons/theme-light.svg';
import { Button, ThemeButton } from '@/shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	const dispatch = useAppDispatch();

	const toggleHandler = useCallback(() => {
		toggleTheme((newTheme) => {
			dispatch(saveJsonSettings({ theme: newTheme }));
		});
	}, [dispatch, toggleTheme]);
	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(cls.ThemeSwitcher, {}, [className, cls[theme]])}
			onClick={toggleHandler}
		>
			{theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
		</Button>
	);
});
