import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';
import cls from './ArticlesPageFilter.module.scss';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

interface ArticlesPageFilterProps {
	className?: string;
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
	const { t } = useTranslation('articles');
	const { className } = props;
	const {
		onChangeOrder,
		onChangeSearch,
		onChangeSort,
		onChangeType,
		onChangeView,
		order,
		search,
		sort,
		type,
		view,
	} = useArticlesFilters();

	return (
		<div className={classNames(cls.ArticlesPageFilter, {}, [className])}>
			<HStack
				align="center"
				justify="between"
			>
				<ArticleSortSelector
					onChangeOrder={onChangeOrder}
					onChangeSort={onChangeSort}
					order={order}
					sort={sort}
				/>
				<ArticleViewSelector
					view={view}
					onViewClick={onChangeView}
				/>
			</HStack>
			<Card className={cls.search}>
				<Input
					value={search}
					onChange={onChangeSearch}
					placeholder={t('Поиск')}
				/>
			</Card>
			<ArticleTypeTabs
				className={cls.tabs}
				onChangeType={onChangeType}
				value={type}
			/>
		</div>
	);
});
