import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './Rating.module.scss';

interface RatingProps {
  className?: string;
}

export const Rating = memo((props: RatingProps) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
    <div className={classNames(cls.Rating, {}, [className])}>
      {t('Rating')}
    </div>
  );
});
