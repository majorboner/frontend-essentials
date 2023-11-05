import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { Text, TextTheme } from '@/shared/ui/Text';
import {
	getArticlesPageError,
	getArticlesPageIsLoading,
	getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlePageSlice';

interface ArticlePageInfiniteListProps {
	className?: string;
}

export const ArticlePageInfiniteList = memo(
	(props: ArticlePageInfiniteListProps) => {
		const { t } = useTranslation();
		const { className } = props;

		const error = useSelector(getArticlesPageError);
		const articles = useSelector(getArticles.selectAll);
		const isLoading = useSelector(getArticlesPageIsLoading);
		const view = useSelector(getArticlesPageView);

		if (error) {
			return (
				<Text
					theme={TextTheme.ERROR}
					title={t('Произошла ошибка')}
					text={t('Попробуйте обновить страницу')}
				/>
			);
		}

		return (
			<ArticleList
				isLoading={isLoading}
				view={view}
				articles={articles}
				className={className}
			/>
		);
	},
);
