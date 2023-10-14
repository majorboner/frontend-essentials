import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import EyeLogo from 'shared/assets/icons/eye.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { t } = useTranslation();
  const {
    className,
    article,
    view,
  } = props;

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        {article.title}
      </div>
    );
  }
  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <div className={cls.card}>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt="s" className={cls.img} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          <Text text={article.type.join(', ')} className={cls.types} />
          <Text text={String(article.views)} className={cls.views} />
          <Icon Svg={EyeLogo} />
        </div>
        <Text text={article.title} className={cls.title} />
      </div>
    </div>
  );
});
