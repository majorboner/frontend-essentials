import { Link, LinkProps } from 'react-router-dom';
import { ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
	children: ReactNode;
	to: string;
}

/**
 * Устарело, используем новые компоненты из папки redesigned!
 * @deprecated
 */

export const AppLink = memo((props: AppLinkProps) => {
	const { to, className, children, theme = AppLinkTheme.PRIMARY } = props;

	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
		>
			{children}
		</Link>
	);
});
