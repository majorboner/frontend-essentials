import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Tabs as TabsDeprecated, TabItem } from '@/shared/ui/deprecated/Tabs';
import { ArticleType } from '@/entities/Article';
import { ToggleFeature } from '@/shared/lib/features';
import { Tabs } from '@/shared/ui/redesigned/Tabs';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ArticleTypeTabsProps {
	className?: string;
	value: ArticleType;
	onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
	const { t } = useTranslation('articles');
	const { className, value, onChangeType } = props;
	const tabs = useMemo<TabItem[]>(
		() => [
			{
				value: ArticleType.ALL,
				content: t('Все'),
			},
			{
				value: ArticleType.IT,
				content: t('Айти'),
			},
			{
				value: ArticleType.ECONOMY,
				content: t('Экономика'),
			},
			{
				value: ArticleType.SCIENCE,
				content: t('Наука'),
			},
		],
		[t],
	);

	const onTabClick = useCallback(
		(tab: TabItem) => {
			onChangeType(tab.value as ArticleType);
		},
		[onChangeType],
	);

	return (
		<ToggleFeature
			feature="isAppRedesigned"
			on={
				<Tabs
					direction="column"
					className={classNames('', {}, [className])}
					tabs={tabs}
					value={value}
					onTabClick={onTabClick}
				/>
			}
			off={
				<TabsDeprecated
					className={classNames('', {}, [className])}
					tabs={tabs}
					value={value}
					onTabClick={onTabClick}
				/>
			}
		/>
	);
});
