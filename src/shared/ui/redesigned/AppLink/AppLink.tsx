import { LinkProps, NavLink } from 'react-router-dom';
import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
	className?: string;
	variant?: AppLinkVariant;
	children: ReactNode;
	activeClassName?: string;
}

export const AppLink = forwardRef(
	(props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
		const {
			to,
			className,
			children,
			variant = 'primary',
			activeClassName = '',
		} = props;

		return (
			<NavLink
				to={to}
				className={({ isActive }) =>
					classNames(cls.AppLink, { [activeClassName]: isActive }, [
						className,
						cls[variant],
					])
				}
				ref={ref}
			>
				{children}
			</NavLink>
		);
	},
);
