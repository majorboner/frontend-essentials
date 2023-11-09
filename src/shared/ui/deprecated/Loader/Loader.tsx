import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
	className?: string;
}

/**
 * Устарело, используем новые компоненты из папки redesigned!
 * @deprecated
 */

export const Loader = ({ className }: LoaderProps) => (
	<div className={classNames(cls.Loader, {}, [className])}>
		<div />
		<div />
	</div>
);
