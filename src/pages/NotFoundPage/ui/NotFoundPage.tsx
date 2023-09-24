import { classNames } from 'shared/lib/classNames/classNames';
import { t } from 'i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFound = ({ className }: NotFoundPageProps) => (
  <div className={classNames(cls.NotFoundPage, {}, [className])}>
    {t('Страница не найдена')}
  </div>
);
