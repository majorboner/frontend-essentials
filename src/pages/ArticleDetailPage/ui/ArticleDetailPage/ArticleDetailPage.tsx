import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/ui/Page';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import { VStack } from 'shared/ui/Stack';
import { articleDetailsPageReducer } from '../../model/slices';
import cls from './ArticleDetailPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailPageComments } from '../ArticleDetailPageComments/ArticleDetailPageComments';

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
  const { id } = useParams<{ id: string }>();

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
        <VStack max gap="16">
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRecommendationsList />
          <ArticleDetailPageComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>

  );
};

export default memo(ArticleDetailPage);
