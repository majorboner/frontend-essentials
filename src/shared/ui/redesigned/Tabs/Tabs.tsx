import { ReactNode, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import cls from './Tabs.module.scss';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
	value: string;
	content: ReactNode;
}

interface TabsProps {
	className?: string;
	tabs: TabItem[];
	value: string;
	onTabClick: (tab: TabItem) => void;
	direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
	const { className, tabs, value, onTabClick, direction = 'row' } = props;

	const clickHandle = useCallback(
		(tab: TabItem) => () => {
			onTabClick(tab);
		},
		[onTabClick],
	);

	return (
		<Flex
			gap="8"
			align="start"
			className={classNames(cls.Tabs, {}, [className])}
			direction={direction}
		>
			{tabs.map((tab) => {
				const isSelected = tab.value === value;
				return (
					<Card
						variant={isSelected ? 'light' : 'normal'}
						className={classNames(cls.tab, { [cls.selected]: isSelected }, [])}
						key={tab.value}
						padding={isSelected ? '16' : '8'}
						onClick={clickHandle(tab)}
						border="round"
					>
						{tab.content}
					</Card>
				);
			})}
		</Flex>
	);
});
