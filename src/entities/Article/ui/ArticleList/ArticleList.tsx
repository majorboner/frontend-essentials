import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { t } = useTranslation();
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
  } = props;
  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
    />
  );
  return (
    <div className={classNames(cls.ArticleList, {}, [className])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
    </div>
  );
});
