import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import {
	Select as SelectDeprecated,
	SelectOptions,
} from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeature } from '@/shared/lib/features';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
	className?: string;
	order: SortOrder;
	sort: ArticleSortField;
	onChangeOrder: (newOrder: SortOrder) => void;
	onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
	const { t } = useTranslation('articles');
	const { className, order, sort, onChangeOrder, onChangeSort } = props;
	const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
		() => [
			{
				value: 'asc',
				content: t('возрастанию'),
			},
			{
				value: 'desc',
				content: t('убыванию'),
			},
		],
		[t],
	);
	const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(
		() => [
			{
				value: ArticleSortField.CREATED,
				content: t('дате создания'),
			},
			{
				value: ArticleSortField.TITLE,
				content: t('названию'),
			},
			{
				value: ArticleSortField.VIEWS,
				content: t('просмотрам'),
			},
		],
		[t],
	);

	return (
		<ToggleFeature
			feature="isAppRedesigned"
			on={
				<div className={classNames('', {}, [className])}>
					<VStack gap="8">
						<Text text={t('Сортировать по:')} />
						<ListBox
							options={sortFieldOptions}
							value={sort}
							onChange={onChangeSort}
						/>
						<ListBox
							options={orderOptions}
							value={order}
							onChange={onChangeOrder}
						/>
					</VStack>
				</div>
			}
			off={
				<HStack
					gap="8"
					align="center"
					className={classNames('', {}, [className])}
				>
					<SelectDeprecated
						label={t('Сортировать по')}
						options={sortFieldOptions}
						value={sort}
						onChange={onChangeSort}
					/>
					<SelectDeprecated
						label={t('по')}
						options={orderOptions}
						value={order}
						onChange={onChangeOrder}
					/>
				</HStack>
			}
		/>
	);
});
