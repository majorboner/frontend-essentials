import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticlesFiltersProps {
	className?: string;
	order: SortOrder;
	sort: ArticleSortField;
	type: ArticleType;
	search: string;
	onChangeSearch: (value: string) => void;
	onChangeOrder: (newOrder: SortOrder) => void;
	onChangeSort: (newSort: ArticleSortField) => void;
	onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
	const {
		className,
		order,
		sort,
		type,
		search,
		onChangeSearch,
		onChangeOrder,
		onChangeSort,
		onChangeType,
	} = props;
	const { t } = useTranslation('articles');
	return (
		<Card
			padding="24"
			className={classNames(cls.ArticlesFilters, {}, [className])}
		>
			<VStack gap="32">
				<Input
					size="s"
					value={search}
					onChange={onChangeSearch}
					placeholder={t('Поиск')}
					addonLeft={<Icon Svg={SearchIcon} />}
				/>
				<ArticleSortSelector
					onChangeOrder={onChangeOrder}
					onChangeSort={onChangeSort}
					order={order}
					sort={sort}
				/>
				<ArticleTypeTabs
					className={cls.tabs}
					onChangeType={onChangeType}
					value={type}
				/>
			</VStack>
		</Card>
	);
});
