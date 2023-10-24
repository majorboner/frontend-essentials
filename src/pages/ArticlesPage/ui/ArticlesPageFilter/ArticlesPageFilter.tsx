import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { ArticleSortField, ArticleTypeTabs, ArticleView } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { SortOrder } from 'shared/types';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticleType } from 'entities/Article/model/types/article';
import { HStack } from 'shared/ui/Stack';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import cls from './ArticlesPageFilter.module.scss';

interface ArticlesPageFilterProps {
  className?: string;
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const view = useSelector(getArticlesPageView);
  const dispatch = useAppDispatch();
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view));
  }, [dispatch]);
  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlePageActions.setOrder(newOrder));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlePageActions.setSort(newSort));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
  const onChangeSearch = useCallback((newSearch: string) => {
    dispatch(articlePageActions.setSearch(newSearch));
    dispatch(articlePageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);
  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlePageActions.setType(value));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
  return (
    <div className={classNames(cls.ArticlesPageFilter, {}, [className])}>
      <HStack
        align="center"
        justify="center"
      >
        <ArticleSortSelector
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
          order={order}
          sort={sort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
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
