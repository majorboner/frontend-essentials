import { ReactNode, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';
import { HStack } from '../../redesigned/Stack';

export interface TabItem {
	value: string;
	content: ReactNode;
}

interface TabsProps {
	className?: string;
	tabs: TabItem[];
	value: string;
	onTabClick: (tab: TabItem) => void;
}

/**
 * Устарело, используем новые компоненты из папки redesigned!
 * @deprecated
 */

export const Tabs = memo((props: TabsProps) => {
	const { className, tabs, value, onTabClick } = props;

	const clickHandle = useCallback(
		(tab: TabItem) => () => {
			onTabClick(tab);
		},
		[onTabClick],
	);

	return (
		<HStack
			gap="8"
			className={classNames(cls.Tabs, {}, [className])}
		>
			{tabs.map((tab) => (
				<Card
					theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
					className={cls.tab}
					key={tab.value}
					onClick={clickHandle(tab)}
				>
					{tab.content}
				</Card>
			))}
		</HStack>
	);
});
