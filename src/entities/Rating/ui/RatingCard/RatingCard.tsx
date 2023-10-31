import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';

interface RatingCardProps {
  className?: string;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
    <div className={classNames(cls.RatingCard, {}, [className])}>
      {t('RatingCard')}
    </div>
  );
});
