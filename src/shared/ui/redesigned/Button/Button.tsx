import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline';

export type ButtonSize = 'size-m' | 'size-l' | 'size-xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariant;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
	fullWidth?: boolean;
	children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		variant = 'outline',
		square,
		disabled,
		size = 'size-m',
		fullWidth,
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.square]: square,
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth,
	};

	return (
		<button
			type="button"
			className={classNames(cls.Button, mods, [
				className,
				cls[variant],
				cls[size],
			])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});
