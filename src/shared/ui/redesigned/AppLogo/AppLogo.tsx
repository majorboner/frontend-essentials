import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import AppSvg from '@/shared/assets/icons/logo-react.svg';
import { HStack } from '../Stack';

interface AppLogoProps {
	className?: string;
	size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => (
	<HStack
		className={classNames(cls.appLogoWrapper, {}, [className])}
		max
		justify="center"
	>
		<AppSvg
			width={size}
			height={size}
			color="#087EA4"
			className={cls.appLogo}
		/>
		<div className={cls.gradientBig} />
		<div className={cls.gradientSmall} />
	</HStack>
));
