import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      {t('Админ панель')}
      <Counter />
    </Page>
  );
};

export default AdminPanelPage;
