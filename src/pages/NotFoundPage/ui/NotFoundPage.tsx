import { classNames } from 'shared/lib/classNames/classNames';
import { t } from 'i18next';
import { Page } from 'shared/ui/Page/Page';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => (
  <Page className={classNames(cls.NotFoundPage, {}, [className])}>
    {t('Страница не найдена')}
  </Page>
);
