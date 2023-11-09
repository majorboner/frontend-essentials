import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';
import AppSvg from '@/shared/assets/icons/logo-react.svg';

interface AppLogoProps {
	className?: string;
}

export const AppLogo = memo(({ className }: AppLogoProps) => (
	<HStack
		className={classNames(cls.appLogoWrapper, {}, [className])}
		max
		justify="center"
	>
		<div className={cls.gradientBig} />
		<div className={cls.gradientSmall} />
		<AppSvg className={cls.appLogo} />
	</HStack>
));
