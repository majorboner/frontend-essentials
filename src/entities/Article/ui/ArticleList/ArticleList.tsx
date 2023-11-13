import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ToggleFeature } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListProps {
	className?: string;
	articles?: Article[];
	isLoading?: boolean;
	view?: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo((props: ArticleListProps) => {
	const { t } = useTranslation('articles');

	const {
		className,
		articles,
		isLoading,
		view = ArticleView.SMALL,
		target,
	} = props;

	const getSkeletons = (view: ArticleView) =>
		new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) => (
			<ArticleListItemSkeleton
				className={cls.card}
				key={index}
				view={view}
			/>
		));

	if (!articles) {
		return null;
	}

	if (!isLoading && !articles?.length) {
		return (
			<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
				<Text title={t('Статьи не найдены')} />
			</div>
		);
	}

	return (
		<ToggleFeature
			feature="isAppRedesigned"
			on={
				<HStack
					wrap="wrap"
					gap="16"
					className={classNames(cls.ArticleListRedesigned, {}, [])}
					data-testid="ArticleList"
				>
					{articles.map((item) => (
						<ArticleListItem
							article={item}
							view={view}
							target={target}
							key={item.id}
							className={cls.card}
						/>
					))}
					{isLoading && getSkeletons(view)}
				</HStack>
			}
			off={
				<div
					className={classNames(cls.ArticleList, {}, [className, cls[view]])}
					data-testid="ArticleList"
				>
					{articles.map((item) => (
						<ArticleListItem
							article={item}
							view={view}
							target={target}
							key={item.id}
							className={cls.card}
						/>
					))}
					{isLoading && getSkeletons(view)}
				</div>
			}
		/>
	);
});
