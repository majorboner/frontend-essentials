import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
  className?: string;
}

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
      {t('ARTICLE DETAILS PAGE')}
    </div>
  );
};

export default memo(ArticleDetailPage);
