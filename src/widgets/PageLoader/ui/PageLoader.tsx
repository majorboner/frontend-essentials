import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { HStack } from '@/shared/ui/deprecated/Stack';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
	<HStack
		max
		justify="center"
		align="center"
		className={classNames(cls.PageLoader, {}, [className])}
	>
		<Loader />
	</HStack>
);
