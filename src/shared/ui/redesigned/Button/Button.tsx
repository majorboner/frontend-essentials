import {
	ButtonHTMLAttributes,
	ForwardedRef,
	ReactNode,
	forwardRef,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';
export type ButtonSize = 'size-m' | 'size-l' | 'size-xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariant;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
	fullWidth?: boolean;
	children: ReactNode;
	addonLeft?: ReactNode;
	addonRight?: ReactNode;
	color?: ButtonColor;
}

export const Button = forwardRef(
	(props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
		const {
			className,
			children,
			variant = 'outline',
			square,
			disabled,
			size = 'size-m',
			fullWidth,
			addonLeft,
			addonRight,
			color = 'normal',
			...otherProps
		} = props;

		const mods: Mods = {
			[cls.square]: square,
			[cls.disabled]: disabled,
			[cls.fullWidth]: fullWidth,
			[cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
		};

		return (
			<button
				type="button"
				className={classNames(cls.Button, mods, [
					className,
					cls[variant],
					cls[size],
					cls[color],
				])}
				ref={ref}
				disabled={disabled}
				{...otherProps}
			>
				<div className={cls.addonLeft}>{addonLeft}</div>
				{children}
				<div className={cls.addonRight}>{addonRight}</div>
			</button>
		);
	},
);
