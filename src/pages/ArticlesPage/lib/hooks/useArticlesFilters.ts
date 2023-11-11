import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ArticleView, ArticleSortField, ArticleType } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SortOrder } from '@/shared/types/sort';
import {
	getArticlesPageView,
	getArticlesPageSort,
	getArticlesPageOrder,
	getArticlesPageSearch,
	getArticlesPageType,
} from '../../model/selectors/articlesPageSelectors';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';

export function useArticlesFilters() {
	const dispatch = useAppDispatch();
	const view = useSelector(getArticlesPageView);
	const sort = useSelector(getArticlesPageSort);
	const order = useSelector(getArticlesPageOrder);
	const search = useSelector(getArticlesPageSearch);
	const type = useSelector(getArticlesPageType);

	const fetchData = useCallback(() => {
		dispatch(fetchArticlesList({ replace: true }));
	}, [dispatch]);

	const debouncedFetchData = useDebounce(fetchData, 500);

	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(articlePageActions.setView(view));
		},
		[dispatch],
	);
	const onChangeOrder = useCallback(
		(newOrder: SortOrder) => {
			dispatch(articlePageActions.setOrder(newOrder));
			dispatch(articlePageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData],
	);
	const onChangeSort = useCallback(
		(newSort: ArticleSortField) => {
			dispatch(articlePageActions.setSort(newSort));
			dispatch(articlePageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData],
	);
	const onChangeSearch = useCallback(
		(newSearch: string) => {
			dispatch(articlePageActions.setSearch(newSearch));
			dispatch(articlePageActions.setPage(1));
			debouncedFetchData();
		},
		[dispatch, debouncedFetchData],
	);
	const onChangeType = useCallback(
		(value: ArticleType) => {
			dispatch(articlePageActions.setType(value));
			dispatch(articlePageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData],
	);
	return {
		view,
		sort,
		order,
		search,
		type,
		onChangeView,
		onChangeOrder,
		onChangeSort,
		onChangeSearch,
		onChangeType,
	};
}
