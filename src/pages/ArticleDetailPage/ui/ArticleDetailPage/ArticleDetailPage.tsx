import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/Page/ui/Page';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { articleDetailsPageReducer } from '../../model/slices';
import {
  fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
  getArticleRecommendations,
} from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import cls from './ArticleDetailPage.module.scss';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
        {t('Статья не найдена!')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text size={TextSize.L} className={cls.commentTitle} title={t('Рекомендации')} />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={cls.recommendations}
          target="_blank"
        />
        <Text size={TextSize.L} className={cls.commentTitle} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>

  );
};

export default memo(ArticleDetailPage);
