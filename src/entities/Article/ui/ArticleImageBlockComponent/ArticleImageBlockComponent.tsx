import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent = memo(({ className }: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      {t('ArticleImageBlockComponent')}
    </div>
  );
});
