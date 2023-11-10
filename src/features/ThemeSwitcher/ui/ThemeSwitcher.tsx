import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import DarkThemeDeprecated from '@/shared/assets/icons/theme-dark.svg';
import LightThemeDeprecated from '@/shared/assets/icons/theme-light.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import {
	Button as ButtonDeprecated,
	ThemeButton,
} from '@/shared/ui/deprecated/Button';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeature } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

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
		<ToggleFeature
			feature="isAppRedesigned"
			on={
				<Icon
					Svg={ThemeIcon}
					clickable
					onClick={toggleHandler}
				/>
			}
			off={
				<ButtonDeprecated
					theme={ThemeButton.CLEAR}
					className={classNames(cls.ThemeSwitcher, {}, [className, cls[theme]])}
					onClick={toggleHandler}
				>
					<IconDeprecated
						Svg={
							theme === Theme.LIGHT ? LightThemeDeprecated : DarkThemeDeprecated
						}
						width={40}
						height={40}
					/>
				</ButtonDeprecated>
			}
		/>
	);
});
