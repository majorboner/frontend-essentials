import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
	BACKGROUND = 'background',
	OUTLINE = 'outline',
}

export enum ButtonSize {
	M = 'size-m',
	L = 'size-l',
	XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
	fullWidth?: boolean;
	children: ReactNode;
}

/**
 * Устарело, используем новые компоненты из папки redesigned!
 * @deprecated
 */

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = ThemeButton.CLEAR,
		square,
		disabled,
		size = ButtonSize.M,
		fullWidth,
		...otherProps
	} = props;
	const mods: Mods = {
		[cls[theme]]: true,
		[cls.square]: square,
		[cls[size]]: true,
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth,
	};

	return (
		<button
			type="button"
			className={classNames(cls.Button, mods, [className, cls[theme]])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});
