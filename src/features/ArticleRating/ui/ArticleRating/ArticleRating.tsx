import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { t } = useTranslation('articles');
  const { className, articleId } = props;
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetArticleRating({ userId: userData?.id ?? '', articleId });

  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: userData!.id,
        articleId,
        rate: starsCount,
        feedback,
      });
    } catch (error) {
      console.log(error);
    }
  }, [articleId, rateArticleMutation, userData]);

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback);
  }, [handleRateArticle]);

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, [handleRateArticle]);

  if (isLoading) {
    return (
      <Skeleton width="100%" height="120" />
    );
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      className={className}
      title={t('Оцените статью')}
      feedbackTitle={t('Напишите коммент')}
      rate={rating?.rate}
      hasFeedback
    />
  );
});

export default ArticleRating;
