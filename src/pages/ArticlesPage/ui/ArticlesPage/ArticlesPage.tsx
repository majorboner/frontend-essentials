import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import cls from './ArticlesPage.module.scss';
import { articlePageReducer } from '../../model/slices/articlePageSlice';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter';
import { ArticlePageInfiniteList } from '../ArticlePageInfiniteList/ArticlePageInfiniteList';
import { useArticleItemById } from '../../model/selectors/articlesPageSelectors';
import { ArticlePageGreeting } from '@/features/ArticlePageGreeting';
import { ToggleFeature } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts';
import { ViewSelectorContaner } from '../ViewSelectorContainer/ViewSelectorContaner';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

interface ArticlesPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articlesPage: articlePageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
	const { className } = props;

	const data = useArticleItemById('1');
	console.log(data);
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(initArticlesPage(searchParams));
	});

	const content = (
		<ToggleFeature
			feature="isAppRedesigned"
			on={
				<StickyContentLayout
					left={<ViewSelectorContaner />}
					right={<FiltersContainer />}
					content={
						<Page
							data-testid="ArticlesPage"
							onScrollEnd={onLoadNextPart}
							className={classNames(cls.ArticlesPageRedesigned, {}, [
								className,
							])}
						>
							<ArticlePageInfiniteList className={cls.list} />
						</Page>
					}
				/>
			}
			off={
				<Page
					data-testid="ArticlesPage"
					onScrollEnd={onLoadNextPart}
					className={classNames(cls.ArticlesPage, {}, [className])}
				>
					<ArticlePageGreeting />
					<ArticlesPageFilter />
					<ArticlePageInfiniteList className={cls.list} />
				</Page>
			}
		/>
	);

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount={false}
		>
			{content}
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
